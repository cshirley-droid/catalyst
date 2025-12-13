// src/data/items.js

export const ITEMS = {
  // ============================================
  // RAW MATERIALS (By Biome)
  // ============================================

  // --- FOREST ---
  berries: { id: "berries", name: "Wild Berries", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/berries.png?raw=true", desc: "Sugar source." },
  goatgrass: { id: "goatgrass", name: "Goatgrass", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/goatgrass_small.png?raw=true", desc: "Hardy weed." },
  latex_sap: { id: "latex_sap", name: "Latex Sap", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/sap.png?raw=true", desc: "Raw rubber." },
  wild_emmer: { id: "wild_emmer", name: "Wild Emmer", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/emmer_wheat.png?raw=true", desc: "Wheat ancestor." },
  wild_peas: { id: "wild_peas", name: "Wild Peas", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/wild_peas_small.png?raw=true", desc: "Genetic stock." },
  wild_poppy: { id: "wild_poppy", name: "Wild Poppy", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/poppy.png?raw=true", desc: "Medicinal base." },
  willow_bark: { id: "willow_bark", name: "Willow Bark", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/willow_bark.png?raw=true", desc: "Contains Salicin." },
  wood: { id: "wood", name: "Wood", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/wood.png?raw=true", desc: "Cellulose fuel." },
  yellow_peas: { id: "yellow_peas", name: "Yellow Peas", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/pea.png?raw=true", desc: "Recessive trait." },

  // --- FARM ---
  animal_fat: { id: "animal_fat", name: "Animal Fat", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/fat.png?raw=true", desc: "Tallow." },
  beans: { id: "beans", name: "Beans", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/beans.png?raw=true", desc: "Nitrogen fixer." },
  clay: { id: "clay", name: "Clay", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/clay.png?raw=true", desc: "River mud." },
  corn: { id: "corn", name: "Corn", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/corn.png?raw=true", desc: "Starch crop." },
  hide: { id: "hide", name: "Animal Hide", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/hide.png?raw=true", desc: "Raw leather." },
  manure: { id: "manure", name: "Manure", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/manure.png?raw=true", desc: "Nitrates." },
  soil: { id: "soil", name: "Soil", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/soil_small.png?raw=true", desc: "Rich earth." },
  squash: { id: "squash", name: "Squash", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/squash.png?raw=true", desc: "Hardy gourd." },
  urine: { id: "urine", name: "Urine", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/urine.png?raw=true", desc: "Source of Urea." },
  water: { id: "water", name: "Water", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/water.png?raw=true", desc: "Well water." },

  // --- COAST ---
  kelp: { id: "kelp", name: "Kelp", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/kelp.png?raw=true", desc: "Source of Soda Ash." },
  limestone: { id: "limestone", name: "Limestone", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/limestone.png?raw=true", desc: "Calcium Carbonate." },
  sand: { id: "sand", name: "Sand", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/sand.png?raw=true", desc: "Silica (SiO2)." },
  seawater: { id: "seawater", name: "Seawater", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/seawater.png?raw=true", desc: "NaCl + H2O." },

  // --- MINES ---
  chromite: { id: "chromite", name: "Chromite Ore", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/chromite.png?raw=true", desc: "Source of Chrome." },
  coal: { id: "coal", name: "Coal", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/coal.png?raw=true", desc: "Fossil Carbon." },
  copper_ore: { id: "copper_ore", name: "Copper Ore", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/copper.png?raw=true", desc: "Malachite." },
  iron_ore: { id: "iron_ore", name: "Iron Ore", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/iron.png?raw=true", desc: "Hematite." },
  phosphate_rock: { id: "phosphate_rock", name: "Phosphate Rock", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/phosphate.png?raw=true", desc: "Fertilizer base." },
  pyrite: { id: "pyrite", name: "Pyrite", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/pyrite.png?raw=true", desc: "Fool's Gold." },
  tin: { id: "tin", name: "Tin Ore", type: "raw", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/tin.png?raw=true", desc: "Soft metal." },

  // ============================================
  // INTERMEDIATES / REAGENTS
  // ============================================

  ammonia_gas: { id: "ammonia_gas", name: "Ammonia Gas", type: "reagent", icon: "☁️", desc: "NH3." },
  aniline: { id: "aniline", name: "Aniline", type: "reagent", icon: "🧪", desc: "Dye base." },
  ash: { id: "ash", name: "Ash", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/ash.png?raw=true", desc: "Alkali source." },
  
  // OFFICIAL ID: CHLORINE_GAS
  chlorine_gas: { id: "chlorine_gas", name: "Chlorine Gas", type: "reagent", icon: "☠️", desc: "Toxic, green oxidizer." },
  
  charcoal: { id: "charcoal", name: "Charcoal", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/charcoal.png?raw=true", desc: "Pure carbon fuel." },
  chromium: { id: "chromium", name: "Chromium", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/chromium.png?raw=true", desc: "Shiny metal." },
  coal_tar: { id: "coal_tar", name: "Coal Tar", type: "reagent", icon: "⚫", desc: "Sticky byproduct." },
  coke: { id: "coke", name: "Coke", type: "reagent", icon: "⚫", desc: "Pure coal fuel." },
  compost: { id: "compost", name: "Compost", type: "reagent", icon: "🍂", desc: "Methanogen source." },
  copper: { id: "copper", name: "Copper", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/copper_ingot.png?raw=true", desc: "Conductive metal." },
  cornmeal: { id: "cornmeal", name: "Cornmeal", type: "reagent", icon: "🌽", desc: "Ground maize." },
  flour: { id: "flour", name: "Flour", type: "reagent", icon: "🥡", desc: "Ground wheat." },
  green_vitriol: { id: "green_vitriol", name: "Green Vitriol", type: "reagent", icon: "💎", desc: "Iron Sulfate." },
  hydrogen: { id: "hydrogen", name: "Hydrogen", type: "reagent", icon: "☁️", desc: "Flammable gas." },
  iron_bloom: { id: "iron_bloom", name: "Iron Bloom", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/iron_bloom.png?raw=true", desc: "Spongy iron." },
  malt: { id: "malt", name: "Malt", type: "reagent", icon: "🌾", desc: "Sprouted grain." },
  natural_rubber: { id: "natural_rubber", name: "Coagulated Rubber", type: "reagent", icon: "🏐", desc: "Latex solidified by acid." },
  nitric_acid: { id: "nitric_acid", name: "Nitric Acid", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/nitric_acid.png?raw=true", desc: "Strong acid." },
  nitrogen: { id: "nitrogen", name: "Nitrogen", type: "reagent", icon: "☁️", desc: "Inert gas." },
  phenol: { id: "phenol", name: "Phenol", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/phenol_or_carbolic_acid.png?raw=true", desc: "Carbolic acid." },
  plant_pulp: { id: "plant_pulp", name: "Plant Pulp", type: "reagent", icon: "🥣", desc: "Cellulose fibers." },
  poppy_latex: { id: "poppy_latex", name: "Poppy Latex", type: "product", icon: "🥛", desc: "Opium base." },
  potash_solution: { id: "potash_solution", name: "Potash Solution", type: "reagent", icon: "🧪", desc: "Liquid base." },
  quicklime: { id: "quicklime", name: "Quicklime", type: "reagent", icon: "⚪", desc: "CaCO3." },
  raw_opium: { id: "raw_opium", name: "Raw Opium", type: "reagent", icon: "🟤", desc: "Dried latex from poppy pods." },
  morphine_solution: { id: "morphine_solution", name: "Calcium Morphenate", type: "reagent", icon: "🧪", desc: "Morphine dissolved in lime water." },
  crude_morphine: { id: "crude_morphine", name: "Crude Morphine", type: "reagent", icon: "🧂", desc: "Precipitated alkaloid crystals." },
  salicylic_acid: { id: "salicylic_acid", name: "Salicylic Acid", type: "reagent", icon: "🧪", desc: "Extracted from Willow." },
  salt: { id: "salt", name: "Salt", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/salt.png?raw=true", desc: "NaCl." },
  saltpeter: { id: "saltpeter", name: "Saltpeter", type: "reagent", icon: "⚪", desc: "Potassium Nitrate." },
  silicon: { id: "silicon", name: "Silicon", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/silicon.png?raw=true", desc: "Semiconductor." },
  slaked_lime: { id: "slaked_lime", name: "Slaked Lime", type: "reagent", icon: "⚪", desc: "Hydrated lime." },
  soda_ash: { id: "soda_ash", name: "Soda Ash", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/soda_ash.png?raw=true", desc: "Glass maker." },
  stale_urine: { id: "stale_urine", name: "Stale Urine (Ammonia)", type: "reagent", icon: "🧪", desc: "Urea breaks down into ammonia over time." },
  sulfur: { id: "sulfur", name: "Sulfur", type: "reagent", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/sulfur.png?raw=true", desc: "Brimstone." },
  sulfuric_acid: { id: "sulfuric_acid", name: "Sulfuric Acid", type: "reagent", icon: "🧪", desc: "Vitriol." },
  toluene: { id: "toluene", name: "Toluene", type: "reagent", icon: "🧪", desc: "Solvent." },
  vinegar: { id: "vinegar", name: "Vinegar", type: "reagent", icon: "🏺", desc: "Acetic acid." },
  wheat_grain: { id: "wheat_grain", name: "Wheat Grain", type: "reagent", icon: "🌾", desc: "Threshed seeds." },
  wood_alcohol: { id: "wood_alcohol", name: "Wood Alcohol", type: "product", icon: "🍾", desc: "Methanol (Toxic)." },
  wrought_iron: { id: "wrought_iron", name: "Wrought Iron", type: "product", icon: "⛓️", desc: "Worked metal." },

  // ============================================
  // FINISHED GOODS (Products)
  // ============================================

  // --- ALCOHOLS & FERMENTATION ---
  wine: { id: "wine", name: "Wine", type: "product", icon: "🍷", desc: "Fermented fruit juice." },
  beer: { id: "beer", name: "Beer", type: "product", icon: "🍺", desc: "Fermented grain mash." },
  chicha: { id: "chicha", name: "Chicha", type: "product", icon: "🌽", desc: "Fermented maize beer." },
  
  // OFFICIAL ID: ETHANOL_SPIRITS (Replaces ethanol, distilled_alcohol, distilled_spirits)
  ethanol_spirits: { id: "ethanol_spirits", name: "Distilled Spirits", type: "product", icon: "🥃", desc: "High-proof potable alcohol for medicine or fuel." },

  // --- FOOD ---
  bread: { id: "bread", name: "Bread", type: "product", icon: "🍞", desc: "Staff of life." },
  bread_wheat: { id: "bread_wheat", name: "Bread Wheat", type: "product", icon: "🌾", desc: "Hexaploid hybrid." },
  cornbread: { id: "cornbread", name: "Cornbread", type: "product", icon: "🍞", desc: "Golden, crumbly bread." },
  hardtack: { id: "hardtack", name: "Hardtack", type: "product", icon: "🍪", desc: "Simple unleavened bread that lasts forever." },
  hybrid_peas: { id: "hybrid_peas", name: "Hybrid Peas", type: "product", icon: "🫛", desc: "Mendelian genetics." },
  pain_tea: { id: "pain_tea", name: "Willow Tea", type: "product", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/willow_tea-removebg-preview.png?raw=true", desc: "Bitter tea that soothes aches." },
  pea_soup: { id: "pea_soup", name: "Pea Soup", type: "product", icon: "🍲", desc: "Nutritious." },
  roasted_squash: { id: "roasted_squash", name: "Roasted Squash", type: "product", icon: "🥘", desc: "Sweet & nutritious." },
  succotash: { id: "succotash", name: "Succotash", type: "product", icon: "🍲", desc: "Corn and beans. The legumes fixed nitrogen for the maize." },
  wheat_sheaves: { id: "wheat_sheaves", name: "Wheat Sheaves", type: "product", icon: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/wheat.png?raw=true", desc: "Domesticated grain." },

  // --- CONSTRUCTION & MATERIALS ---
  bronze: { id: "bronze", name: "Bronze", type: "product", icon: "🥉", desc: "Ancient alloy." },
  concrete: { id: "concrete", name: "Concrete", type: "product", icon: "🧱", desc: "Liquid stone." },
  glass: { id: "glass", name: "Glass", type: "product", icon: "🥃", desc: "Transparent solid." },
  leather: { id: "leather", name: "Leather", type: "product", icon: "👞", desc: "Tanned hide." },
  paper: { id: "paper", name: "Paper", type: "product", icon: "📜", desc: "Knowledge keeper." },
  stainless_steel: { id: "stainless_steel", name: "Stainless Steel", type: "product", icon: "🥄", desc: "Rust proof." },
  steel: { id: "steel", name: "Steel", type: "product", icon: "🏗️", desc: "Strong alloy." },
  vulcanized_rubber: { id: "vulcanized_rubber", name: "Vulcanized Rubber", type: "product", icon: "⚫", desc: "Durable rubber." },

  // --- CHEMICAL PRODUCTS ---
  ammonia: { id: "ammonia", name: "Ammonia", type: "product", icon: "🧪", desc: "Haber product." },
  aspirin: { id: "aspirin", name: "Aspirin", type: "product", icon: "💊", desc: "Modern pain relief." },
  formaldehyde: { id: "formaldehyde", name: "Formaldehyde", type: "product", icon: "⚗️", desc: "Preservative." },
  gunpowder: { id: "gunpowder", name: "Gunpowder", type: "product", icon: "💣", desc: "Explosive." },
  labware: { id: "labware", name: "Labware", type: "product", icon: "⚗️", desc: "Scientific tools." },
  matches: { id: "matches", name: "Matches", type: "product", icon: "🔥", desc: "Instant fire." },
  morphine: { id: "morphine", name: "Morphine", type: "product", icon: "💉", desc: "Strong analgesic." },
  superphosphate: { id: "superphosphate", name: "Superphosphate", type: "product", icon: "🌱", desc: "Modern fertilizer." },
  synthetic_dye: { id: "synthetic_dye", name: "Synthetic Dye", type: "product", icon: "🎨", desc: "Mauveine." },
  tires: { id: "tires", name: "Tires", type: "product", icon: "🍩", desc: "Transport essential." },
  
  // OFFICIAL ID: BLEACH_BOTTLE (Replaces bleach)
  bleach_bottle: { id: "bleach_bottle", name: "Bleaching Agent", type: "product", icon: "🧴", desc: "A powerful sanitizer (Sodium Hypochlorite)." },
  
  // OFFICIAL ID: SOFT_SOAP
  soft_soap: { id: "soft_soap", name: "Soft Soap", type: "product", icon: "🧼", desc: "Potassium-based liquid soap, good for skin." },
  
  // OFFICIAL ID: HARD_SOAP
  hard_soap: { id: "hard_soap", name: "Hard Soap", type: "product", icon: "⬜", desc: "Sodium-based bar soap, excellent for cleaning and laundry." },

  // --- PHYSICS & ELECTRIC AGE ---
  
  // OFFICIAL ID: BAKELITE_CASING (Replaces bakelite)
  bakelite_casing: { id: "bakelite_casing", name: "Bakelite Casing", type: "product", icon: "☎️", desc: "The first synthetic plastic (Phenol-Formaldehyde Resin)." },
  
  battery: { id: "battery", name: "Voltaic Pile", type: "product", icon: "🔋", desc: "Layers of copper and zinc soaked in acid." },
  lightbulb: { id: "lightbulb", name: "Carbon Bulb", type: "product", icon: "💡", desc: "A carbon filament glowing inside a vacuum." },
  compass: { id: "compass", name: "Compass", type: "product", icon: "🧭", desc: "A magnetized needle pointing North." },
  microchip: { id: "microchip", name: "Microchip", type: "product", icon: "💻", desc: "Computing brain." },
  tnt: { id: "tnt", name: "TNT", type: "product", icon: "🧨", desc: "Trinitrotoluene. Stable high explosive." },
  transistor: { id: "transistor", name: "Transistor", type: "product", icon: "📻", desc: "Logic gate." },
};