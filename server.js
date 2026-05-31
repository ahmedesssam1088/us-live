/**
 * US Market Live — server.js
 * S&P 500 real-time prices via TradingView WebSocket
 * + Yahoo Finance fundamentals (auto, cached 24h)
 * + Earnings calendar
 * + Options chain
 * + AI analysis (Groq / Gemini / OpenRouter)
 *
 * Node.js >= 18  |  Railway-ready
 */

const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

// ─── S&P 500 tickers ────────────────────────────────────────────────────────
// TradingView uses "NASDAQ:AAPL" / "NYSE:JPM" format
// We store them as plain tickers; TV prefix is added when subscribing
const SP500_TICKERS = [
  "AAPL","MSFT","NVDA","AMZN","META","GOOGL","GOOG","TSLA","BRK.B","AVGO",
  "JPM","LLY","UNH","XOM","V","MA","COST","HD","PG","JNJ",
  "ABBV","MRK","WMT","BAC","CRM","ORCL","CVX","MCD","NFLX","KO",
  "PEP","TMO","ACN","LIN","ABT","PM","AMD","TXN","NEE","QCOM",
  "DHR","UPS","AMGN","INTU","SPGI","HON","IBM","GS","CAT","MS",
  "RTX","T","GE","ISRG","BKNG","AXP","VRTX","BLK","LOW","SYK",
  "MDLZ","PLD","CB","ADI","GILD","TJX","MMC","CI","DE","REGN",
  "ETN","SCHW","ELV","ZTS","BSX","LRCX","SO","DUK","MU","NOW",
  "AON","SHW","CSX","NOC","KLAC","PGR","CME","ICE","WM","ITW",
  "APD","EMR","MCO","FDX","NSC","HUM","EOG","USB","PNC","TFC",
  "COF","AIG","WELL","PSA","O","SPG","WBA","CVS","MCK","ABC",
  "CNC","HCA","A","IQV","IDXX","VEEV","DXCM","PODD","MTD","WAT",
  "CTAS","PAYX","ADP","VRSK","BR","FIS","FISV","GPN","CTSH","ACN",
  "AMAT","MCHP","ON","SWKS","KEYS","CDW","SNPS","CDNS","ANSS","PTC",
  "HPQ","HPE","DELL","WDC","STX","NTAP","PSTG","FFIV","JNPR","CSCO",
  "F","GM","STLA","TM","HMC","APTV","BWA","LEA","MGA","AZO",
  "ORLY","AAP","GPC","LKQ","TSCO","DG","DLTR","TGT","KR","SYY",
  "HSY","GIS","CPB","CAG","HRL","MKC","SJM","K","KHC","MO",
  "STZ","BUD","TAP","SAM","MNST","KDP","COKE","PEP","KO","DPS",
  "AMT","CCI","EQIX","DLR","IRM","SBAC","SBA","AME","ROP","TT",
  "IR","GGG","IEX","XYL","XYLEM","AWK","WTR","SWK","PH","ROK",
  "DOV","FTV","ALLE","AOS","LII","CARR","OTIS","TDY","LDOS","BAH",
  "SAIC","DRS","L3","LHX","GD","LMT","BA","HII","TDG","HEI",
  "AXON","CW","KTOS","VLO","PSX","MPC","PBF","DK","HES","PXD",
  "OXY","DVN","FANG","MRO","APA","HAL","SLB","BKR","NOV","OII",
  "D","ES","EXC","PCG","XEL","WEC","CMS","CNP","NI","AEE",
  "LNT","EVRG","OTTR","IDA","POR","AVA","NWE","MGEE","BKH","SR",
  "HIG","ALL","TRV","MET","AFL","GL","PRU","UNM","LNC","FG",
  "CINF","RLI","ERIE","MMI","WRB","RE","RNR","AXS","ACGL","MKL",
  "JPM","BAC","WFC","C","GS","MS","BK","STT","NTRS","HBAN",
  "RF","CFG","KEY","FITB","MTB","ZION","CMA","FHN","WAL","SNV",
  "NDAQ","ICE","CME","CBOE","OCC","MKTX","LPLA","RJF","SF","EVR",
  "LAZ","HLI","PJT","MC","GHL","FRC","SVB","SIVB","PACW","WAB",
  "DPZ","SBUX","CMG","YUM","QSR","WEN","JACK","DENN","RUTH","TXRH",
  "DKNG","MGM","LVS","WYNN","CZR","PENN","BYD","CHDN","GDEN","FULL",
  "ABNB","BKNG","EXPE","TRIP","PCLN","MMYT","DESP","LTRPA","TZOO","ICLR",
  "DHI","LEN","PHM","NVR","TOL","MDC","CCS","TMHC","LGIH","SKY",
  "HD","LOW","TSCO","WSM","RH","BBBY","PIR","TCS","ARHS","LESL"
];

