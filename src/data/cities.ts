// North India cities and popular routes
export interface City {
  id: string;
  name: string;
  state: string;
}

export const northIndiaCities: City[] = [
  // Himachal Pradesh
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh" },
  { id: "manali", name: "Manali", state: "Himachal Pradesh" },
  { id: "dharamshala", name: "Dharamshala", state: "Himachal Pradesh" },
  { id: "dalhousie", name: "Dalhousie", state: "Himachal Pradesh" },
  { id: "kasauli", name: "Kasauli", state: "Himachal Pradesh" },
  { id: "kullu", name: "Kullu", state: "Himachal Pradesh" },
  { id: "mcleodganj", name: "McLeod Ganj", state: "Himachal Pradesh" },
  { id: "kasol", name: "Kasol", state: "Himachal Pradesh" },
  { id: "spiti", name: "Spiti Valley", state: "Himachal Pradesh" },
  { id: "kinnaur", name: "Kinnaur", state: "Himachal Pradesh" },
  
  // Uttarakhand
  { id: "mussoorie", name: "Mussoorie", state: "Uttarakhand" },
  { id: "nainital", name: "Nainital", state: "Uttarakhand" },
  { id: "dehradun", name: "Dehradun", state: "Uttarakhand" },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand" },
  { id: "haridwar", name: "Haridwar", state: "Uttarakhand" },
  { id: "almora", name: "Almora", state: "Uttarakhand" },
  { id: "ranikhet", name: "Ranikhet", state: "Uttarakhand" },
  { id: "auli", name: "Auli", state: "Uttarakhand" },
  { id: "kedarnath", name: "Kedarnath", state: "Uttarakhand" },
  { id: "badrinath", name: "Badrinath", state: "Uttarakhand" },
  
  // Jammu & Kashmir
  { id: "srinagar", name: "Srinagar", state: "Jammu & Kashmir" },
  { id: "gulmarg", name: "Gulmarg", state: "Jammu & Kashmir" },
  { id: "pahalgam", name: "Pahalgam", state: "Jammu & Kashmir" },
  { id: "sonamarg", name: "Sonamarg", state: "Jammu & Kashmir" },
  { id: "jammu", name: "Jammu", state: "Jammu & Kashmir" },
  { id: "katra", name: "Katra", state: "Jammu & Kashmir" },
  
  // Ladakh
  { id: "leh", name: "Leh", state: "Ladakh" },
  { id: "nubra", name: "Nubra Valley", state: "Ladakh" },
  { id: "pangong", name: "Pangong Lake", state: "Ladakh" },
  { id: "kargil", name: "Kargil", state: "Ladakh" },
  
  // Punjab
  { id: "chandigarh", name: "Chandigarh", state: "Punjab/Haryana" },
  { id: "amritsar", name: "Amritsar", state: "Punjab" },
  { id: "ludhiana", name: "Ludhiana", state: "Punjab" },
  { id: "jalandhar", name: "Jalandhar", state: "Punjab" },
  { id: "patiala", name: "Patiala", state: "Punjab" },
  
  // Delhi NCR
  { id: "delhi", name: "Delhi", state: "Delhi" },
  { id: "noida", name: "Noida", state: "Uttar Pradesh" },
  { id: "gurgaon", name: "Gurgaon", state: "Haryana" },
  { id: "faridabad", name: "Faridabad", state: "Haryana" },
];

// Distance matrix (in kilometers) for popular routes
export const distanceMatrix: Record<string, Record<string, number>> = {
  delhi: {
    shimla: 343,
    manali: 540,
    dharamshala: 475,
    mussoorie: 278,
    nainital: 320,
    dehradun: 248,
    rishikesh: 242,
    haridwar: 214,
    chandigarh: 243,
    amritsar: 450,
    jaipur: 280,
    agra: 206,
  },
  chandigarh: {
    shimla: 113,
    manali: 310,
    dharamshala: 235,
    dalhousie: 320,
    kasauli: 65,
    delhi: 243,
    amritsar: 230,
    dehradun: 170,
    rishikesh: 210,
    haridwar: 185,
  },
  shimla: {
    manali: 250,
    delhi: 343,
    chandigarh: 113,
    kasauli: 77,
    kullu: 220,
    dharamshala: 322,
  },
  manali: {
    delhi: 540,
    chandigarh: 310,
    shimla: 250,
    kullu: 40,
    leh: 475,
    kasol: 75,
    dharamshala: 235,
  },
  dehradun: {
    delhi: 248,
    mussoorie: 35,
    rishikesh: 43,
    haridwar: 53,
    chandigarh: 170,
    nainital: 285,
  },
  nainital: {
    delhi: 320,
    dehradun: 285,
    rishikesh: 323,
    almora: 65,
    ranikhet: 60,
  },
  rishikesh: {
    delhi: 242,
    haridwar: 20,
    dehradun: 43,
    chandigarh: 210,
    mussoorie: 75,
  },
  amritsar: {
    delhi: 450,
    chandigarh: 230,
    jammu: 215,
    dharamshala: 200,
  },
  srinagar: {
    jammu: 270,
    gulmarg: 51,
    pahalgam: 95,
    sonamarg: 80,
    leh: 420,
  },
  leh: {
    srinagar: 420,
    manali: 475,
    nubra: 120,
    pangong: 160,
    kargil: 220,
  },
};

// Calculate distance between two cities
export const calculateDistance = (fromId: string, toId: string): number | null => {
  // Check direct route
  if (distanceMatrix[fromId]?.[toId]) {
    return distanceMatrix[fromId][toId];
  }
  
  // Check reverse route
  if (distanceMatrix[toId]?.[fromId]) {
    return distanceMatrix[toId][fromId];
  }
  
  // If no predefined route, return a calculated estimate
  // In real app, you would call a routing API
  return null;
};

// Get route information
export const getRouteInfo = (fromId: string, toId: string): string => {
  const routeDescriptions: Record<string, string> = {
    "delhi-shimla": "Via NH44 through Ambala, Kalka - Scenic highway route",
    "delhi-manali": "Via NH44 and NH3 through Chandigarh, Kullu - Mountain highway",
    "chandigarh-manali": "Via NH21 through Bilaspur, Kullu Valley - Beautiful hill route",
    "chandigarh-shimla": "Via NH22 through Pinjore, Kalka - Classic hill drive",
    "delhi-mussoorie": "Via NH72 through Haridwar, Dehradun - Highway to hills",
    "delhi-nainital": "Via NH9 through Moradabad, Haldwani - Kumaon route",
    "manali-leh": "Via Rohtang Pass, Sarchu - High altitude adventure (Summer only)",
    "srinagar-leh": "Via Sonamarg, Zoji La Pass - Ladakh highway (Summer only)",
  };
  
  const key1 = `${fromId}-${toId}`;
  const key2 = `${toId}-${fromId}`;
  
  return routeDescriptions[key1] || routeDescriptions[key2] || "Standard route via national highways";
};
