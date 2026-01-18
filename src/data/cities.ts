// North India cities and popular routes
export interface City {
  id: string;
  name: string;
  state: string;
}

export const northIndiaCities: City[] = [
  // =========================
  // Himachal Pradesh
  // =========================
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh" },
  { id: "kufri", name: "Kufri", state: "Himachal Pradesh" },
  { id: "chail", name: "Chail", state: "Himachal Pradesh" },
  { id: "solan", name: "Solan", state: "Himachal Pradesh" },
  { id: "kasauli", name: "Kasauli", state: "Himachal Pradesh" },
  { id: "pinjore", name: "Pinjore Garden", state: "Haryana (Near HP)" },

  { id: "manali", name: "Manali", state: "Himachal Pradesh" },
  { id: "kullu", name: "Kullu", state: "Himachal Pradesh" },
  { id: "kasol", name: "Kasol", state: "Himachal Pradesh" },
  { id: "manikaran", name: "Manikaran", state: "Himachal Pradesh" },
  { id: "mandi", name: "Mandi", state: "Himachal Pradesh" },
  { id: "bilaspur", name: "Bilaspur", state: "Himachal Pradesh" },

  { id: "dharamshala", name: "Dharamshala", state: "Himachal Pradesh" },
  { id: "mcleodganj", name: "McLeod Ganj", state: "Himachal Pradesh" },
  { id: "kangra", name: "Kangra", state: "Himachal Pradesh" },
  { id: "palampur", name: "Palampur", state: "Himachal Pradesh" },
  { id: "baijnath", name: "Baijnath", state: "Himachal Pradesh" },
  { id: "chamunda", name: "Chamunda Ji", state: "Himachal Pradesh" },

  { id: "chintpurni", name: "Chintpurni Ji", state: "Himachal Pradesh" },
  { id: "jwalamukhi", name: "Jwalamukhi Ji", state: "Himachal Pradesh" },
  { id: "nainadevi", name: "Naina Devi", state: "Himachal Pradesh" },

  { id: "dalhousie", name: "Dalhousie", state: "Himachal Pradesh" },
  { id: "chamba", name: "Chamba", state: "Himachal Pradesh" },

  { id: "spiti", name: "Spiti Valley", state: "Himachal Pradesh" },
  { id: "kinnaur", name: "Kinnaur", state: "Himachal Pradesh" },

  // =========================
  // Uttarakhand
  // =========================
  { id: "dehradun", name: "Dehradun", state: "Uttarakhand" },
  { id: "mussoorie", name: "Mussoorie", state: "Uttarakhand" },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand" },
  { id: "haridwar", name: "Haridwar", state: "Uttarakhand" },
  { id: "nainital", name: "Nainital", state: "Uttarakhand" },
  { id: "almora", name: "Almora", state: "Uttarakhand" },
  { id: "ranikhet", name: "Ranikhet", state: "Uttarakhand" },
  { id: "auli", name: "Auli", state: "Uttarakhand" },
  { id: "kedarnath", name: "Kedarnath", state: "Uttarakhand" },
  { id: "badrinath", name: "Badrinath", state: "Uttarakhand" },

  // =========================
  // Punjab
  // =========================
  { id: "amritsar", name: "Amritsar", state: "Punjab" },
  { id: "jalandhar", name: "Jalandhar", state: "Punjab" },
  { id: "ludhiana", name: "Ludhiana", state: "Punjab" },
  { id: "khanna", name: "Khanna", state: "Punjab" },
  { id: "patiala", name: "Patiala", state: "Punjab" },
  { id: "sirhind", name: "Sirhind", state: "Punjab" },
  { id: "anandpur", name: "Anandpur Sahib", state: "Punjab" },
  { id: "beas", name: "Beas", state: "Punjab" },

  // =========================
  // Haryana
  // =========================
  { id: "chandigarh", name: "Chandigarh", state: "Punjab/Haryana" },
  { id: "ambala", name: "Ambala", state: "Haryana" },
  { id: "kurukshetra", name: "Kurukshetra", state: "Haryana" },
  { id: "panipat", name: "Panipat", state: "Haryana" },
  { id: "gurgaon", name: "Gurugram", state: "Haryana" },
  { id: "kharar", name: "Kharar", state: "Punjab" },

  // =========================
  // Delhi NCR
  // =========================
  { id: "delhi", name: "Delhi", state: "Delhi" },
  { id: "noida", name: "Noida", state: "Uttar Pradesh" },
  { id: "faridabad", name: "Faridabad", state: "Haryana" },

  // =========================
  // Uttar Pradesh
  // =========================
  { id: "agra", name: "Agra", state: "Uttar Pradesh" },
  { id: "mathura", name: "Mathura", state: "Uttar Pradesh" },
  { id: "vrindavan", name: "Vrindavan", state: "Uttar Pradesh" },

  // =========================
  // Rajasthan
  // =========================
  { id: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan" },
  { id: "jaisalmer", name: "Jaisalmer", state: "Rajasthan" },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan" },

  // =========================
  // Jammu & Kashmir
  // =========================
  { id: "jammu", name: "Jammu", state: "Jammu & Kashmir" },
  { id: "katra", name: "Katra", state: "Jammu & Kashmir" },
  { id: "srinagar", name: "Srinagar", state: "Jammu & Kashmir" },
  { id: "gulmarg", name: "Gulmarg", state: "Jammu & Kashmir" },
  { id: "pahalgam", name: "Pahalgam", state: "Jammu & Kashmir" },
  { id: "sonamarg", name: "Sonamarg", state: "Jammu & Kashmir" },

  // =========================
  // Ladakh
  // =========================
  { id: "leh", name: "Leh", state: "Ladakh" },
  { id: "nubra", name: "Nubra Valley", state: "Ladakh" },
  { id: "pangong", name: "Pangong Lake", state: "Ladakh" },
  { id: "kargil", name: "Kargil", state: "Ladakh" },
];

// Nearest hub for each city (based strictly on northIndiaCities)
export const cityHubMap: Record<string, string> = {
  // Shimla region
  shimla: "shimla",
  kufri: "shimla",
  chail: "shimla",
  solan: "shimla",
  kasauli: "shimla",

  // Manali region
  manali: "manali",
  kullu: "manali",
  kasol: "manali",
  manikaran: "manali",
  mandi: "manali",
  bilaspur: "manali",

  // Kangra / Dharamshala region
  dharamshala: "dharamshala",
  mcleodganj: "dharamshala",
  kangra: "dharamshala",
  palampur: "dharamshala",
  baijnath: "dharamshala",
  chamunda: "dharamshala",
  chintpurni: "dharamshala",
  jwalamukhi: "dharamshala",
  nainadevi: "dharamshala",
  dalhousie: "dharamshala",
  chamba: "dharamshala",

  // Uttarakhand
  dehradun: "dehradun",
  mussoorie: "dehradun",
  rishikesh: "rishikesh",
  haridwar: "rishikesh",
  nainital: "nainital",
  almora: "nainital",
  ranikhet: "nainital",
  auli: "nainital",
  kedarnath: "rishikesh",
  badrinath: "rishikesh",

  // Punjab
  amritsar: "amritsar",
  jalandhar: "amritsar",
  ludhiana: "amritsar",
  khanna: "amritsar",
  patiala: "amritsar",
  sirhind: "amritsar",
  anandpur: "amritsar",
  beas: "amritsar",

  // Haryana / NCR
  chandigarh: "chandigarh",
  ambala: "chandigarh",
  kurukshetra: "chandigarh",
  panipat: "chandigarh",
  gurgaon: "delhi",
  kharar: "chandigarh",

  // Delhi NCR
  delhi: "delhi",
  noida: "delhi",
  faridabad: "delhi",

  // UP
  agra: "delhi",
  mathura: "delhi",
  vrindavan: "delhi",

  // Rajasthan
  jaipur: "jaipur",
  jodhpur: "jaipur",
  jaisalmer: "jaipur",
  udaipur: "jaipur",

  // J&K
  jammu: "jammu",
  katra: "jammu",
  srinagar: "srinagar",
  gulmarg: "srinagar",
  pahalgam: "srinagar",
  sonamarg: "srinagar",

  // Ladakh
  leh: "leh",
  nubra: "leh",
  pangong: "leh",
  kargil: "leh",
};

// Distance matrix (in kilometers) for popular routes
export const distanceMatrix: Record<string, Record<string, number>> = {
  // =========================
  // DELHI HUB
  // =========================
  delhi: {
    chandigarh: 243,
    shimla: 343,
    manali: 540,
    dharamshala: 475,
    dalhousie: 560,
    kasauli: 290,
    mussoorie: 278,
    dehradun: 248,
    rishikesh: 242,
    haridwar: 214,
    nainital: 320,
    amritsar: 450,
    jaipur: 280,
    agra: 206,
    mathura: 183,
    vrindavan: 190,
    kurukshetra: 170,
    panipat: 95,
    ambala: 200,
    gurgaon: 32,
  },

  // =========================
  // CHANDIGARH HUB
  // =========================
  chandigarh: {
    delhi: 243,
    shimla: 113,
    kufri: 130,
    chail: 105,
    kasauli: 65,
    solan: 70,
    manali: 310,
    kullu: 280,
    kasol: 250,
    manikaran: 260,
    dharamshala: 235,
    dalhousie: 320,
    amritsar: 230,
    dehradun: 170,
    rishikesh: 210,
    haridwar: 185,
    ambala: 45,
    kharar: 25,
  },

  // =========================
  // SHIMLA REGION
  // =========================
  shimla: {
    delhi: 343,
    chandigarh: 113,
    kufri: 20,
    chail: 45,
    kasauli: 77,
    solan: 46,
    manali: 250,
    kullu: 220,
  },

  // =========================
  // MANALI REGION
  // =========================
  manali: {
    delhi: 540,
    chandigarh: 310,
    shimla: 250,
    kullu: 40,
    kasol: 75,
    manikaran: 85,
    mandi: 110,
    leh: 475,
    dharamshala: 235,
  },

  // =========================
  // DHARAMSHALA / KANGRA
  // =========================
  dharamshala: {
    chandigarh: 235,
    manali: 235,
    amritsar: 200,
    kangra: 20,
    palampur: 40,
    baijnath: 55,
    chamunda: 25,
    dalhousie: 120,
  },

  // =========================
  // UTTARAKHAND
  // =========================
  dehradun: {
    delhi: 248,
    mussoorie: 35,
    rishikesh: 43,
    haridwar: 53,
    chandigarh: 170,
    nainital: 285,
  },

  rishikesh: {
    delhi: 242,
    haridwar: 20,
    dehradun: 43,
    mussoorie: 75,
    chandigarh: 210,
  },

  nainital: {
    delhi: 320,
    dehradun: 285,
    almora: 65,
    ranikhet: 60,
  },

  // =========================
  // PUNJAB
  // =========================
  amritsar: {
    delhi: 450,
    chandigarh: 230,
    jammu: 215,
    dharamshala: 200,
    beas: 45,
    jalandhar: 85,
    ludhiana: 140,
  },

  // =========================
  // JAMMU & KASHMIR
  // =========================
  srinagar: {
    jammu: 270,
    gulmarg: 51,
    pahalgam: 95,
    sonamarg: 80,
    leh: 420,
  },

  // =========================
  // LADAKH
  // =========================
  leh: {
    srinagar: 420,
    manali: 475,
    nubra: 120,
    pangong: 160,
    kargil: 220,
  },
};


// Calculate distance between two cities
export const calculateDistance = (
  fromId: string,
  toId: string
): number | null => {
  // 1️⃣ Direct route
  if (distanceMatrix[fromId]?.[toId]) {
    return distanceMatrix[fromId][toId];
  }

  // 2️⃣ Reverse route
  if (distanceMatrix[toId]?.[fromId]) {
    return distanceMatrix[toId][fromId];
  }

  // 3️⃣ Resolve hubs
  const fromHub = cityHubMap[fromId];
  const toHub = cityHubMap[toId];

  if (!fromHub || !toHub) return null;

  // Same hub (local travel)
  if (fromHub === toHub) {
    const a =
      distanceMatrix[fromId]?.[fromHub] ||
      distanceMatrix[fromHub]?.[fromId] ||
      0;

    const b =
      distanceMatrix[fromHub]?.[toId] ||
      distanceMatrix[toId]?.[fromHub] ||
      0;

    return a + b || null;
  }

  // Different hubs: from → hub → hub → to
  const fromToHub =
    distanceMatrix[fromId]?.[fromHub] ||
    distanceMatrix[fromHub]?.[fromId] ||
    0;

  const hubToHub =
    distanceMatrix[fromHub]?.[toHub] ||
    distanceMatrix[toHub]?.[fromHub] ||
    0;

  const hubToTo =
    distanceMatrix[toHub]?.[toId] ||
    distanceMatrix[toId]?.[toHub] ||
    0;

  const total = fromToHub + hubToHub + hubToTo;

  return total > 0 ? total : null;
};


// Get route information
export const getRouteInfo = (fromId: string, toId: string): string => {
  const routeDescriptions: Record<string, string> = {
    // Delhi Routes
    "delhi-shimla": "Via NH44 and NH5 through Ambala, Kalka – Scenic hill highway",
    "delhi-manali": "Via NH44 and NH3 through Chandigarh, Mandi – Mountain highway",
    "delhi-dharamshala": "Via NH44 through Ambala, Pathankot – Plains to hills route",
    "delhi-amritsar": "Via NH44 through Panipat, Ludhiana – Fast national highway",
    "delhi-jaipur": "Via NH48 – Smooth expressway route",
    "delhi-agra": "Via Yamuna Expressway – High-speed corridor",
    "delhi-nainital": "Via NH9 through Moradabad, Haldwani – Kumaon route",
    "delhi-rishikesh": "Via NH334 through Haridwar – Spiritual gateway",

    // Chandigarh Routes
    "chandigarh-shimla": "Via NH5 through Pinjore, Kalka – Classic hill drive",
    "chandigarh-manali": "Via NH154 through Bilaspur, Mandi – Beautiful hill route",
    "chandigarh-kasauli": "Via Dharampur – Short scenic hill road",
    "chandigarh-dharamshala": "Via NH154 – Kangra Valley route",

    // Himachal Local
    "shimla-manali": "Via NH305 and NH3 – Apple belt and river valleys",
    "manali-kasol": "Via Bhuntar – Parvati Valley route",
    "manali-leh": "Via Rohtang Pass, Keylong, Sarchu – High altitude adventure (Summer only)",
    "dharamshala-dalhousie": "Via NH154 – Forested mountain road",

    // Uttarakhand
    "dehradun-mussoorie": "Via Mall Road – Short hill ascent",
    "rishikesh-haridwar": "Via NH334 – Ganga riverside drive",

    // Kashmir & Ladakh
    "srinagar-leh": "Via Sonamarg, Zoji La Pass – Ladakh highway (Summer only)",
  };

  const key1 = `${fromId}-${toId}`;
  const key2 = `${toId}-${fromId}`;

  return (
    routeDescriptions[key1] ||
    routeDescriptions[key2] ||
    "Standard route via national highways"
  );
};