// Remove duplicates
const TICKERS = [...new Set(SP500_TICKERS)];

// ─── In-memory stores ────────────────────────────────────────────────────────
const priceCache   = {};   // { AAPL: { price, chg, chgPct, open, high, low, volume, prevClose, high52, low52, ts } }
const fundCache    = {};   // { AAPL: { pe, eps, marketCap, target, fetchedAt } }
const earningsCache = {};  // { AAPL: { date, epsEstimate, fetchedAt } }

const FUND_TTL     = 24 * 60 * 60 * 1000;  // 24 hours
const EARNINGS_TTL = 12 * 60 * 60 * 1000;  // 12 hours

// ─── TradingView WebSocket ───────────────────────────────────────────────────
let tvWs = null;
let tvConnected = false;
let reconnectTimer = null;

function generateSession(prefix = "qs") {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let s = prefix + "_";
  for (let i = 0; i < 12; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function tvMsg(func, args) {
  const payload = JSON.stringify({ m: func, p: args });
  return `~m~${payload.length}~m~${payload}`;
}

function sendTv(msg) {
  if (tvWs && tvWs.readyState === WebSocket.OPEN) {
    tvWs.send(msg);
  }
}

// Determine TV exchange prefix for each ticker
function tvSymbol(ticker) {
  // Well-known NASDAQ stocks
  const NASDAQ = new Set([
    "AAPL","MSFT","NVDA","AMZN","META","GOOGL","GOOG","TSLA","AVGO","NFLX",
    "AMD","QCOM","INTU","ADI","LRCX","KLAC","MCHP","ON","SWKS","MU",
    "SNPS","CDNS","ANSS","PTC","AMAT","KEYS","CSCO","ISRG","BKNG","REGN",
    "GILD","VRTX","IDXX","VEEV","DXCM","PODD","PAYX","ADP","VRSK","CTSH",
    "CDW","NTAP","PSTG","MNST","KDP","SBUX","DKNG","ABNB","EXPE","CMCSA",
    "COST","ODFL","FAST","SIRI","WBA","CTAS","FISV","BIIB","MRNA"
  ]);
  return NASDAQ.has(ticker) ? `NASDAQ:${ticker}` : `NYSE:${ticker}`;
}

function connectTradingView() {
  if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null; }

  console.log("🔌 Connecting to TradingView WebSocket...");

  tvWs = new WebSocket("wss://data.tradingview.com/socket.io/websocket", {
    headers: {
      "Origin": "https://www.tradingview.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
  });

  const quoteSession = generateSession("qs");

  tvWs.on("open", () => {
    console.log("✅ TradingView connected");
    tvConnected = true;

    // Authenticate (use public token for free data)
    sendTv(tvMsg("set_auth_token", ["unauthorized_user_token"]));
    sendTv(tvMsg("quote_create_session", [quoteSession]));
    sendTv(tvMsg("quote_set_fields", [quoteSession,
      "lp","ch","chp","open_price","high_price","low_price",
      "volume","prev_close_price","high_price_52","low_price_52"
    ]));

    // Subscribe to all tickers in batches to avoid overwhelming the socket
    const batchSize = 50;
    let delay = 0;
    for (let i = 0; i < TICKERS.length; i += batchSize) {
      const batch = TICKERS.slice(i, i + batchSize);
      setTimeout(() => {
        batch.forEach(ticker => {
          sendTv(tvMsg("quote_add_symbols", [quoteSession, tvSymbol(ticker)]));
        });
      }, delay);
      delay += 500;
    }
  });

  tvWs.on("message", (raw) => {
    const data = raw.toString();

    // Heartbeat
    if (data.includes("~h~")) {
      const hb = data.match(/~h~(\d+)/);
      if (hb) tvWs.send(`~m~${hb[1].length + 3}~m~~h~${hb[1]}`);
      return;
    }

    // Parse multiple messages in one frame
    const parts = data.split(/~m~\d+~m~/).filter(Boolean);
    for (const part of parts) {
      try {
        const msg = JSON.parse(part);
        if (msg.m === "qsd" && msg.p && msg.p[1]) {
          const update = msg.p[1];
          const rawSym = update.n || "";
          const ticker = rawSym.replace(/^(NASDAQ:|NYSE:|AMEX:)/, "");
          if (!ticker) continue;

          const v = update.v || {};
          if (!priceCache[ticker]) priceCache[ticker] = {};

          const c = priceCache[ticker];
          if (v.lp          !== undefined) c.price     = v.lp;
          if (v.ch          !== undefined) c.chg       = v.ch;
          if (v.chp         !== undefined) c.chgPct    = v.chp;
          if (v.open_price  !== undefined) c.open      = v.open_price;
          if (v.high_price  !== undefined) c.high      = v.high_price;
          if (v.low_price   !== undefined) c.low       = v.low_price;
          if (v.volume      !== undefined) c.volume    = v.volume;
          if (v.prev_close_price !== undefined) c.prevClose = v.prev_close_price;
          if (v.high_price_52    !== undefined) c.high52    = v.high_price_52;
          if (v.low_price_52     !== undefined) c.low52     = v.low_price_52;
          c.ts = Date.now();
        }
      } catch (_) {}
    }
  });

  tvWs.on("close", () => {
    console.log("⚠️ TradingView disconnected — reconnecting in 10s");
    tvConnected = false;
    reconnectTimer = setTimeout(connectTradingView, 10000);
  });

  tvWs.on("error", (err) => {
    console.error("❌ TradingView error:", err.message);
    tvWs.close();
  });
}

// ─── Yahoo Finance helpers ───────────────────────────────────────────────────
async function fetchFundamentals(ticker) {
  const now = Date.now();
  if (fundCache[ticker] && (now - fundCache[ticker].fetchedAt) < FUND_TTL) {
    return fundCache[ticker];
  }

  try {
    // Yahoo Finance v8 quote endpoint (no API key needed)
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;
    const res  = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const json = await res.json();
    const meta = json?.chart?.result?.[0]?.meta || {};

    // Yahoo Finance v10 for detailed fundamentals
    const url2 = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(ticker)}?modules=defaultKeyStatistics,financialData,summaryDetail`;
    const res2  = await fetch(url2, { headers: { "User-Agent": "Mozilla/5.0" } });
    const json2 = await res2.json();
    const result = json2?.quoteSummary?.result?.[0] || {};
    const ks = result.defaultKeyStatistics || {};
    const fd = result.financialData || {};
    const sd = result.summaryDetail || {};

    const data = {
      pe:        sd.trailingPE?.raw       || ks.trailingPE?.raw       || null,
      forwardPE: sd.forwardPE?.raw        || ks.forwardPE?.raw        || null,
      eps:       ks.trailingEps?.raw      || null,
      marketCap: ks.marketCap?.raw        || null,
      marketCapFmt: ks.marketCap?.fmt     || null,
      beta:      ks.beta?.raw             || null,
      target:    fd.targetMeanPrice?.raw  || null,
      targetHigh: fd.targetHighPrice?.raw || null,
      targetLow:  fd.targetLowPrice?.raw  || null,
      analystCount: fd.numberOfAnalystOpinions?.raw || null,
      recommendation: fd.recommendationKey || null,
      revenueGrowth: fd.revenueGrowth?.raw || null,
      grossMargins:  fd.grossMargins?.raw  || null,
      high52: sd.fiftyTwoWeekHigh?.raw || null,
      low52:  sd.fiftyTwoWeekLow?.raw  || null,
      fetchedAt: now
    };

    fundCache[ticker] = data;
    return data;
  } catch (err) {
    console.error(`Fundamentals fetch failed for ${ticker}:`, err.message);
    return fundCache[ticker] || null;
  }
}

async function fetchEarnings(ticker) {
  const now = Date.now();
  if (earningsCache[ticker] && (now - earningsCache[ticker].fetchedAt) < EARNINGS_TTL) {
    return earningsCache[ticker];
  }

  try {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(ticker)}?modules=calendarEvents,earningsTrend`;
    const res  = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const json = await res.json();
    const result = json?.quoteSummary?.result?.[0] || {};
    const cal = result.calendarEvents || {};
    const trend = result.earningsTrend?.trend || [];

    const nextEarnings = cal.earnings?.earningsDate?.[0]?.raw
      ? new Date(cal.earnings.earningsDate[0].raw * 1000).toISOString().split("T")[0]
      : null;

    // Next quarter estimate
    const nextQ = trend.find(t => t.period === "+1q") || trend[0] || {};

    const data = {
      nextEarningsDate: nextEarnings,
      epsEstimate:  nextQ.earningsEstimate?.avg?.raw   || null,
      revenueEstimate: nextQ.revenueEstimate?.avg?.raw || null,
      epsTrend: {
        current: nextQ.earningsEstimate?.avg?.raw || null,
        "7dAgo": nextQ.epsTrend?.["7daysAgo"]?.raw || null,
        "30dAgo": nextQ.epsTrend?.["30daysAgo"]?.raw || null,
        "90dAgo": nextQ.epsTrend?.["90daysAgo"]?.raw || null,
      },
      fetchedAt: now
    };

    earningsCache[ticker] = data;
    return data;
  } catch (err) {
    console.error(`Earnings fetch failed for ${ticker}:`, err.message);
    return earningsCache[ticker] || null;
  }
}

async function fetchOptions(ticker) {
  try {
    // Yahoo Finance options — no key needed, returns nearest expiry by default
    const url = `https://query1.finance.yahoo.com/v7/finance/options/${encodeURIComponent(ticker)}`;
    const res  = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const json = await res.json();
    const chain = json?.optionChain?.result?.[0] || {};

    const expirationDates = (chain.expirationDates || []).map(ts =>
      new Date(ts * 1000).toISOString().split("T")[0]
    );

    const opts = chain.options?.[0] || {};

    // Top 10 calls & puts by open interest
    const calls = (opts.calls || [])
      .sort((a, b) => (b.openInterest?.raw || 0) - (a.openInterest?.raw || 0))
      .slice(0, 10)
      .map(c => ({
        strike: c.strike?.raw,
        expiry: new Date(c.expiration?.raw * 1000).toISOString().split("T")[0],
        bid:    c.bid?.raw,
        ask:    c.ask?.raw,
        iv:     c.impliedVolatility?.raw ? (c.impliedVolatility.raw * 100).toFixed(1) + "%" : null,
        oi:     c.openInterest?.raw,
        volume: c.volume?.raw,
        itm:    c.inTheMoney
      }));

    const puts = (opts.puts || [])
      .sort((a, b) => (b.openInterest?.raw || 0) - (a.openInterest?.raw || 0))
      .slice(0, 10)
      .map(p => ({
        strike: p.strike?.raw,
        expiry: new Date(p.expiration?.raw * 1000).toISOString().split("T")[0],
        bid:    p.bid?.raw,
        ask:    p.ask?.raw,
        iv:     p.impliedVolatility?.raw ? (p.impliedVolatility.raw * 100).toFixed(1) + "%" : null,
        oi:     p.openInterest?.raw,
        volume: p.volume?.raw,
        itm:    p.inTheMoney
      }));

    return {
      ticker,
      expirationDates,
      nearestExpiry: expirationDates[0] || null,
      calls,
      puts,
      putCallRatio: puts.length && calls.length
        ? (puts.reduce((s, p) => s + (p.oi || 0), 0) /
           calls.reduce((s, c) => s + (c.oi || 0), 1)).toFixed(2)
        : null,
      fetchedAt: Date.now()
    };
  } catch (err) {
    console.error(`Options fetch failed for ${ticker}:`, err.message);
    return null;
  }
}

// ─── Signal calculation (same logic as EGX Live) ────────────────────────────
function calcSignal(ticker, price) {
  // Uses: price position in 52w range + analyst upside + recommendation
  const p = priceCache[ticker] || {};
  const f = fundCache[ticker]  || {};

  const high52 = p.high52 || 0;
  const low52  = p.low52  || 0;
  const target = f.target  || 0;
  const rec    = f.recommendation || "hold"; // "strong_buy","buy","hold","sell","strong_sell"

  if (!price || !high52 || !low52) return "—";

  const pct52  = high52 > low52 ? (price - low52) / (high52 - low52) : 0.5;
  const upside = target > 0 ? (target - price) / price : 0;

  const recScore = {
    "strong_buy": 2, "buy": 1, "hold": 0, "sell": -1, "strong_sell": -2
  }[rec] ?? 0;

  const score = (1 - pct52) * 40 + upside * 40 + recScore * 10;

  if (score >= 50) return "Strong Buy";
  if (score >= 20) return "Buy";
  if (score >= -10) return "Hold";
  if (score >= -30) return "Sell";
  return "Strong Sell";
}

// ─── AI Analysis ─────────────────────────────────────────────────────────────
async function callGroq(prompt) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("No GROQ_API_KEY");

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1500
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || "Groq error");
  return json.choices[0].message.content;
}

