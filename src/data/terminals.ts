export interface Terminal {
  id: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  state: string;
  country?: string;
  slug: string;
  storageCapacity: string;
  storageTanks: string;
  accessModes: string;
  certifications: number;
  products: string[];
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  certificationsList: string[];
  coordinates: { lat: number; lng: number };
  image: string;
  isHeadquarters?: boolean;
}

export const terminals: Terminal[] = [
  {
    id: "houston",
    name: "Houston Terminal",
    tagline: "Strategic Gateway to the Americas",
    location: "Houston Ship Channel",
    city: "Houston",
    state: "Texas",
    country: "USA",
    slug: "houston",
    storageCapacity: "850,000 m³",
    storageTanks: "175+",
    accessModes: "Deep Sea, Barge, Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Petrochemicals", "LNG", "Biofuels", "Lubricants"],
    services: [
      { title: "Deep Water Access", description: "Direct Houston Ship Channel access for VLCC and Suezmax vessels", icon: "Anchor" },
      { title: "Pipeline Network", description: "Connected to major US Gulf Coast pipeline infrastructure", icon: "GitBranch" },
      { title: "Large-Scale Storage", description: "Hub-level capacity supporting transatlantic trade flows", icon: "Database" },
      { title: "Export Operations", description: "Specialized export terminal for global distribution", icon: "Globe" },
      { title: "Multi-Modal Access", description: "Truck, rail, barge, and pipeline connectivity", icon: "Truck" },
      { title: "US Compliance", description: "Full EPA, OSHA, and Coast Guard compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "API Standards", "USCG Certified", "EPA Compliant", "OSHA Compliant"],
    coordinates: { lat: 29.7604, lng: -95.3698 },
    image: "houston-terminal",
  },
  {
    id: "seagraves",
    name: "Seagraves Terminal",
    tagline: "Corporate Headquarters & Permian Gateway",
    location: "Seagraves Industrial District",
    city: "Seagraves",
    state: "Texas",
    country: "USA",
    slug: "seagraves",
    storageCapacity: "320,000 m³",
    storageTanks: "65+",
    accessModes: "Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Natural Gas Liquids", "Condensate", "Produced Water"],
    services: [
      { title: "Headquarters Operations", description: "Central command for all West Texas Sunrise logistics operations", icon: "Building" },
      { title: "Permian Basin Hub", description: "Strategic location serving the heart of US oil production", icon: "MapPin" },
      { title: "24/7 Operations Center", description: "Round-the-clock terminal management and customer support", icon: "Clock" },
      { title: "Tank Farm Management", description: "State-of-the-art storage facility operations", icon: "Database" },
      { title: "Equipment Maintenance", description: "Full-service maintenance facility for terminal equipment", icon: "Wrench" },
      { title: "Safety Command", description: "Centralized safety monitoring and compliance management", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "API Standards", "DOT Certified", "EPA Compliant", "OSHA Compliant"],
    coordinates: { lat: 32.9412, lng: -102.5654 },
    image: "seagraves-terminal",
    isHeadquarters: true,
  },
  {
    id: "rotterdam",
    name: "Rotterdam Terminal",
    tagline: "Europe's Premier Storage Hub",
    location: "Port of Rotterdam - Europoort",
    city: "Rotterdam",
    state: "South Holland",
    country: "Netherlands",
    slug: "rotterdam",
    storageCapacity: "1,200,000 m³",
    storageTanks: "250+",
    accessModes: "Deep Sea, Barge, Pipeline, Road & Rail",
    certifications: 8,
    products: ["Crude Oil", "Refined Products", "Petrochemicals", "Biofuels", "Vegetable Oils", "Chemicals"],
    services: [
      { title: "ARA Hub Access", description: "Strategic position in Amsterdam-Rotterdam-Antwerp trading hub", icon: "Globe" },
      { title: "Deep Water Berths", description: "Accommodate VLCCs and largest chemical tankers", icon: "Anchor" },
      { title: "European Distribution", description: "Gateway to EU markets via inland waterways and rail", icon: "Map" },
      { title: "Blending Operations", description: "Advanced product blending and quality control", icon: "Beaker" },
      { title: "Barge Operations", description: "Rhine-Maas-Danube waterway connectivity", icon: "Ship" },
      { title: "EU Compliance", description: "Full REACH, Seveso III, and EU environmental compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "CDI-T Certified", "Seveso III", "REACH Compliant", "ISPS Code", "Green Award", "Port State Control"],
    coordinates: { lat: 51.9225, lng: 4.4792 },
    image: "rotterdam-terminal",
  },
  {
    id: "santos",
    name: "Santos Terminal",
    tagline: "South America's Largest Port Hub",
    location: "Port of Santos",
    city: "Santos",
    state: "São Paulo",
    country: "Brazil",
    slug: "santos",
    storageCapacity: "680,000 m³",
    storageTanks: "140+",
    accessModes: "Deep Sea, Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Ethanol", "Biofuels", "Petrochemicals", "Vegetable Oils"],
    services: [
      { title: "Brazilian Gateway", description: "Primary access point for Brazil's industrial heartland", icon: "Globe" },
      { title: "Ethanol Expertise", description: "Specialized handling for Brazil's biofuel exports", icon: "Leaf" },
      { title: "Petrobras Connections", description: "Integrated with national oil infrastructure", icon: "GitBranch" },
      { title: "Deep Draft Berths", description: "Handle Suezmax and Aframax vessels", icon: "Anchor" },
      { title: "Agri-Commodities", description: "Vegetable oil and agricultural liquid handling", icon: "Wheat" },
      { title: "ANTAQ Certified", description: "Full Brazilian port authority compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "ANTAQ Certified", "ANP Licensed", "IBAMA Compliant", "ISPS Code"],
    coordinates: { lat: -23.9618, lng: -46.3322 },
    image: "santos-terminal",
  },
  {
    id: "cartagena",
    name: "Cartagena Terminal",
    tagline: "Caribbean Chemical Gateway",
    location: "Port of Cartagena - Mamonal",
    city: "Cartagena",
    state: "Bolívar",
    country: "Colombia",
    slug: "cartagena",
    storageCapacity: "520,000 m³",
    storageTanks: "110+",
    accessModes: "Deep Sea, Pipeline, Road",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Petrochemicals", "Industrial Chemicals", "LPG", "Specialty Chemicals"],
    services: [
      { title: "Caribbean Hub", description: "Strategic location for Caribbean and Andean trade routes", icon: "Globe" },
      { title: "Chemical Specialization", description: "Advanced chemical handling and storage facilities", icon: "Beaker" },
      { title: "Refinery Integration", description: "Connected to Reficar refinery complex", icon: "Building" },
      { title: "Deep Water Access", description: "Natural deep harbor for large tankers", icon: "Anchor" },
      { title: "Free Trade Zone", description: "Bonded storage with customs advantages", icon: "Lock" },
      { title: "Colombian Standards", description: "Full DIMAR and MinAmbiente compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "BASC Certified", "ISPS Code", "DIMAR Licensed", "MinAmbiente Compliant"],
    coordinates: { lat: 10.3910, lng: -75.4794 },
    image: "cartagena-terminal",
  },
  {
    id: "colon",
    name: "Panama Terminal",
    tagline: "Canal Zone Transshipment Hub",
    location: "Colón Free Trade Zone",
    city: "Colón",
    state: "Colón Province",
    country: "Panama",
    slug: "colon",
    storageCapacity: "450,000 m³",
    storageTanks: "95+",
    accessModes: "Deep Sea, Pipeline, Road",
    certifications: 6,
    products: ["Refined Products", "Bunker Fuels", "Petrochemicals", "LPG", "Aviation Fuel", "Marine Diesel"],
    services: [
      { title: "Canal Proximity", description: "Strategic position at Atlantic entrance to Panama Canal", icon: "Ship" },
      { title: "Bunkering Hub", description: "Major ship fueling operations for canal traffic", icon: "Fuel" },
      { title: "Transshipment Center", description: "East-West trade route convergence point", icon: "ArrowLeftRight" },
      { title: "Free Zone Benefits", description: "Tax-advantaged storage in Colón Free Trade Zone", icon: "Lock" },
      { title: "Regional Distribution", description: "Central America and Caribbean supply hub", icon: "Map" },
      { title: "AMP Certified", description: "Panama Maritime Authority full compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "AMP Certified", "ISPS Code", "CFZ Licensed", "AUPSA Compliant"],
    coordinates: { lat: 9.3547, lng: -79.9017 },
    image: "panama-terminal",
  },
  {
    id: "montreal",
    name: "Montreal Terminal",
    tagline: "North American Gateway via St. Lawrence",
    location: "Port of Montreal",
    city: "Montreal",
    state: "Quebec",
    country: "Canada",
    slug: "montreal",
    storageCapacity: "580,000 m³",
    storageTanks: "125+",
    accessModes: "Deep Sea, Barge, Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Petrochemicals", "Chemicals", "Vegetable Oils", "Biofuels"],
    services: [
      { title: "St. Lawrence Seaway", description: "Direct Great Lakes and inland waterway access", icon: "Waves" },
      { title: "Eastern Canadian Hub", description: "Primary distribution point for Quebec and Ontario", icon: "Map" },
      { title: "Year-Round Operations", description: "Ice-class vessel capable with winter operations", icon: "Snowflake" },
      { title: "US Border Access", description: "Seamless cross-border logistics to northeastern US", icon: "ArrowLeftRight" },
      { title: "Rail Connectivity", description: "CN and CP rail direct terminal access", icon: "Train" },
      { title: "Transport Canada", description: "Full TC and Environment Canada compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "Transport Canada", "ISPS Code", "CEPA Compliant", "Port Authority Licensed"],
    coordinates: { lat: 45.5017, lng: -73.5673 },
    image: "montreal-terminal",
  },
  {
    id: "altamira",
    name: "Altamira Terminal",
    tagline: "Mexico's Gulf Coast Energy Hub",
    location: "Port of Altamira",
    city: "Altamira",
    state: "Tamaulipas",
    country: "Mexico",
    slug: "altamira",
    storageCapacity: "420,000 m³",
    storageTanks: "90+",
    accessModes: "Deep Sea, Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "Petrochemicals", "LPG", "Industrial Chemicals", "Ammonia"],
    services: [
      { title: "Mexican Energy Hub", description: "Strategic access to Mexico's industrial corridor", icon: "Building" },
      { title: "PEMEX Integration", description: "Connected to national petroleum infrastructure", icon: "GitBranch" },
      { title: "Deep Water Port", description: "Modern deep-draft facilities for large vessels", icon: "Anchor" },
      { title: "Chemical Corridor", description: "Adjacent to major petrochemical complexes", icon: "Beaker" },
      { title: "USMCA Benefits", description: "Trade advantages under North American agreement", icon: "Globe" },
      { title: "SCT Certified", description: "Full Mexican transport authority compliance", icon: "Shield" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "SCT Certified", "ISPS Code", "SEMARNAT Compliant", "API Altamira Licensed"],
    coordinates: { lat: 22.4139, lng: -97.9431 },
    image: "altamira-terminal",
  },
  {
    id: "corpus-christi",
    name: "Corpus Christi Terminal",
    tagline: "Texas Gulf Coast Export Gateway",
    location: "Port of Corpus Christi",
    city: "Corpus Christi",
    state: "Texas",
    country: "USA",
    slug: "corpus-christi",
    storageCapacity: "780,000 m³",
    storageTanks: "170+",
    accessModes: "Deep Sea, Pipeline, Road & Rail",
    certifications: 6,
    products: ["Crude Oil", "Refined Products", "LNG", "Petrochemicals", "Wind Energy Components", "Agricultural Products"],
    services: [
      { title: "Export Superport", description: "Largest US crude oil export terminal", icon: "Ship" },
      { title: "Deep Channel Access", description: "75-foot ship channel for VLCCs", icon: "Anchor" },
      { title: "Eagle Ford Connection", description: "Direct pipeline access to Eagle Ford Shale", icon: "GitBranch" },
      { title: "LNG Operations", description: "Liquefied natural gas export capabilities", icon: "Flame" },
      { title: "Renewable Energy", description: "Wind energy component handling and storage", icon: "Wind" },
      { title: "Texas Pride", description: "Proudly serving America's energy independence", icon: "Star" },
    ],
    certificationsList: ["ISO 9001:2015", "ISO 14001:2018", "API Standards", "USCG Certified", "EPA Compliant", "OSHA Compliant"],
    coordinates: { lat: 27.8006, lng: -97.3964 },
    image: "corpus-christi-terminal",
  },
];

export const getTerminalBySlug = (slug: string): Terminal | undefined => {
  return terminals.find((t) => t.slug === slug);
};

export const getTotalStats = () => {
  const totalCapacity = terminals.reduce((acc, t) => {
    const num = parseInt(t.storageCapacity.replace(/[^0-9]/g, ""));
    return acc + num;
  }, 0);
  
  const totalTanks = terminals.reduce((acc, t) => {
    const num = parseInt(t.storageTanks.replace(/[^0-9]/g, ""));
    return acc + num;
  }, 0);

  // Count unique countries
  const countries = new Set(terminals.map(t => t.country || "USA"));

  return {
    totalCapacity: `${(totalCapacity / 1000000).toFixed(1)}M+ m³`,
    totalTanks: `${totalTanks}+`,
    totalTerminals: terminals.length,
    totalCountries: countries.size,
  };
};
