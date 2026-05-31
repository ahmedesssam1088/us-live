/**
 * US Market Live — data.js
 * S&P 500 static company data
 * PE / EPS / Target / MarketCap → fetched automatically from Yahoo Finance (server.js)
 * This file only stores: nameEn, nameFull, sector, icon, color
 *
 * Sectors (11 GICS):
 *   Technology · Financials · Healthcare · Consumer Discretionary
 *   Industrials · Communication Services · Consumer Staples
 *   Energy · Utilities · Real Estate · Materials
 *
 * Last updated: May 2026
 */

const SECTOR_COLORS = {
  "Technology":                "#6366f1",   // indigo
  "Financials":                "#10b981",   // emerald
  "Healthcare":                "#3b82f6",   // blue
  "Consumer Discretionary":    "#f59e0b",   // amber
  "Industrials":               "#8b5cf6",   // violet
  "Communication Services":    "#06b6d4",   // cyan
  "Consumer Staples":          "#84cc16",   // lime
  "Energy":                    "#f97316",   // orange
  "Utilities":                 "#ec4899",   // pink
  "Real Estate":               "#14b8a6",   // teal
  "Materials":                 "#a78bfa",   // purple-light
};

const STOCKS = {
  // ── TECHNOLOGY ──────────────────────────────────────────────────────────────
  "AAPL":  { nameEn:"Apple",               nameFull:"Apple Inc.",                        sector:"Technology",             icon:"🍎", color:SECTOR_COLORS["Technology"] },
  "MSFT":  { nameEn:"Microsoft",           nameFull:"Microsoft Corporation",             sector:"Technology",             icon:"🪟", color:SECTOR_COLORS["Technology"] },
  "NVDA":  { nameEn:"NVIDIA",              nameFull:"NVIDIA Corporation",                sector:"Technology",             icon:"🟢", color:SECTOR_COLORS["Technology"] },
  "AVGO":  { nameEn:"Broadcom",            nameFull:"Broadcom Inc.",                     sector:"Technology",             icon:"📡", color:SECTOR_COLORS["Technology"] },
  "AMD":   { nameEn:"AMD",                 nameFull:"Advanced Micro Devices",            sector:"Technology",             icon:"💻", color:SECTOR_COLORS["Technology"] },
  "QCOM":  { nameEn:"Qualcomm",            nameFull:"QUALCOMM Incorporated",             sector:"Technology",             icon:"📶", color:SECTOR_COLORS["Technology"] },
  "INTU":  { nameEn:"Intuit",              nameFull:"Intuit Inc.",                       sector:"Technology",             icon:"💰", color:SECTOR_COLORS["Technology"] },
  "ADI":   { nameEn:"Analog Devices",      nameFull:"Analog Devices Inc.",               sector:"Technology",             icon:"⚡", color:SECTOR_COLORS["Technology"] },
  "LRCX":  { nameEn:"Lam Research",        nameFull:"Lam Research Corporation",          sector:"Technology",             icon:"🔬", color:SECTOR_COLORS["Technology"] },
  "KLAC":  { nameEn:"KLA Corp",            nameFull:"KLA Corporation",                   sector:"Technology",             icon:"🔭", color:SECTOR_COLORS["Technology"] },
  "MCHP":  { nameEn:"Microchip Tech",      nameFull:"Microchip Technology",              sector:"Technology",             icon:"🔌", color:SECTOR_COLORS["Technology"] },
  "ON":    { nameEn:"ON Semiconductor",    nameFull:"ON Semiconductor Corporation",      sector:"Technology",             icon:"💡", color:SECTOR_COLORS["Technology"] },
  "MU":    { nameEn:"Micron",              nameFull:"Micron Technology Inc.",            sector:"Technology",             icon:"🧠", color:SECTOR_COLORS["Technology"] },
  "AMAT":  { nameEn:"Applied Materials",   nameFull:"Applied Materials Inc.",            sector:"Technology",             icon:"🏭", color:SECTOR_COLORS["Technology"] },
  "SNPS":  { nameEn:"Synopsys",            nameFull:"Synopsys Inc.",                     sector:"Technology",             icon:"🔧", color:SECTOR_COLORS["Technology"] },
  "CDNS":  { nameEn:"Cadence",             nameFull:"Cadence Design Systems",            sector:"Technology",             icon:"📐", color:SECTOR_COLORS["Technology"] },
  "ANSS":  { nameEn:"ANSYS",               nameFull:"ANSYS Inc.",                        sector:"Technology",             icon:"📊", color:SECTOR_COLORS["Technology"] },
  "PTC":   { nameEn:"PTC Inc",             nameFull:"PTC Inc.",                          sector:"Technology",             icon:"🛠️", color:SECTOR_COLORS["Technology"] },
  "CSCO":  { nameEn:"Cisco",               nameFull:"Cisco Systems Inc.",                sector:"Technology",             icon:"🌐", color:SECTOR_COLORS["Technology"] },
  "IBM":   { nameEn:"IBM",                 nameFull:"International Business Machines",   sector:"Technology",             icon:"🔵", color:SECTOR_COLORS["Technology"] },
  "ORCL":  { nameEn:"Oracle",              nameFull:"Oracle Corporation",                sector:"Technology",             icon:"🔴", color:SECTOR_COLORS["Technology"] },
  "CRM":   { nameEn:"Salesforce",          nameFull:"Salesforce Inc.",                   sector:"Technology",             icon:"☁️", color:SECTOR_COLORS["Technology"] },
  "NOW":   { nameEn:"ServiceNow",          nameFull:"ServiceNow Inc.",                   sector:"Technology",             icon:"⚙️", color:SECTOR_COLORS["Technology"] },
  "KEYS":  { nameEn:"Keysight",            nameFull:"Keysight Technologies",             sector:"Technology",             icon:"📏", color:SECTOR_COLORS["Technology"] },
  "CDW":   { nameEn:"CDW Corp",            nameFull:"CDW Corporation",                   sector:"Technology",             icon:"🖥️", color:SECTOR_COLORS["Technology"] },
  "HPQ":   { nameEn:"HP Inc",              nameFull:"HP Inc.",                           sector:"Technology",             icon:"🖨️", color:SECTOR_COLORS["Technology"] },
  "HPE":   { nameEn:"HP Enterprise",       nameFull:"Hewlett Packard Enterprise",        sector:"Technology",             icon:"🗄️", color:SECTOR_COLORS["Technology"] },
  "DELL":  { nameEn:"Dell",                nameFull:"Dell Technologies",                 sector:"Technology",             icon:"💾", color:SECTOR_COLORS["Technology"] },
  "WDC":   { nameEn:"Western Digital",     nameFull:"Western Digital Corporation",       sector:"Technology",             icon:"💿", color:SECTOR_COLORS["Technology"] },
  "STX":   { nameEn:"Seagate",             nameFull:"Seagate Technology",                sector:"Technology",             icon:"🖴",  color:SECTOR_COLORS["Technology"] },
  "NTAP":  { nameEn:"NetApp",              nameFull:"NetApp Inc.",                       sector:"Technology",             icon:"☁️", color:SECTOR_COLORS["Technology"] },
  "PSTG":  { nameEn:"Pure Storage",        nameFull:"Pure Storage Inc.",                 sector:"Technology",             icon:"📦", color:SECTOR_COLORS["Technology"] },
  "ACN":   { nameEn:"Accenture",           nameFull:"Accenture PLC",                     sector:"Technology",             icon:"🏢", color:SECTOR_COLORS["Technology"] },
  "CTSH":  { nameEn:"Cognizant",           nameFull:"Cognizant Technology Solutions",    sector:"Technology",             icon:"🤝", color:SECTOR_COLORS["Technology"] },
  "TXN":   { nameEn:"Texas Instruments",   nameFull:"Texas Instruments Inc.",            sector:"Technology",             icon:"🔢", color:SECTOR_COLORS["Technology"] },
  "SWKS":  { nameEn:"Skyworks",            nameFull:"Skyworks Solutions",                sector:"Technology",             icon:"📡", color:SECTOR_COLORS["Technology"] },

  // ── COMMUNICATION SERVICES ───────────────────────────────────────────────────
  "META":  { nameEn:"Meta",                nameFull:"Meta Platforms Inc.",               sector:"Communication Services", icon:"🔵", color:SECTOR_COLORS["Communication Services"] },
  "GOOGL": { nameEn:"Alphabet A",          nameFull:"Alphabet Inc. Class A",             sector:"Communication Services", icon:"🔍", color:SECTOR_COLORS["Communication Services"] },
  "GOOG":  { nameEn:"Alphabet C",          nameFull:"Alphabet Inc. Class C",             sector:"Communication Services", icon:"🔍", color:SECTOR_COLORS["Communication Services"] },
  "NFLX":  { nameEn:"Netflix",             nameFull:"Netflix Inc.",                      sector:"Communication Services", icon:"🎬", color:SECTOR_COLORS["Communication Services"] },
  "T":     { nameEn:"AT&T",                nameFull:"AT&T Inc.",                         sector:"Communication Services", icon:"📞", color:SECTOR_COLORS["Communication Services"] },
  "VZ":    { nameEn:"Verizon",             nameFull:"Verizon Communications",            sector:"Communication Services", icon:"📱", color:SECTOR_COLORS["Communication Services"] },
  "TMUS":  { nameEn:"T-Mobile",            nameFull:"T-Mobile US Inc.",                  sector:"Communication Services", icon:"🟣", color:SECTOR_COLORS["Communication Services"] },
  "CMCSA": { nameEn:"Comcast",             nameFull:"Comcast Corporation",               sector:"Communication Services", icon:"📺", color:SECTOR_COLORS["Communication Services"] },
  "DIS":   { nameEn:"Disney",              nameFull:"The Walt Disney Company",           sector:"Communication Services", icon:"🏰", color:SECTOR_COLORS["Communication Services"] },
  "PARA":  { nameEn:"Paramount",           nameFull:"Paramount Global",                  sector:"Communication Services", icon:"⭐", color:SECTOR_COLORS["Communication Services"] },
  "WBD":   { nameEn:"Warner Bros",         nameFull:"Warner Bros. Discovery",            sector:"Communication Services", icon:"🎥", color:SECTOR_COLORS["Communication Services"] },
  "FOXA":  { nameEn:"Fox Corp A",          nameFull:"Fox Corporation Class A",           sector:"Communication Services", icon:"🦊", color:SECTOR_COLORS["Communication Services"] },
  "IPG":   { nameEn:"Interpublic",         nameFull:"Interpublic Group",                 sector:"Communication Services", icon:"📢", color:SECTOR_COLORS["Communication Services"] },
  "OMC":   { nameEn:"Omnicom",             nameFull:"Omnicom Group Inc.",                sector:"Communication Services", icon:"📣", color:SECTOR_COLORS["Communication Services"] },

  // ── CONSUMER DISCRETIONARY ───────────────────────────────────────────────────
  "AMZN":  { nameEn:"Amazon",              nameFull:"Amazon.com Inc.",                   sector:"Consumer Discretionary", icon:"📦", color:SECTOR_COLORS["Consumer Discretionary"] },
  "TSLA":  { nameEn:"Tesla",               nameFull:"Tesla Inc.",                        sector:"Consumer Discretionary", icon:"⚡", color:SECTOR_COLORS["Consumer Discretionary"] },
  "HD":    { nameEn:"Home Depot",          nameFull:"The Home Depot Inc.",               sector:"Consumer Discretionary", icon:"🏠", color:SECTOR_COLORS["Consumer Discretionary"] },
  "MCD":   { nameEn:"McDonald's",          nameFull:"McDonald's Corporation",            sector:"Consumer Discretionary", icon:"🍔", color:SECTOR_COLORS["Consumer Discretionary"] },
  "BKNG":  { nameEn:"Booking Holdings",    nameFull:"Booking Holdings Inc.",             sector:"Consumer Discretionary", icon:"✈️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "LOW":   { nameEn:"Lowe's",              nameFull:"Lowe's Companies Inc.",             sector:"Consumer Discretionary", icon:"🔨", color:SECTOR_COLORS["Consumer Discretionary"] },
  "SBUX":  { nameEn:"Starbucks",           nameFull:"Starbucks Corporation",             sector:"Consumer Discretionary", icon:"☕", color:SECTOR_COLORS["Consumer Discretionary"] },
  "TJX":   { nameEn:"TJX Companies",       nameFull:"TJX Companies Inc.",               sector:"Consumer Discretionary", icon:"🛍️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "NKE":   { nameEn:"Nike",                nameFull:"NIKE Inc.",                         sector:"Consumer Discretionary", icon:"👟", color:SECTOR_COLORS["Consumer Discretionary"] },
  "ABNB":  { nameEn:"Airbnb",              nameFull:"Airbnb Inc.",                       sector:"Consumer Discretionary", icon:"🏡", color:SECTOR_COLORS["Consumer Discretionary"] },
  "CMG":   { nameEn:"Chipotle",            nameFull:"Chipotle Mexican Grill",            sector:"Consumer Discretionary", icon:"🌯", color:SECTOR_COLORS["Consumer Discretionary"] },
  "GM":    { nameEn:"General Motors",      nameFull:"General Motors Company",            sector:"Consumer Discretionary", icon:"🚗", color:SECTOR_COLORS["Consumer Discretionary"] },
  "F":     { nameEn:"Ford",                nameFull:"Ford Motor Company",                sector:"Consumer Discretionary", icon:"🚙", color:SECTOR_COLORS["Consumer Discretionary"] },
  "EXPE":  { nameEn:"Expedia",             nameFull:"Expedia Group Inc.",                sector:"Consumer Discretionary", icon:"🗺️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "ORLY":  { nameEn:"O'Reilly Auto",       nameFull:"O'Reilly Automotive Inc.",          sector:"Consumer Discretionary", icon:"🔧", color:SECTOR_COLORS["Consumer Discretionary"] },
  "AZO":   { nameEn:"AutoZone",            nameFull:"AutoZone Inc.",                     sector:"Consumer Discretionary", icon:"🛻", color:SECTOR_COLORS["Consumer Discretionary"] },
  "DHI":   { nameEn:"D.R. Horton",         nameFull:"D.R. Horton Inc.",                  sector:"Consumer Discretionary", icon:"🏗️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "LEN":   { nameEn:"Lennar",              nameFull:"Lennar Corporation",                sector:"Consumer Discretionary", icon:"🏘️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "PHM":   { nameEn:"PulteGroup",          nameFull:"PulteGroup Inc.",                   sector:"Consumer Discretionary", icon:"🏠", color:SECTOR_COLORS["Consumer Discretionary"] },
  "APTV":  { nameEn:"Aptiv",               nameFull:"Aptiv PLC",                         sector:"Consumer Discretionary", icon:"🔌", color:SECTOR_COLORS["Consumer Discretionary"] },
  "RH":    { nameEn:"RH",                  nameFull:"RH (Restoration Hardware)",         sector:"Consumer Discretionary", icon:"🪑", color:SECTOR_COLORS["Consumer Discretionary"] },
  "WSM":   { nameEn:"Williams-Sonoma",     nameFull:"Williams-Sonoma Inc.",              sector:"Consumer Discretionary", icon:"🍳", color:SECTOR_COLORS["Consumer Discretionary"] },
  "YUM":   { nameEn:"Yum! Brands",         nameFull:"Yum! Brands Inc.",                  sector:"Consumer Discretionary", icon:"🍕", color:SECTOR_COLORS["Consumer Discretionary"] },
  "QSR":   { nameEn:"Restaurant Brands",   nameFull:"Restaurant Brands International",  sector:"Consumer Discretionary", icon:"🍟", color:SECTOR_COLORS["Consumer Discretionary"] },
  "DPZ":   { nameEn:"Domino's",            nameFull:"Domino's Pizza Inc.",               sector:"Consumer Discretionary", icon:"🍕", color:SECTOR_COLORS["Consumer Discretionary"] },
  "TSCO":  { nameEn:"Tractor Supply",      nameFull:"Tractor Supply Company",            sector:"Consumer Discretionary", icon:"🚜", color:SECTOR_COLORS["Consumer Discretionary"] },
  "EBAY":  { nameEn:"eBay",                nameFull:"eBay Inc.",                         sector:"Consumer Discretionary", icon:"🛒", color:SECTOR_COLORS["Consumer Discretionary"] },
  "MGM":   { nameEn:"MGM Resorts",         nameFull:"MGM Resorts International",         sector:"Consumer Discretionary", icon:"🎰", color:SECTOR_COLORS["Consumer Discretionary"] },
  "LVS":   { nameEn:"Las Vegas Sands",     nameFull:"Las Vegas Sands Corp.",             sector:"Consumer Discretionary", icon:"🎲", color:SECTOR_COLORS["Consumer Discretionary"] },
  "WYNN":  { nameEn:"Wynn Resorts",        nameFull:"Wynn Resorts Limited",              sector:"Consumer Discretionary", icon:"♠️", color:SECTOR_COLORS["Consumer Discretionary"] },
  "DKNG":  { nameEn:"DraftKings",          nameFull:"DraftKings Inc.",                   sector:"Consumer Discretionary", icon:"🎯", color:SECTOR_COLORS["Consumer Discretionary"] },

  // ── CONSUMER STAPLES ─────────────────────────────────────────────────────────
  "WMT":   { nameEn:"Walmart",             nameFull:"Walmart Inc.",                      sector:"Consumer Staples",       icon:"🛒", color:SECTOR_COLORS["Consumer Staples"] },
  "COST":  { nameEn:"Costco",              nameFull:"Costco Wholesale Corporation",      sector:"Consumer Staples",       icon:"📦", color:SECTOR_COLORS["Consumer Staples"] },
  "PG":    { nameEn:"Procter & Gamble",    nameFull:"Procter & Gamble Company",          sector:"Consumer Staples",       icon:"🧴", color:SECTOR_COLORS["Consumer Staples"] },
  "KO":    { nameEn:"Coca-Cola",           nameFull:"The Coca-Cola Company",             sector:"Consumer Staples",       icon:"🥤", color:SECTOR_COLORS["Consumer Staples"] },
  "PEP":   { nameEn:"PepsiCo",             nameFull:"PepsiCo Inc.",                      sector:"Consumer Staples",       icon:"🍹", color:SECTOR_COLORS["Consumer Staples"] },
  "PM":    { nameEn:"Philip Morris",       nameFull:"Philip Morris International",       sector:"Consumer Staples",       icon:"🚬", color:SECTOR_COLORS["Consumer Staples"] },
  "MO":    { nameEn:"Altria",              nameFull:"Altria Group Inc.",                 sector:"Consumer Staples",       icon:"🍂", color:SECTOR_COLORS["Consumer Staples"] },
  "MDLZ":  { nameEn:"Mondelez",            nameFull:"Mondelez International",            sector:"Consumer Staples",       icon:"🍫", color:SECTOR_COLORS["Consumer Staples"] },
  "CL":    { nameEn:"Colgate-Palmolive",   nameFull:"Colgate-Palmolive Company",         sector:"Consumer Staples",       icon:"🪥", color:SECTOR_COLORS["Consumer Staples"] },
  "KMB":   { nameEn:"Kimberly-Clark",      nameFull:"Kimberly-Clark Corporation",        sector:"Consumer Staples",       icon:"🧻", color:SECTOR_COLORS["Consumer Staples"] },
  "EL":    { nameEn:"Estée Lauder",        nameFull:"Estée Lauder Companies",            sector:"Consumer Staples",       icon:"💄", color:SECTOR_COLORS["Consumer Staples"] },
  "HSY":   { nameEn:"Hershey",             nameFull:"The Hershey Company",               sector:"Consumer Staples",       icon:"🍫", color:SECTOR_COLORS["Consumer Staples"] },
  "GIS":   { nameEn:"General Mills",       nameFull:"General Mills Inc.",                sector:"Consumer Staples",       icon:"🌾", color:SECTOR_COLORS["Consumer Staples"] },
  "K":     { nameEn:"Kellanova",           nameFull:"Kellanova (Kellogg's)",             sector:"Consumer Staples",       icon:"🥣", color:SECTOR_COLORS["Consumer Staples"] },
  "CAG":   { nameEn:"ConAgra",             nameFull:"ConAgra Brands Inc.",               sector:"Consumer Staples",       icon:"🥫", color:SECTOR_COLORS["Consumer Staples"] },
  "HRL":   { nameEn:"Hormel Foods",        nameFull:"Hormel Foods Corporation",          sector:"Consumer Staples",       icon:"🥩", color:SECTOR_COLORS["Consumer Staples"] },
  "MKC":   { nameEn:"McCormick",           nameFull:"McCormick & Company",               sector:"Consumer Staples",       icon:"🌶️", color:SECTOR_COLORS["Consumer Staples"] },
  "KHC":   { nameEn:"Kraft Heinz",         nameFull:"The Kraft Heinz Company",           sector:"Consumer Staples",       icon:"🍅", color:SECTOR_COLORS["Consumer Staples"] },
  "STZ":   { nameEn:"Constellation Brands",nameFull:"Constellation Brands Inc.",         sector:"Consumer Staples",       icon:"🍷", color:SECTOR_COLORS["Consumer Staples"] },
  "MNST":  { nameEn:"Monster Beverage",    nameFull:"Monster Beverage Corporation",      sector:"Consumer Staples",       icon:"🥤", color:SECTOR_COLORS["Consumer Staples"] },
  "KDP":   { nameEn:"Keurig Dr Pepper",    nameFull:"Keurig Dr Pepper Inc.",             sector:"Consumer Staples",       icon:"☕", color:SECTOR_COLORS["Consumer Staples"] },
  "SYY":   { nameEn:"Sysco",               nameFull:"Sysco Corporation",                 sector:"Consumer Staples",       icon:"🍽️", color:SECTOR_COLORS["Consumer Staples"] },
  "KR":    { nameEn:"Kroger",              nameFull:"The Kroger Co.",                    sector:"Consumer Staples",       icon:"🏪", color:SECTOR_COLORS["Consumer Staples"] },
  "WBA":   { nameEn:"Walgreens",           nameFull:"Walgreens Boots Alliance",          sector:"Consumer Staples",       icon:"💊", color:SECTOR_COLORS["Consumer Staples"] },
  "CVS":   { nameEn:"CVS Health",          nameFull:"CVS Health Corporation",            sector:"Consumer Staples",       icon:"🏥", color:SECTOR_COLORS["Consumer Staples"] },

  // ── FINANCIALS ───────────────────────────────────────────────────────────────
  "BRK.B": { nameEn:"Berkshire B",         nameFull:"Berkshire Hathaway Class B",        sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "JPM":   { nameEn:"JPMorgan Chase",      nameFull:"JPMorgan Chase & Co.",              sector:"Financials",             icon:"🏛️", color:SECTOR_COLORS["Financials"] },
  "V":     { nameEn:"Visa",                nameFull:"Visa Inc.",                         sector:"Financials",             icon:"💳", color:SECTOR_COLORS["Financials"] },
  "MA":    { nameEn:"Mastercard",          nameFull:"Mastercard Incorporated",           sector:"Financials",             icon:"💳", color:SECTOR_COLORS["Financials"] },
  "BAC":   { nameEn:"Bank of America",     nameFull:"Bank of America Corporation",       sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "GS":    { nameEn:"Goldman Sachs",       nameFull:"The Goldman Sachs Group",           sector:"Financials",             icon:"📈", color:SECTOR_COLORS["Financials"] },
  "MS":    { nameEn:"Morgan Stanley",      nameFull:"Morgan Stanley",                    sector:"Financials",             icon:"📊", color:SECTOR_COLORS["Financials"] },
  "WFC":   { nameEn:"Wells Fargo",         nameFull:"Wells Fargo & Company",             sector:"Financials",             icon:"🏧", color:SECTOR_COLORS["Financials"] },
  "SPGI":  { nameEn:"S&P Global",          nameFull:"S&P Global Inc.",                   sector:"Financials",             icon:"⭐", color:SECTOR_COLORS["Financials"] },
  "AXP":   { nameEn:"American Express",    nameFull:"American Express Company",          sector:"Financials",             icon:"💚", color:SECTOR_COLORS["Financials"] },
  "BLK":   { nameEn:"BlackRock",           nameFull:"BlackRock Inc.",                    sector:"Financials",             icon:"🖤", color:SECTOR_COLORS["Financials"] },
  "SCHW":  { nameEn:"Charles Schwab",      nameFull:"The Charles Schwab Corporation",    sector:"Financials",             icon:"📉", color:SECTOR_COLORS["Financials"] },
  "CB":    { nameEn:"Chubb",               nameFull:"Chubb Limited",                     sector:"Financials",             icon:"🛡️", color:SECTOR_COLORS["Financials"] },
  "MMC":   { nameEn:"Marsh McLennan",      nameFull:"Marsh & McLennan Companies",        sector:"Financials",             icon:"🤝", color:SECTOR_COLORS["Financials"] },
  "AON":   { nameEn:"Aon",                 nameFull:"Aon PLC",                           sector:"Financials",             icon:"🔐", color:SECTOR_COLORS["Financials"] },
  "MCO":   { nameEn:"Moody's",             nameFull:"Moody's Corporation",               sector:"Financials",             icon:"📋", color:SECTOR_COLORS["Financials"] },
  "ICE":   { nameEn:"Intercontinental",    nameFull:"Intercontinental Exchange",         sector:"Financials",             icon:"❄️", color:SECTOR_COLORS["Financials"] },
  "CME":   { nameEn:"CME Group",           nameFull:"CME Group Inc.",                    sector:"Financials",             icon:"🔔", color:SECTOR_COLORS["Financials"] },
  "NDAQ":  { nameEn:"Nasdaq Inc",          nameFull:"Nasdaq Inc.",                       sector:"Financials",             icon:"📈", color:SECTOR_COLORS["Financials"] },
  "USB":   { nameEn:"US Bancorp",          nameFull:"U.S. Bancorp",                      sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "PNC":   { nameEn:"PNC Financial",       nameFull:"PNC Financial Services Group",      sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "TFC":   { nameEn:"Truist Financial",    nameFull:"Truist Financial Corporation",      sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "COF":   { nameEn:"Capital One",         nameFull:"Capital One Financial",             sector:"Financials",             icon:"💰", color:SECTOR_COLORS["Financials"] },
  "AIG":   { nameEn:"AIG",                 nameFull:"American International Group",      sector:"Financials",             icon:"🛡️", color:SECTOR_COLORS["Financials"] },
  "MET":   { nameEn:"MetLife",             nameFull:"MetLife Inc.",                      sector:"Financials",             icon:"🦋", color:SECTOR_COLORS["Financials"] },
  "PRU":   { nameEn:"Prudential",          nameFull:"Prudential Financial Inc.",         sector:"Financials",             icon:"🪨", color:SECTOR_COLORS["Financials"] },
  "AFL":   { nameEn:"Aflac",               nameFull:"Aflac Incorporated",                sector:"Financials",             icon:"🦆", color:SECTOR_COLORS["Financials"] },
  "ALL":   { nameEn:"Allstate",            nameFull:"The Allstate Corporation",          sector:"Financials",             icon:"🏠", color:SECTOR_COLORS["Financials"] },
  "HIG":   { nameEn:"Hartford Financial",  nameFull:"Hartford Financial Services",       sector:"Financials",             icon:"🦌", color:SECTOR_COLORS["Financials"] },
  "TRV":   { nameEn:"Travelers",           nameFull:"The Travelers Companies",           sector:"Financials",             icon:"☂️", color:SECTOR_COLORS["Financials"] },
  "PGR":   { nameEn:"Progressive",         nameFull:"Progressive Corporation",           sector:"Financials",             icon:"🚘", color:SECTOR_COLORS["Financials"] },
  "BK":    { nameEn:"BNY Mellon",          nameFull:"Bank of New York Mellon",           sector:"Financials",             icon:"🏛️", color:SECTOR_COLORS["Financials"] },
  "STT":   { nameEn:"State Street",        nameFull:"State Street Corporation",          sector:"Financials",             icon:"🏢", color:SECTOR_COLORS["Financials"] },
  "HBAN":  { nameEn:"Huntington Bancshares",nameFull:"Huntington Bancshares",            sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "RF":    { nameEn:"Regions Financial",   nameFull:"Regions Financial Corporation",     sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "CFG":   { nameEn:"Citizens Financial",  nameFull:"Citizens Financial Group",          sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "KEY":   { nameEn:"KeyCorp",             nameFull:"KeyCorp",                           sector:"Financials",             icon:"🔑", color:SECTOR_COLORS["Financials"] },
  "FITB":  { nameEn:"Fifth Third",         nameFull:"Fifth Third Bancorp",               sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "MTB":   { nameEn:"M&T Bank",            nameFull:"M&T Bank Corporation",              sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "CINF":  { nameEn:"Cincinnati Financial",nameFull:"Cincinnati Financial Corp.",        sector:"Financials",             icon:"🏦", color:SECTOR_COLORS["Financials"] },
  "RJF":   { nameEn:"Raymond James",       nameFull:"Raymond James Financial",           sector:"Financials",             icon:"📊", color:SECTOR_COLORS["Financials"] },
  "LPLA":  { nameEn:"LPL Financial",       nameFull:"LPL Financial Holdings",            sector:"Financials",             icon:"📈", color:SECTOR_COLORS["Financials"] },
  "WRB":   { nameEn:"W.R. Berkley",        nameFull:"W. R. Berkley Corporation",         sector:"Financials",             icon:"🛡️", color:SECTOR_COLORS["Financials"] },
  "ACGL":  { nameEn:"Arch Capital",        nameFull:"Arch Capital Group Ltd.",           sector:"Financials",             icon:"🏛️", color:SECTOR_COLORS["Financials"] },
  "RE":    { nameEn:"Everest Re",          nameFull:"Everest Re Group Ltd.",             sector:"Financials",             icon:"⛰️", color:SECTOR_COLORS["Financials"] },

  // ── HEALTHCARE ───────────────────────────────────────────────────────────────
  "UNH":   { nameEn:"UnitedHealth",        nameFull:"UnitedHealth Group",                sector:"Healthcare",             icon:"🏥", color:SECTOR_COLORS["Healthcare"] },
  "JNJ":   { nameEn:"Johnson & Johnson",   nameFull:"Johnson & Johnson",                 sector:"Healthcare",             icon:"❤️", color:SECTOR_COLORS["Healthcare"] },
  "LLY":   { nameEn:"Eli Lilly",           nameFull:"Eli Lilly and Company",             sector:"Healthcare",             icon:"💉", color:SECTOR_COLORS["Healthcare"] },
  "ABBV":  { nameEn:"AbbVie",              nameFull:"AbbVie Inc.",                       sector:"Healthcare",             icon:"🧬", color:SECTOR_COLORS["Healthcare"] },
  "MRK":   { nameEn:"Merck",               nameFull:"Merck & Co. Inc.",                  sector:"Healthcare",             icon:"💊", color:SECTOR_COLORS["Healthcare"] },
  "TMO":   { nameEn:"Thermo Fisher",       nameFull:"Thermo Fisher Scientific",          sector:"Healthcare",             icon:"🔬", color:SECTOR_COLORS["Healthcare"] },
  "ABT":   { nameEn:"Abbott Labs",         nameFull:"Abbott Laboratories",               sector:"Healthcare",             icon:"🩺", color:SECTOR_COLORS["Healthcare"] },
  "DHR":   { nameEn:"Danaher",             nameFull:"Danaher Corporation",               sector:"Healthcare",             icon:"🔭", color:SECTOR_COLORS["Healthcare"] },
  "AMGN":  { nameEn:"Amgen",               nameFull:"Amgen Inc.",                        sector:"Healthcare",             icon:"🧫", color:SECTOR_COLORS["Healthcare"] },
  "ISRG":  { nameEn:"Intuitive Surgical",  nameFull:"Intuitive Surgical Inc.",           sector:"Healthcare",             icon:"🤖", color:SECTOR_COLORS["Healthcare"] },
  "VRTX":  { nameEn:"Vertex Pharma",       nameFull:"Vertex Pharmaceuticals",            sector:"Healthcare",             icon:"🔵", color:SECTOR_COLORS["Healthcare"] },
  "GILD":  { nameEn:"Gilead Sciences",     nameFull:"Gilead Sciences Inc.",              sector:"Healthcare",             icon:"🦠", color:SECTOR_COLORS["Healthcare"] },
  "REGN":  { nameEn:"Regeneron",           nameFull:"Regeneron Pharmaceuticals",         sector:"Healthcare",             icon:"🧪", color:SECTOR_COLORS["Healthcare"] },
  "BIIB":  { nameEn:"Biogen",              nameFull:"Biogen Inc.",                       sector:"Healthcare",             icon:"🧠", color:SECTOR_COLORS["Healthcare"] },
  "MRNA":  { nameEn:"Moderna",             nameFull:"Moderna Inc.",                      sector:"Healthcare",             icon:"💉", color:SECTOR_COLORS["Healthcare"] },
  "BSX":   { nameEn:"Boston Scientific",   nameFull:"Boston Scientific Corporation",     sector:"Healthcare",             icon:"💓", color:SECTOR_COLORS["Healthcare"] },
  "SYK":   { nameEn:"Stryker",             nameFull:"Stryker Corporation",               sector:"Healthcare",             icon:"🦴", color:SECTOR_COLORS["Healthcare"] },
  "ZTS":   { nameEn:"Zoetis",              nameFull:"Zoetis Inc.",                       sector:"Healthcare",             icon:"🐾", color:SECTOR_COLORS["Healthcare"] },
  "EW":    { nameEn:"Edwards Lifesciences",nameFull:"Edwards Lifesciences Corp.",        sector:"Healthcare",             icon:"❤️", color:SECTOR_COLORS["Healthcare"] },
  "IDXX":  { nameEn:"IDEXX Labs",          nameFull:"IDEXX Laboratories Inc.",           sector:"Healthcare",             icon:"🐕", color:SECTOR_COLORS["Healthcare"] },
  "VEEV":  { nameEn:"Veeva Systems",       nameFull:"Veeva Systems Inc.",                sector:"Healthcare",             icon:"☁️", color:SECTOR_COLORS["Healthcare"] },
  "DXCM":  { nameEn:"Dexcom",              nameFull:"Dexcom Inc.",                       sector:"Healthcare",             icon:"📡", color:SECTOR_COLORS["Healthcare"] },
  "PODD":  { nameEn:"Insulet",             nameFull:"Insulet Corporation",               sector:"Healthcare",             icon:"💧", color:SECTOR_COLORS["Healthcare"] },
  "MTD":   { nameEn:"Mettler-Toledo",      nameFull:"Mettler-Toledo International",      sector:"Healthcare",             icon:"⚖️", color:SECTOR_COLORS["Healthcare"] },
  "WAT":   { nameEn:"Waters Corp",         nameFull:"Waters Corporation",                sector:"Healthcare",             icon:"💧", color:SECTOR_COLORS["Healthcare"] },
  "A":     { nameEn:"Agilent Tech",        nameFull:"Agilent Technologies Inc.",         sector:"Healthcare",             icon:"🔬", color:SECTOR_COLORS["Healthcare"] },
  "IQV":   { nameEn:"IQVIA",               nameFull:"IQVIA Holdings Inc.",               sector:"Healthcare",             icon:"📊", color:SECTOR_COLORS["Healthcare"] },
  "HUM":   { nameEn:"Humana",              nameFull:"Humana Inc.",                       sector:"Healthcare",             icon:"🏥", color:SECTOR_COLORS["Healthcare"] },
  "ELV":   { nameEn:"Elevance Health",     nameFull:"Elevance Health Inc.",              sector:"Healthcare",             icon:"💙", color:SECTOR_COLORS["Healthcare"] },
  "CNC":   { nameEn:"Centene",             nameFull:"Centene Corporation",               sector:"Healthcare",             icon:"🏥", color:SECTOR_COLORS["Healthcare"] },
  "HCA":   { nameEn:"HCA Healthcare",      nameFull:"HCA Healthcare Inc.",               sector:"Healthcare",             icon:"🏨", color:SECTOR_COLORS["Healthcare"] },
  "MCK":   { nameEn:"McKesson",            nameFull:"McKesson Corporation",              sector:"Healthcare",             icon:"📦", color:SECTOR_COLORS["Healthcare"] },
  "ABC":   { nameEn:"AmerisourceBergen",   nameFull:"AmerisourceBergen Corporation",     sector:"Healthcare",             icon:"💊", color:SECTOR_COLORS["Healthcare"] },

  // ── INDUSTRIALS ──────────────────────────────────────────────────────────────
  "GE":    { nameEn:"GE Aerospace",        nameFull:"GE Aerospace",                      sector:"Industrials",            icon:"✈️", color:SECTOR_COLORS["Industrials"] },
  "RTX":   { nameEn:"RTX Corp",            nameFull:"RTX Corporation (Raytheon)",        sector:"Industrials",            icon:"🚀", color:SECTOR_COLORS["Industrials"] },
  "HON":   { nameEn:"Honeywell",           nameFull:"Honeywell International",           sector:"Industrials",            icon:"🌡️", color:SECTOR_COLORS["Industrials"] },
  "CAT":   { nameEn:"Caterpillar",         nameFull:"Caterpillar Inc.",                  sector:"Industrials",            icon:"🐛", color:SECTOR_COLORS["Industrials"] },
  "UPS":   { nameEn:"UPS",                 nameFull:"United Parcel Service",             sector:"Industrials",            icon:"📬", color:SECTOR_COLORS["Industrials"] },
  "DE":    { nameEn:"John Deere",          nameFull:"Deere & Company",                   sector:"Industrials",            icon:"🚜", color:SECTOR_COLORS["Industrials"] },
  "ETN":   { nameEn:"Eaton",               nameFull:"Eaton Corporation PLC",             sector:"Industrials",            icon:"⚡", color:SECTOR_COLORS["Industrials"] },
  "LMT":   { nameEn:"Lockheed Martin",     nameFull:"Lockheed Martin Corporation",       sector:"Industrials",            icon:"🛡️", color:SECTOR_COLORS["Industrials"] },
  "NOC":   { nameEn:"Northrop Grumman",    nameFull:"Northrop Grumman Corporation",      sector:"Industrials",            icon:"🛸", color:SECTOR_COLORS["Industrials"] },
  "BA":    { nameEn:"Boeing",              nameFull:"The Boeing Company",                sector:"Industrials",            icon:"✈️", color:SECTOR_COLORS["Industrials"] },
  "GD":    { nameEn:"General Dynamics",    nameFull:"General Dynamics Corporation",      sector:"Industrials",            icon:"🚢", color:SECTOR_COLORS["Industrials"] },
  "FDX":   { nameEn:"FedEx",               nameFull:"FedEx Corporation",                 sector:"Industrials",            icon:"📮", color:SECTOR_COLORS["Industrials"] },
  "NSC":   { nameEn:"Norfolk Southern",    nameFull:"Norfolk Southern Corporation",      sector:"Industrials",            icon:"🚂", color:SECTOR_COLORS["Industrials"] },
  "CSX":   { nameEn:"CSX Corp",            nameFull:"CSX Corporation",                   sector:"Industrials",            icon:"🚃", color:SECTOR_COLORS["Industrials"] },
  "UNP":   { nameEn:"Union Pacific",       nameFull:"Union Pacific Corporation",         sector:"Industrials",            icon:"🚆", color:SECTOR_COLORS["Industrials"] },
  "WM":    { nameEn:"Waste Management",    nameFull:"Waste Management Inc.",             sector:"Industrials",            icon:"♻️", color:SECTOR_COLORS["Industrials"] },
  "EMR":   { nameEn:"Emerson Electric",    nameFull:"Emerson Electric Co.",              sector:"Industrials",            icon:"⚙️", color:SECTOR_COLORS["Industrials"] },
  "ITW":   { nameEn:"Illinois Tool Works", nameFull:"Illinois Tool Works Inc.",          sector:"Industrials",            icon:"🔩", color:SECTOR_COLORS["Industrials"] },
  "PH":    { nameEn:"Parker Hannifin",     nameFull:"Parker-Hannifin Corporation",       sector:"Industrials",            icon:"🔧", color:SECTOR_COLORS["Industrials"] },
  "ROK":   { nameEn:"Rockwell Automation", nameFull:"Rockwell Automation Inc.",          sector:"Industrials",            icon:"🤖", color:SECTOR_COLORS["Industrials"] },
  "IR":    { nameEn:"Ingersoll Rand",      nameFull:"Ingersoll Rand Inc.",               sector:"Industrials",            icon:"🌬️", color:SECTOR_COLORS["Industrials"] },
  "DOV":   { nameEn:"Dover Corp",          nameFull:"Dover Corporation",                 sector:"Industrials",            icon:"🕊️", color:SECTOR_COLORS["Industrials"] },
  "AME":   { nameEn:"AMETEK",              nameFull:"AMETEK Inc.",                       sector:"Industrials",            icon:"⚡", color:SECTOR_COLORS["Industrials"] },
  "ROP":   { nameEn:"Roper Technologies",  nameFull:"Roper Technologies Inc.",           sector:"Industrials",            icon:"🔭", color:SECTOR_COLORS["Industrials"] },
  "GGG":   { nameEn:"Graco",               nameFull:"Graco Inc.",                        sector:"Industrials",            icon:"🔫", color:SECTOR_COLORS["Industrials"] },
  "IEX":   { nameEn:"IDEX Corp",           nameFull:"IDEX Corporation",                  sector:"Industrials",            icon:"🔬", color:SECTOR_COLORS["Industrials"] },
  "XYL":   { nameEn:"Xylem",               nameFull:"Xylem Inc.",                        sector:"Industrials",            icon:"💧", color:SECTOR_COLORS["Industrials"] },
  "SWK":   { nameEn:"Stanley Black&Decker",nameFull:"Stanley Black & Decker Inc.",       sector:"Industrials",            icon:"🔨", color:SECTOR_COLORS["Industrials"] },
  "TT":    { nameEn:"Trane Technologies",  nameFull:"Trane Technologies PLC",            sector:"Industrials",            icon:"❄️", color:SECTOR_COLORS["Industrials"] },
  "CARR":  { nameEn:"Carrier Global",      nameFull:"Carrier Global Corporation",        sector:"Industrials",            icon:"🌡️", color:SECTOR_COLORS["Industrials"] },
  "OTIS":  { nameEn:"Otis Worldwide",      nameFull:"Otis Worldwide Corporation",        sector:"Industrials",            icon:"🛗", color:SECTOR_COLORS["Industrials"] },
  "LHX":   { nameEn:"L3Harris Tech",       nameFull:"L3Harris Technologies",             sector:"Industrials",            icon:"📡", color:SECTOR_COLORS["Industrials"] },
  "TDG":   { nameEn:"TransDigm",           nameFull:"TransDigm Group Inc.",              sector:"Industrials",            icon:"⚙️", color:SECTOR_COLORS["Industrials"] },
  "HEI":   { nameEn:"HEICO",               nameFull:"HEICO Corporation",                 sector:"Industrials",            icon:"🛩️", color:SECTOR_COLORS["Industrials"] },
  "AXON":  { nameEn:"Axon Enterprise",     nameFull:"Axon Enterprise Inc.",              sector:"Industrials",            icon:"⚡", color:SECTOR_COLORS["Industrials"] },
  "CTAS":  { nameEn:"Cintas",              nameFull:"Cintas Corporation",                sector:"Industrials",            icon:"👔", color:SECTOR_COLORS["Industrials"] },
  "PAYX":  { nameEn:"Paychex",             nameFull:"Paychex Inc.",                      sector:"Industrials",            icon:"💵", color:SECTOR_COLORS["Industrials"] },
  "ADP":   { nameEn:"ADP",                 nameFull:"Automatic Data Processing",         sector:"Industrials",            icon:"🖥️", color:SECTOR_COLORS["Industrials"] },
  "VRSK":  { nameEn:"Verisk Analytics",    nameFull:"Verisk Analytics Inc.",             sector:"Industrials",            icon:"📊", color:SECTOR_COLORS["Industrials"] },
  "LDOS":  { nameEn:"Leidos",              nameFull:"Leidos Holdings Inc.",              sector:"Industrials",            icon:"🔒", color:SECTOR_COLORS["Industrials"] },
  "BAH":   { nameEn:"Booz Allen Hamilton", nameFull:"Booz Allen Hamilton Holding",       sector:"Industrials",            icon:"🤝", color:SECTOR_COLORS["Industrials"] },
  "SAIC":  { nameEn:"SAIC",                nameFull:"Science Applications International",sector:"Industrials",            icon:"🛰️", color:SECTOR_COLORS["Industrials"] },
  "WAB":   { nameEn:"Wabtec",              nameFull:"Wabtec Corporation",                sector:"Industrials",            icon:"🚂", color:SECTOR_COLORS["Industrials"] },
  "ODFL":  { nameEn:"Old Dominion Freight",nameFull:"Old Dominion Freight Line",         sector:"Industrials",            icon:"🚛", color:SECTOR_COLORS["Industrials"] },
  "FAST":  { nameEn:"Fastenal",            nameFull:"Fastenal Company",                  sector:"Industrials",            icon:"🔩", color:SECTOR_COLORS["Industrials"] },
  "GPC":   { nameEn:"Genuine Parts",       nameFull:"Genuine Parts Company",             sector:"Industrials",            icon:"🔧", color:SECTOR_COLORS["Industrials"] },
  "FTV":   { nameEn:"Fortive",             nameFull:"Fortive Corporation",               sector:"Industrials",            icon:"📏", color:SECTOR_COLORS["Industrials"] },
  "ALLE":  { nameEn:"Allegion",            nameFull:"Allegion PLC",                      sector:"Industrials",            icon:"🔐", color:SECTOR_COLORS["Industrials"] },
  "LII":   { nameEn:"Lennox International",nameFull:"Lennox International Inc.",         sector:"Industrials",            icon:"🌡️", color:SECTOR_COLORS["Industrials"] },

  // ── ENERGY ───────────────────────────────────────────────────────────────────
  "XOM":   { nameEn:"ExxonMobil",          nameFull:"Exxon Mobil Corporation",           sector:"Energy",                 icon:"⛽", color:SECTOR_COLORS["Energy"] },
  "CVX":   { nameEn:"Chevron",             nameFull:"Chevron Corporation",               sector:"Energy",                 icon:"🔵", color:SECTOR_COLORS["Energy"] },
  "COP":   { nameEn:"ConocoPhillips",      nameFull:"ConocoPhillips",                    sector:"Energy",                 icon:"🛢️", color:SECTOR_COLORS["Energy"] },
  "EOG":   { nameEn:"EOG Resources",       nameFull:"EOG Resources Inc.",                sector:"Energy",                 icon:"⛏️", color:SECTOR_COLORS["Energy"] },
  "SLB":   { nameEn:"SLB",                 nameFull:"SLB (Schlumberger)",                sector:"Energy",                 icon:"🔧", color:SECTOR_COLORS["Energy"] },
  "OXY":   { nameEn:"Occidental",          nameFull:"Occidental Petroleum",              sector:"Energy",                 icon:"🏔️", color:SECTOR_COLORS["Energy"] },
  "MPC":   { nameEn:"Marathon Petroleum",  nameFull:"Marathon Petroleum Corporation",    sector:"Energy",                 icon:"🏃", color:SECTOR_COLORS["Energy"] },
  "PSX":   { nameEn:"Phillips 66",         nameFull:"Phillips 66",                       sector:"Energy",                 icon:"⚗️", color:SECTOR_COLORS["Energy"] },
  "VLO":   { nameEn:"Valero Energy",       nameFull:"Valero Energy Corporation",         sector:"Energy",                 icon:"🔥", color:SECTOR_COLORS["Energy"] },
  "HES":   { nameEn:"Hess Corp",           nameFull:"Hess Corporation",                  sector:"Energy",                 icon:"🛢️", color:SECTOR_COLORS["Energy"] },
  "DVN":   { nameEn:"Devon Energy",        nameFull:"Devon Energy Corporation",          sector:"Energy",                 icon:"⚡", color:SECTOR_COLORS["Energy"] },
  "FANG":  { nameEn:"Diamondback Energy",  nameFull:"Diamondback Energy Inc.",           sector:"Energy",                 icon:"💎", color:SECTOR_COLORS["Energy"] },
  "MRO":   { nameEn:"Marathon Oil",        nameFull:"Marathon Oil Corporation",          sector:"Energy",                 icon:"🏅", color:SECTOR_COLORS["Energy"] },
  "APA":   { nameEn:"APA Corp",            nameFull:"APA Corporation",                   sector:"Energy",                 icon:"🦅", color:SECTOR_COLORS["Energy"] },
  "HAL":   { nameEn:"Halliburton",         nameFull:"Halliburton Company",               sector:"Energy",                 icon:"🔩", color:SECTOR_COLORS["Energy"] },
  "BKR":   { nameEn:"Baker Hughes",        nameFull:"Baker Hughes Company",              sector:"Energy",                 icon:"🏭", color:SECTOR_COLORS["Energy"] },
  "NOV":   { nameEn:"NOV Inc",             nameFull:"NOV Inc.",                          sector:"Energy",                 icon:"⚙️", color:SECTOR_COLORS["Energy"] },

  // ── UTILITIES ─────────────────────────────────────────────────────────────────
  "NEE":   { nameEn:"NextEra Energy",      nameFull:"NextEra Energy Inc.",               sector:"Utilities",              icon:"🌬️", color:SECTOR_COLORS["Utilities"] },
  "SO":    { nameEn:"Southern Company",    nameFull:"The Southern Company",              sector:"Utilities",              icon:"☀️", color:SECTOR_COLORS["Utilities"] },
  "DUK":   { nameEn:"Duke Energy",         nameFull:"Duke Energy Corporation",           sector:"Utilities",              icon:"⚡", color:SECTOR_COLORS["Utilities"] },
  "D":     { nameEn:"Dominion Energy",     nameFull:"Dominion Energy Inc.",              sector:"Utilities",              icon:"🔋", color:SECTOR_COLORS["Utilities"] },
  "EXC":   { nameEn:"Exelon",              nameFull:"Exelon Corporation",                sector:"Utilities",              icon:"💡", color:SECTOR_COLORS["Utilities"] },
  "XEL":   { nameEn:"Xcel Energy",         nameFull:"Xcel Energy Inc.",                  sector:"Utilities",              icon:"🌊", color:SECTOR_COLORS["Utilities"] },
  "PCG":   { nameEn:"PG&E",                nameFull:"PG&E Corporation",                  sector:"Utilities",              icon:"🔌", color:SECTOR_COLORS["Utilities"] },
  "WEC":   { nameEn:"WEC Energy",          nameFull:"WEC Energy Group Inc.",             sector:"Utilities",              icon:"⚡", color:SECTOR_COLORS["Utilities"] },
  "ES":    { nameEn:"Eversource Energy",   nameFull:"Eversource Energy",                 sector:"Utilities",              icon:"🌿", color:SECTOR_COLORS["Utilities"] },
  "AEE":   { nameEn:"Ameren",              nameFull:"Ameren Corporation",                sector:"Utilities",              icon:"⚡", color:SECTOR_COLORS["Utilities"] },
  "CMS":   { nameEn:"CMS Energy",          nameFull:"CMS Energy Corporation",            sector:"Utilities",              icon:"💧", color:SECTOR_COLORS["Utilities"] },
  "CNP":   { nameEn:"CenterPoint Energy",  nameFull:"CenterPoint Energy Inc.",           sector:"Utilities",              icon:"🌟", color:SECTOR_COLORS["Utilities"] },
  "NI":    { nameEn:"NiSource",            nameFull:"NiSource Inc.",                     sector:"Utilities",              icon:"🔥", color:SECTOR_COLORS["Utilities"] },
  "LNT":   { nameEn:"Alliant Energy",      nameFull:"Alliant Energy Corporation",        sector:"Utilities",              icon:"⚡", color:SECTOR_COLORS["Utilities"] },
  "EVRG":  { nameEn:"Evergy",              nameFull:"Evergy Inc.",                       sector:"Utilities",              icon:"⚡", color:SECTOR_COLORS["Utilities"] },
  "AWK":   { nameEn:"American Water Works",nameFull:"American Water Works Company",      sector:"Utilities",              icon:"💧", color:SECTOR_COLORS["Utilities"] },

  // ── REAL ESTATE ───────────────────────────────────────────────────────────────
  "PLD":   { nameEn:"Prologis",            nameFull:"Prologis Inc.",                     sector:"Real Estate",            icon:"🏭", color:SECTOR_COLORS["Real Estate"] },
  "AMT":   { nameEn:"American Tower",      nameFull:"American Tower Corporation",        sector:"Real Estate",            icon:"📡", color:SECTOR_COLORS["Real Estate"] },
  "EQIX":  { nameEn:"Equinix",             nameFull:"Equinix Inc.",                      sector:"Real Estate",            icon:"🖥️", color:SECTOR_COLORS["Real Estate"] },
  "CCI":   { nameEn:"Crown Castle",        nameFull:"Crown Castle Inc.",                 sector:"Real Estate",            icon:"🏰", color:SECTOR_COLORS["Real Estate"] },
  "DLR":   { nameEn:"Digital Realty",      nameFull:"Digital Realty Trust",              sector:"Real Estate",            icon:"💾", color:SECTOR_COLORS["Real Estate"] },
  "PSA":   { nameEn:"Public Storage",      nameFull:"Public Storage",                    sector:"Real Estate",            icon:"📦", color:SECTOR_COLORS["Real Estate"] },
  "O":     { nameEn:"Realty Income",       nameFull:"Realty Income Corporation",         sector:"Real Estate",            icon:"🏪", color:SECTOR_COLORS["Real Estate"] },
  "SPG":   { nameEn:"Simon Property",      nameFull:"Simon Property Group",              sector:"Real Estate",            icon:"🛍️", color:SECTOR_COLORS["Real Estate"] },
  "IRM":   { nameEn:"Iron Mountain",       nameFull:"Iron Mountain Inc.",                sector:"Real Estate",            icon:"⛰️", color:SECTOR_COLORS["Real Estate"] },
  "SBAC":  { nameEn:"SBA Communications",  nameFull:"SBA Communications Corp.",          sector:"Real Estate",            icon:"📶", color:SECTOR_COLORS["Real Estate"] },
  "WELL":  { nameEn:"Welltower",           nameFull:"Welltower Inc.",                    sector:"Real Estate",            icon:"🏥", color:SECTOR_COLORS["Real Estate"] },
  "VTR":   { nameEn:"Ventas",              nameFull:"Ventas Inc.",                       sector:"Real Estate",            icon:"🏨", color:SECTOR_COLORS["Real Estate"] },
  "AVB":   { nameEn:"AvalonBay",           nameFull:"AvalonBay Communities",             sector:"Real Estate",            icon:"🏙️", color:SECTOR_COLORS["Real Estate"] },
  "EQR":   { nameEn:"Equity Residential",  nameFull:"Equity Residential",                sector:"Real Estate",            icon:"🏘️", color:SECTOR_COLORS["Real Estate"] },
  "ARE":   { nameEn:"Alexandria RE",       nameFull:"Alexandria Real Estate Equities",   sector:"Real Estate",            icon:"🔬", color:SECTOR_COLORS["Real Estate"] },
  "BXP":   { nameEn:"BXP Inc",             nameFull:"BXP Inc. (Boston Properties)",      sector:"Real Estate",            icon:"🏢", color:SECTOR_COLORS["Real Estate"] },

  // ── MATERIALS ─────────────────────────────────────────────────────────────────
  "LIN":   { nameEn:"Linde",               nameFull:"Linde PLC",                         sector:"Materials",              icon:"💨", color:SECTOR_COLORS["Materials"] },
  "SHW":   { nameEn:"Sherwin-Williams",    nameFull:"The Sherwin-Williams Company",      sector:"Materials",              icon:"🎨", color:SECTOR_COLORS["Materials"] },
  "APD":   { nameEn:"Air Products",        nameFull:"Air Products and Chemicals",        sector:"Materials",              icon:"🌬️", color:SECTOR_COLORS["Materials"] },
  "ECL":   { nameEn:"Ecolab",              nameFull:"Ecolab Inc.",                       sector:"Materials",              icon:"🧪", color:SECTOR_COLORS["Materials"] },
  "NEM":   { nameEn:"Newmont",             nameFull:"Newmont Corporation",               sector:"Materials",              icon:"🥇", color:SECTOR_COLORS["Materials"] },
  "FCX":   { nameEn:"Freeport-McMoRan",    nameFull:"Freeport-McMoRan Inc.",             sector:"Materials",              icon:"🪨", color:SECTOR_COLORS["Materials"] },
  "VMC":   { nameEn:"Vulcan Materials",    nameFull:"Vulcan Materials Company",          sector:"Materials",              icon:"⛏️", color:SECTOR_COLORS["Materials"] },
  "MLM":   { nameEn:"Martin Marietta",     nameFull:"Martin Marietta Materials",         sector:"Materials",              icon:"🪨", color:SECTOR_COLORS["Materials"] },
  "ALB":   { nameEn:"Albemarle",           nameFull:"Albemarle Corporation",             sector:"Materials",              icon:"⚗️", color:SECTOR_COLORS["Materials"] },
  "CE":    { nameEn:"Celanese",            nameFull:"Celanese Corporation",              sector:"Materials",              icon:"🧬", color:SECTOR_COLORS["Materials"] },
  "PKG":   { nameEn:"Packaging Corp",      nameFull:"Packaging Corporation of America",  sector:"Materials",              icon:"📦", color:SECTOR_COLORS["Materials"] },
  "IP":    { nameEn:"International Paper", nameFull:"International Paper Company",       sector:"Materials",              icon:"📄", color:SECTOR_COLORS["Materials"] },
  "WRK":   { nameEn:"WestRock",            nameFull:"WestRock Company",                  sector:"Materials",              icon:"📋", color:SECTOR_COLORS["Materials"] },
  "PPG":   { nameEn:"PPG Industries",      nameFull:"PPG Industries Inc.",               sector:"Materials",              icon:"🖌️", color:SECTOR_COLORS["Materials"] },
  "RPM":   { nameEn:"RPM International",   nameFull:"RPM International Inc.",            sector:"Materials",              icon:"🔨", color:SECTOR_COLORS["Materials"] },
  "AVY":   { nameEn:"Avery Dennison",      nameFull:"Avery Dennison Corporation",        sector:"Materials",              icon:"🏷️", color:SECTOR_COLORS["Materials"] },
  "IFF":   { nameEn:"Int'l Flavors",       nameFull:"International Flavors & Fragrances",sector:"Materials",              icon:"🌸", color:SECTOR_COLORS["Materials"] },
  "FMC":   { nameEn:"FMC Corp",            nameFull:"FMC Corporation",                   sector:"Materials",              icon:"🌱", color:SECTOR_COLORS["Materials"] },
  "MOS":   { nameEn:"Mosaic",              nameFull:"The Mosaic Company",                sector:"Materials",              icon:"🪨", color:SECTOR_COLORS["Materials"] },
  "CF":    { nameEn:"CF Industries",       nameFull:"CF Industries Holdings",            sector:"Materials",              icon:"🌾", color:SECTOR_COLORS["Materials"] },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** All tickers as array */
const ALL_TICKERS = Object.keys(STOCKS);

/** Group tickers by sector */
const TICKERS_BY_SECTOR = ALL_TICKERS.reduce((acc, t) => {
  const s = STOCKS[t].sector;
  if (!acc[s]) acc[s] = [];
  acc[s].push(t);
  return acc;
}, {});

/** All 11 sectors with their color */
const SECTORS = Object.entries(SECTOR_COLORS).map(([name, color]) => ({
  name,
  color,
  count: (TICKERS_BY_SECTOR[name] || []).length
}));

// Make available globally (for index.html & stock.html)
if (typeof window !== "undefined") {
  window.STOCKS          = STOCKS;
  window.ALL_TICKERS     = ALL_TICKERS;
  window.TICKERS_BY_SECTOR = TICKERS_BY_SECTOR;
  window.SECTORS         = SECTORS;
  window.SECTOR_COLORS   = SECTOR_COLORS;
}

// Node.js export (for server.js if needed)
if (typeof module !== "undefined") {
  module.exports = { STOCKS, ALL_TICKERS, TICKERS_BY_SECTOR, SECTORS, SECTOR_COLORS };
}