async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("No GEMINI_API_KEY");

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    }
  );
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || "Gemini error");
  return json.candidates[0].content.parts[0].text;
}

async function callOpenRouter(prompt, model = "qwen/qwen3-235b-a22b:free") {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("No OPENROUTER_API_KEY");

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://us-market-live.up.railway.app",
      "X-Title": "US Market Live"
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || "OpenRouter error");
  return json.choices[0].message.content;
}

const OPENROUTER_FALLBACKS = [
  "meta-llama/llama-3.3-70b-instruct:free",
  "google/gemini-2.0-flash-exp:free",
  "deepseek/deepseek-r1:free"
];

async function analyzeAuto(prompt) {
  // Try providers in order: Groq → Gemini → OpenRouter models
  const providers = [
    () => callGroq(prompt),
    () => callGemini(prompt),
    ...OPENROUTER_FALLBACKS.map(m => () => callOpenRouter(prompt, m))
  ];

  let lastErr;
  for (const fn of providers) {
    try { return await fn(); }
    catch (e) { lastErr = e; console.warn("Provider failed:", e.message); }
  }
  throw lastErr || new Error("All providers failed");
}

// ─── API Routes ───────────────────────────────────────────────────────────────

// Health check
app.get("/api/health", (req, res) => {
  const withPrices = TICKERS.filter(t => priceCache[t]?.price).length;
  const missing    = TICKERS.filter(t => !priceCache[t]?.price);
  res.json({
    status: tvConnected ? "connected" : "disconnected",
    total: TICKERS.length,
    withPrices,
    missing: missing.slice(0, 20),   // only first 20
    uptime: process.uptime(),
    ts: new Date().toISOString()
  });
});

// All prices
app.get("/api/prices", (req, res) => {
  const result = {};
  for (const ticker of TICKERS) {
    const p = priceCache[ticker];
    const f = fundCache[ticker];
    if (!p?.price) continue;

    const signal = calcSignal(ticker, p.price);
    const upside = f?.target ? ((f.target - p.price) / p.price * 100).toFixed(1) : null;

    result[ticker] = {
      ...p,
      signal,
      upside,
      target:    f?.target    || null,
      marketCap: f?.marketCap || null,
      pe:        f?.pe        || null,
      recommendation: f?.recommendation || null
    };
  }
  res.json(result);
});

// Single stock price
app.get("/api/price/:ticker", (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  const p = priceCache[ticker];
  if (!p?.price) return res.status(404).json({ error: "Price not found", ticker });
  res.json({ ticker, ...p });
});

// Fundamentals (auto-fetched from Yahoo Finance, cached 24h)
app.get("/api/fundamentals/:ticker", async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  try {
    const data = await fetchFundamentals(ticker);
    if (!data) return res.status(404).json({ error: "Not found", ticker });
    res.json({ ticker, ...data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Earnings calendar for a single stock
app.get("/api/earnings/:ticker", async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  try {
    const data = await fetchEarnings(ticker);
    if (!data) return res.status(404).json({ error: "Not found", ticker });
    res.json({ ticker, ...data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upcoming earnings for all tracked tickers (cached entries only, no mass-fetch)
app.get("/api/earnings", (req, res) => {
  const now = Date.now();
  const upcoming = [];

  for (const ticker of TICKERS) {
    const e = earningsCache[ticker];
    if (e?.nextEarningsDate) {
      const daysAway = Math.round(
        (new Date(e.nextEarningsDate) - now) / 86400000
      );
      if (daysAway >= -1 && daysAway <= 30) {
        upcoming.push({ ticker, ...e, daysAway });
      }
    }
  }

  upcoming.sort((a, b) => a.daysAway - b.daysAway);
  res.json({ count: upcoming.length, upcoming });
});

// Options chain
app.get("/api/options/:ticker", async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  try {
    const data = await fetchOptions(ticker);
    if (!data) return res.status(404).json({ error: "Options not found", ticker });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// AI Analysis
app.post("/api/analyze", async (req, res) => {
  const { provider = "auto", prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "prompt is required" });

  try {
    let result;
    if      (provider === "groq")       result = await callGroq(prompt);
    else if (provider === "gemini")     result = await callGemini(prompt);
    else if (provider === "openrouter") result = await callOpenRouter(prompt);
    else                                result = await analyzeAuto(prompt);

    res.json({ success: true, result, provider });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Debug: check which API keys are set
app.get("/api/debug-keys", (req, res) => {
  res.json({
    GROQ:        !!process.env.GROQ_API_KEY,
    GEMINI:      !!process.env.GEMINI_API_KEY,
    OPENROUTER:  !!process.env.OPENROUTER_API_KEY
  });
});

// Warm up earnings for a batch of popular stocks in the background
async function warmEarnings() {
  const popular = ["AAPL","MSFT","NVDA","AMZN","META","GOOGL","TSLA","JPM","V","MA"];
  for (const t of popular) {
    await fetchEarnings(t).catch(() => {});
    await new Promise(r => setTimeout(r, 1000)); // 1s between requests
  }
}

// Warm fundamentals for top 50 stocks in the background (slowly, to avoid rate limits)
async function warmFundamentals() {
  const top50 = TICKERS.slice(0, 50);
  for (const t of top50) {
    await fetchFundamentals(t).catch(() => {});
    await new Promise(r => setTimeout(r, 1500)); // 1.5s between requests
  }
}

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 US Market Live running on port ${PORT}`);
  connectTradingView();

  // Warm up caches after 30s (give TV time to connect first)
  setTimeout(() => {
    warmFundamentals().then(() => console.log("✅ Fundamentals warm-up done"));
    warmEarnings().then(()      => console.log("✅ Earnings warm-up done"));
  }, 30000);

  // Refresh fundamentals every 24h
  setInterval(() => {
    console.log("🔄 Refreshing fundamentals cache...");
    warmFundamentals().catch(console.error);
  }, FUND_TTL);
});
