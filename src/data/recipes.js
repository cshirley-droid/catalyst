// src/data/recipes.js

export const RECIPES = [
  // ==========================================
  // ERA 1: THE ANCIENT FOREST (Organic Chem)
  // ==========================================

  // --- FUELS & BASES ---
  {
    id: "charcoal_pyrolysis",
    station: "RETORT",
    inputs: [{ id: "wood", count: 1 }],
    heatLevel: 1, 
    output: "charcoal",
    secondary: "wood_alcohol",
    science: "Pyrolysis: Thermal decomposition of organic material in an inert atmosphere."
  },
  {
    id: "ash_combustion",
    station: "KILN",
    inputs: [{ id: "wood", count: 1 }],
    heatLevel: 1,
    output: "ash",
    science: "Combustion: Complete oxidation of biomass yields mineral salts (Potash)."
  },
  {
    id: "potash_leaching",
    station: "POT",
    inputs: [{ id: "ash", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 1,
    output: "potash_solution",
    science: "Leaching: Solvent extraction of soluble potassium carbonate from insoluble matter."
  },

  // --- SOAP & CLEANING ---
  {
    id: "soft_soap_saponification",
    station: "POT",
    inputs: [{ id: "animal_fat", count: 1 }, { id: "potash_solution", count: 1 }],
    heatLevel: 1,
    output: "soft_soap", // OFFICIAL ID
    science: "Saponification: Hydrolysis of triglycerides by a strong base to form fatty acid salts."
  },
  {
    id: "hard_soap_reaction",
    station: "POT",
    inputs: [{ id: "animal_fat", count: 1 }, { id: "soda_ash", count: 1 }],
    heatLevel: 1,
    output: "hard_soap", // OFFICIAL ID
    science: "Saponification: Sodium carbonate (Soda Ash) creates a harder soap bar than Potassium (Potash)."
  },

  // --- MEDICINE (Basic) ---
  {
    id: "willow_tea_brewing",
    station: "POT",
    inputs: [{ id: "willow_bark", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 1,
    output: "pain_tea",
    science: "Decoction: Boiling bark extracts Salicin, a precursor to modern aspirin."
  },

  // --- FERMENTATION (The Alcohol Split) ---
  {
    id: "wine_fermentation",
    station: "VAT",
    inputs: [{ id: "berries", count: 1 }],
    heatLevel: 0,
    output: "wine",
    science: "Ethanol Fermentation: Yeast converts fruit sugars into alcohol and CO2."
  },
  {
    id: "beer_brewing",
    station: "VAT",
    inputs: [{ id: "wheat_grain", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "beer",
    science: "Mashing & Fermentation: Water activates enzymes to convert starch to sugar, which yeast eats."
  },
  {
    id: "chicha_brewing",
    station: "VAT",
    inputs: [{ id: "corn", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "chicha",
    science: "Amylolytic Fermentation: Saliva or sprouting enzymes break down corn starch in water."
  },
  {
    id: "kvass_fermentation",
    station: "VAT",
    inputs: [{ id: "hardtack", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "beer", 
    science: "Wild Fermentation: Rehydrating dried bread allows airborne yeast to restart fermentation."
  },

  // --- VINEGAR PATHWAYS ---
  {
    id: "wine_vinegar",
    station: "VAT",
    inputs: [{ id: "wine", count: 1 }],
    heatLevel: 0, 
    output: "vinegar",
    science: "Acetification: Bacteria oxidize the ethanol in wine into acetic acid."
  },
  {
    id: "malt_vinegar",
    station: "VAT",
    inputs: [{ id: "beer", count: 1 }], 
    heatLevel: 0, 
    output: "vinegar",
    science: "Acetification: Bacteria oxidize the ethanol in beer into acetic acid."
  },

  // --- DISTILLATION ---
  {
    id: "spirit_distillation", // Brandy
    station: "RETORT",
    inputs: [{ id: "wine", count: 1 }],
    heatLevel: 1,
    output: "ethanol_spirits", // OFFICIAL ID
    science: "Distillation: Separating alcohol from water by exploiting their different boiling points."
  },

  // --- FOOD ---
  {
    id: "bread_baking",
    station: "KILN",
    inputs: [{ id: "flour", count: 1 }, { id: "beer", count: 1 }], // Beer barm!
    heatLevel: 1,
    output: "bread",
    science: "Leavening: Live yeast from the beer foam (barm) makes the dough rise."
  },
  {
    id: "corn_leavened_bread",
    station: "KILN",
    inputs: [{ id: "flour", count: 1 }, { id: "chicha", count: 1 }],
    heatLevel: 1,
    output: "bread",
    science: "Leavening: Yeast from the fermented corn mash makes the wheat dough rise."
  },
  {
    id: "hardtack_baking",
    station: "KILN",
    inputs: [{ id: "flour", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 2, 
    output: "hardtack",
    science: "Dehydration: Baking without yeast yields a dense, long-lasting cracker."
  },
  {
    id: "cornbread_baking",
    station: "KILN",
    inputs: [{ id: "cornmeal", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 1,
    output: "cornbread",
    science: "Quick Bread: Maize dough baked on a hot stone."
  },
  {
    id: "pea_soup_cooking",
    station: "POT",
    inputs: [{ id: "wild_peas", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 1,
    output: "pea_soup",
    science: "Boiling: Heat breaks down the tough cell walls of the legume."
  },
  {
    id: "succotash_cooking",
    station: "POT",
    inputs: [{ id: "corn", count: 1 }, { id: "beans", count: 1 }],
    heatLevel: 1,
    output: "succotash",
    science: "Complementary Proteins: Cooking corn and beans together creates a complete amino acid profile."
  },
  {
    id: "roasted_squash",
    station: "KILN",
    inputs: [{ id: "squash", count: 1 }],
    heatLevel: 1,
    output: "roasted_squash",
    science: "Maillard Reaction: Browning of sugars improves flavor."
  },

  // --- PROCESSING (Milling/Threshing) ---
  {
    id: "flour_milling",
    station: "BOWL", // Or MILL if you prefer, but BOWL handles manual grinding well
    inputs: [{ id: "wheat_grain", count: 1 }],
    heatLevel: 0,
    output: "flour",
    science: "Milling: Crushing grain to release the endosperm."
  },
  {
    id: "corn_milling",
    station: "BOWL",
    inputs: [{ id: "corn", count: 1 }],
    heatLevel: 0,
    output: "cornmeal",
    science: "Grinding: Pulverizing dried maize kernels."
  },
  {
    id: "wheat_threshing",
    station: "BOWL",
    inputs: [{ id: "wheat_sheaves", count: 1 }],
    heatLevel: 0,
    output: "wheat_grain",
    science: "Threshing: Separating the edible grain from the chaff."
  },

  // --- MATERIAL PROCESSING (DEAD END FIXES) ---
  {
    id: "pottery_firing",
    station: "KILN",
    inputs: [{ id: "clay", count: 1 }],
    heatLevel: 2,
    output: "labware", 
    science: "Sintering: Heating clay particles until they adhere to each other, creating a hard, ceramic material."
  },
  {
    id: "leather_tanning",
    station: "VAT",
    inputs: [{ id: "hide", count: 1 }, { id: "stale_urine", count: 1 }], 
    heatLevel: 0,
    output: "leather",
    science: "Tanning: Using ammonia/alkaline solutions to alter the protein structure of skin, preventing rot."
  },

  // ==========================================
  // ERA 2: THE COAST (Enlightenment)
  // ==========================================

  // --- GLASS & LIME ---
  {
    id: "quicklime_calcination",
    station: "KILN",
    inputs: [{ id: "limestone", count: 1 }],
    heatLevel: 3, 
    output: "quicklime",
    science: "Calcination: Thermal decomposition of Calcium Carbonate (CaCO3) into Calcium Oxide (CaO) and CO2."
  },
  {
    id: "slaking_lime",
    station: "POT",
    inputs: [{ id: "quicklime", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0, // Exothermic!
    output: "slaked_lime",
    science: "Hydration: Adding water to Quicklime releases massive heat and forms Calcium Hydroxide."
  },
  {
    id: "soda_ash_process",
    station: "KILN",
    inputs: [{ id: "kelp", count: 1 }],
    heatLevel: 2,
    output: "soda_ash",
    science: "Calcination: Burning sodium-rich plants leaves behind Sodium Carbonate (Washing Soda)."
  },
  {
    id: "glass_melting",
    station: "KILN",
    inputs: [{ id: "sand", count: 1 }, { id: "soda_ash", count: 1 }],
    heatLevel: 3,
    output: "glass",
    science: "Vitrification: Soda ash lowers the melting point of silica sand, allowing it to flow into glass."
  },

  // --- SALT & PAPER ---
  {
    id: "salt_evaporation",
    station: "POT",
    inputs: [{ id: "seawater", count: 1 }],
    heatLevel: 1,
    output: "salt",
    science: "Evaporation: Removing water leaves behind dissolved mineral salts."
  },
  {
    id: "salt_evaporation",
    station: "VAT",
    inputs: [{ id: "seawater", count: 1 }],
    heatLevel: 0,
    output: "salt",
    science: "Evaporation: Removing water leaves behind dissolved mineral salts."
  },
  {
    id: "paper_pressing",
    station: "BOWL",
    inputs: [{ id: "plant_pulp", count: 1 }], 
    heatLevel: 0,
    output: "paper",
    science: "Felting: Cellulose fibers bond together as they dry under pressure."
  },
  {
    id: "pulp_digestion",
    station: "POT",
    inputs: [{ id: "wood", count: 1 }, { id: "slaked_lime", count: 1 }],
    heatLevel: 1,
    output: "plant_pulp",
    science: "Alkaline Hydrolysis: Lime breaks down lignin in the wood, freeing the cellulose fibers."
  },

  // --- GENETICS & FARMING ---
  // --- WHEAT ORIGIN (CRITICAL RESTORED RECIPE) ---
  {
    id: "wheat_breeding",
    station: "PLANTER",
    inputs: [{ id: "wild_emmer", count: 1 }, { id: "goatgrass", count: 1 }],
    heatLevel: 0,
    output: "wheat_sheaves",
    science: "Hybridization: Crossing Wild Emmer (tetraploid) with Goatgrass (diploid) creates modern Bread Wheat (hexaploid)."
  },
  // --- SUSTAINABLE FARMING ---
  {
    id: "modern_wheat_farming",
    station: "PLANTER",
    inputs: [{ id: "wheat_grain", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "wheat_sheaves",
    yield: 2,
    science: "Agriculture: Replanting the harvested grain creates a sustainable food loop."
  },
  {
    id: "corn_farming",
    station: "PLANTER",
    inputs: [{ id: "corn", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "corn",
    yield: 2, 
    science: "Agriculture: Planting a seed with water yields a harvest greater than the input."
  },
  {
    id: "wild_emmer_farming",
    station: "PLANTER",
    inputs: [{ id: "wild_emmer", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "wild_emmer",
    yield: 2,
    science: "Cultivation: Systematically growing grasses allows for a surplus of grain."
  },
  {
    id: "pea_farming",
    station: "PLANTER",
    inputs: [{ id: "wild_peas", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "wild_peas",
    yield: 2,
    science: "Propagation: Legumes are hardy crops that multiply rapidly in moist soil."
  },
  {
    id: "pea_breeding",
    station: "PLANTER",
    inputs: [{ id: "wild_peas", count: 1 }, { id: "yellow_peas", count: 1 }],
    heatLevel: 0,
    output: "hybrid_peas",
    science: "Mendelian Inheritance: Crossing plants with distinct traits (Green vs. Yellow pods) to track dominant and recessive genes."
  },
  {
    id: "companion_planting", // Three Sisters
    station: "PLANTER",
    inputs: [{ id: "corn", count: 1 }, { id: "beans", count: 1 }],
    heatLevel: 0,
    output: "succotash", // Simplified output
    yield: 2,
    science: "Symbiosis: Beans fix nitrogen for the corn, while corn provides a trellis for the beans."
  },

  // ==========================================
  // ERA 3: THE MINES (Industrial Age)
  // ==========================================

  // --- METALLURGY ---
  {
    id: "copper_smelting",
    station: "KILN",
    inputs: [{ id: "copper_ore", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 2,
    output: "copper",
    science: "Reduction: Carbon strips oxygen from the ore at high heat, leaving pure metal."
  },
  {
    id: "tin_smelting",
    station: "KILN",
    inputs: [{ id: "tin", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 2,
    output: "tin_ingot", 
    science: "Smelting: Reducing tin oxide to metal."
  },
  {
    id: "bronze_alloying",
    station: "KILN",
    inputs: [{ id: "copper", count: 1 }, { id: "tin", count: 1 }],
    heatLevel: 2,
    output: "bronze",
    science: "Alloying: Mixing molten copper and tin creates a metal harder than either alone."
  },
  {
    id: "iron_smelting",
    station: "KILN",
    inputs: [{ id: "iron_ore", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 3, 
    output: "iron_bloom",
    science: "Reduction: Intense heat and carbon monoxide reduce iron oxide to a sponge of metallic iron."
  },
  {
    id: "wrought_iron_forging",
    station: "BOWL", // Hammering
    inputs: [{ id: "iron_bloom", count: 1 }],
    heatLevel: 0,
    output: "wrought_iron",
    science: "Forging: Hammering the hot bloom expels slag and aligns the iron crystals."
  },
  {
    id: "steel_alloying",
    station: "KILN",
    inputs: [{ id: "wrought_iron", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 3,
    output: "steel",
    science: "Cementation: Introducing a precise amount of carbon into iron creates steel."
  },
  {
    id: "stainless_steel_alloying",
    station: "KILN",
    inputs: [{ id: "steel", count: 1 }, { id: "chromium", count: 1 }],
    heatLevel: 3,
    output: "stainless_steel",
    science: "Passivation: Chromium forms a thin oxide layer that protects the steel from rust."
  },
  {
    id: "chrome_extraction",
    station: "KILN",
    inputs: [{ id: "chromite", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 3,
    output: "chromium",
    science: "Reduction: Isolating chromium metal from its oxide ore."
  },

  // --- RUBBER & COAL ---
  {
    id: "rubber_coagulation",
    station: "POT",
    inputs: [{ id: "latex_sap", count: 1 }, { id: "vinegar", count: 1 }],
    heatLevel: 1,
    output: "natural_rubber",
    science: "Coagulation: Acid neutralizes the negative charge of latex particles, causing them to clump."
  },
  {
    id: "rubber_vulcanization",
    station: "KILN",
    inputs: [{ id: "natural_rubber", count: 1 }, { id: "sulfur", count: 1 }],
    heatLevel: 2,
    output: "vulcanized_rubber", // OFFICIAL ID
    science: "Cross-Linking: Sulfur atoms form bridges between polymer chains, making the rubber durable and heat-resistant."
  },
  {
    id: "coke_production",
    station: "KILN",
    inputs: [{ id: "coal", count: 1 }],
    heatLevel: 2,
    output: "coke",
    secondary: "coal_tar",
    science: "Destructive Distillation: Baking coal in the absence of air drives off volatiles to leave pure carbon."
  },

  // --- EXPLOSIVES & FUEL ---
  {
    id: "saltpeter_leaching",
    station: "POT",
    inputs: [{ id: "manure", count: 1 }, { id: "ash", count: 1 }], // Simplified niter bed
    heatLevel: 1,
    output: "saltpeter",
    science: "Nitrification: Bacteria convert ammonia in waste into nitrates, which are harvested with potash."
  },
  {
    id: "gunpowder_mixing",
    station: "BOWL",
    inputs: [{ id: "saltpeter", count: 1 }, { id: "charcoal", count: 1 }],
    heatLevel: 0,
    output: "gunpowder",
    science: "Deflagration: An intimate mixture of oxidizer (saltpeter) and fuel (charcoal)."
  },
  {
    id: "ethanol_distillation",
    station: "RETORT",
    inputs: [{ id: "beer", count: 2 }], // 2 Beer -> 1 Spirit
    heatLevel: 2,
    output: "ethanol_spirits", // OFFICIAL ID
    science: "Fractional Distillation: Separating components based on differences in boiling point to concentrate ethanol."
  },

  // ==========================================
  // ERA 4: INDUSTRY (Chemistry)
  // ==========================================

  // --- ACIDS & BASES ---
  {
    id: "sulfuric_acid_chamber",
    station: "RETORT",
    inputs: [{ id: "sulfur", count: 1 }, { id: "saltpeter", count: 1 }],
    heatLevel: 2,
    output: "sulfuric_acid",
    science: "Lead Chamber Process: Oxidation of sulfur dioxide by nitrogen oxides to form sulfuric acid."
  },
  {
    id: "nitric_acid_synthesis",
    station: "RETORT",
    inputs: [{ id: "saltpeter", count: 1 }, { id: "sulfuric_acid", count: 1 }],
    heatLevel: 2,
    output: "nitric_acid",
    science: "Displacement: A stronger acid (Sulfuric) displaces a weaker acid (Nitric) from its salt."
  },
  {
    id: "ammonia_recovery",
    station: "RETORT",
    inputs: [{ id: "stale_urine", count: 1 }, { id: "slaked_lime", count: 1 }],
    heatLevel: 1,
    output: "ammonia_gas",
    science: "Gas Evolution: Lime displaces ammonia from ammonium salts found in aged urine."
  },

  // --- FERTILIZER & CHLORINE ---
  {
    id: "fertilizer_synthesis",
    station: "VAT",
    inputs: [{ id: "phosphate_rock", count: 1 }, { id: "sulfuric_acid", count: 1 }],
    heatLevel: 1, // Exothermic
    output: "superphosphate",
    science: "Acidulation: Sulfuric acid converts insoluble phosphate rock into soluble forms plants can eat."
  },
  {
    id: "chlorine_generation",
    station: "RETORT",
    inputs: [{ id: "salt", count: 1 }, { id: "sulfuric_acid", count: 1 }],
    heatLevel: 2,
    output: "chlorine_gas",
    science: "Early Chemical Synthesis: Oxidation of sodium chloride (salt) by sulfuric acid to produce highly toxic chlorine gas."
  },
  {
    id: "bleach_production",
    station: "RETORT",
    inputs: [{ id: "chlorine_gas", count: 1 }, { id: "slaked_lime", count: 1 }], // Using slaked_lime (hydrated)
    heatLevel: 0,
    output: "bleach_bottle", // OFFICIAL ID
    science: "Absorption: Chlorine gas reacts with hydrated lime to form bleaching powder (Calcium Hypochlorite)."
  },

  // --- ORGANIC SYNTHESIS (Dyes, Drugs) ---
  {
    id: "aniline_synthesis",
    station: "RETORT",
    inputs: [{ id: "coal_tar", count: 1 }, { id: "nitric_acid", count: 1 }], // Simplified
    heatLevel: 2,
    output: "aniline",
    science: "Nitration & Reduction: Deriving aniline precursors from coal tar waste."
  },
  {
    id: "synthetic_dye_mixing",
    station: "VAT",
    inputs: [{ id: "aniline", count: 1 }, { id: "ethanol_spirits", count: 1 }], 
    heatLevel: 1,
    output: "synthetic_dye",
    science: "Mauveine Synthesis: The first synthetic organic dye, created by Perkin from coal tar aniline."
  },
  {
    id: "aspirin_synthesis",
    station: "RETORT",
    inputs: [{ id: "salicylic_acid", count: 1 }, { id: "vinegar", count: 1 }], // Vinegar = Acetic Acid source
    heatLevel: 1,
    output: "aspirin",
    science: "Acetylation: Reacting salicylic acid with acetic acid (vinegar) reduces its toxicity to the stomach."
  },
  {
    id: "salicylic_extraction",
    station: "POT",
    inputs: [{ id: "willow_bark", count: 2 }], // Concentration
    heatLevel: 2,
    output: "salicylic_acid",
    science: "Concentration: Refining the active compound from willow bark."
  },
  {
    id: "tnt_synthesis",
    station: "RETORT",
    inputs: [{ id: "toluene", count: 1 }, { id: "nitric_acid", count: 1 }],
    heatLevel: 2,
    output: "tnt",
    science: "Nitration: Adding three nitro groups to toluene creates a stable high explosive."
  },
  {
    id: "toluene_distillation",
    station: "RETORT",
    inputs: [{ id: "coal_tar", count: 1 }],
    heatLevel: 2,
    output: "toluene",
    science: "Fractionation: Isolating toluene from the complex mixture of coal tar."
  },

  // --- OPIUM PATH ---
  {
    id: "opium_extraction",
    station: "POT",
    inputs: [{ id: "wild_poppy", count: 2 }, { id: "water", count: 1 }],
    heatLevel: 1,
    output: "raw_opium",
    science: "Decoction: Boiling the poppy pods extracts the water-soluble latex and alkaloids."
  },
  {
    id: "lime_treatment",
    station: "VAT",
    inputs: [{ id: "raw_opium", count: 1 }, { id: "slaked_lime", count: 1 }],
    heatLevel: 0,
    output: "morphine_solution",
    science: "Alkaline Extraction: Lime reacts with morphine to form soluble calcium morphenate, leaving impurities behind."
  },
  {
    id: "morphine_precipitation",
    station: "BOWL",
    inputs: [{ id: "morphine_solution", count: 1 }, { id: "stale_urine", count: 1 }], // Ammonium source
    heatLevel: 0,
    output: "crude_morphine",
    science: "Precipitation: Adding Ammonium (from urine) lowers the pH, causing solid morphine crystals to fall out of solution."
  },
  {
    id: "morphine_purification",
    station: "RETORT",
    inputs: [{ id: "crude_morphine", count: 1 }, { id: "ethanol_spirits", count: 1 }], // OFFICIAL ID
    heatLevel: 1,
    output: "morphine",
    science: "Recrystallization: Dissolving crude crystals in hot alcohol filters out the last remaining plant matter."
  },

  // ==========================================
  // ERA 5: THE ELECTRIC AGE (Physics)
  // ==========================================

  // --- PLASTICS ---
  {
    id: "bakelite_polymerization",
    station: "KILN",
    inputs: [{ id: "phenol", count: 1 }, { id: "wood_alcohol", count: 1 }], // Phenol + Formaldehyde source
    heatLevel: 3, 
    output: "bakelite_casing", // OFFICIAL ID
    science: "Condensation Polymerization: Phenol and Formaldehyde react under heat/pressure to form the first synthetic plastic."
  },
  {
    id: "phenol_extraction",
    station: "RETORT",
    inputs: [{ id: "coal_tar", count: 1 }],
    heatLevel: 2,
    output: "phenol",
    science: "Distillation: Extracting carbolic acid (phenol) from coal tar."
  },

  // --- PHYSICS DEVICES ---
  {
    id: "compass_assembly",
    station: "BOWL",
    inputs: [{ id: "wrought_iron", count: 1 }, { id: "water", count: 1 }],
    heatLevel: 0,
    output: "compass",
    science: "Magnetism: A magnetized iron needle floating on water aligns with the Earth's magnetic field."
  },
  {
    id: "battery_assembly",
    station: "BOWL",
    inputs: [{ id: "copper", count: 1 }, { id: "sulfuric_acid", count: 1 }],
    heatLevel: 0,
    output: "battery",
    science: "Electrochemistry: Chemical energy is converted into electrical energy via redox reactions."
  },
  {
    id: "lightbulb_blowing",
    station: "KILN",
    inputs: [{ id: "glass", count: 1 }, { id: "charcoal", count: 1 }], // Charcoal = Carbon Filament
    heatLevel: 3,
    output: "lightbulb",
    science: "Incandescence: Passing electricity through a carbon filament in a vacuum creates light and heat."
  },
  {
    id: "silicon_purification",
    station: "KILN",
    inputs: [{ id: "sand", count: 1 }, { id: "coke", count: 1 }],
    heatLevel: 3,
    output: "silicon",
    science: "Reduction: Removing oxygen from silica sand using carbon at high temperatures."
  },
  {
    id: "transistor_fabrication",
    station: "KILN", 
    inputs: [{ id: "silicon", count: 1 }, { id: "copper", count: 1 }],
    heatLevel: 1,
    output: "transistor",
    science: "Semiconductors: Doping silicon allows it to act as a switch or amplifier for electrical signals."
  },
  {
    id: "microchip_assembly",
    station: "BOWL", 
    inputs: [{ id: "transistor", count: 2 }, { id: "bakelite_casing", count: 1 }], // OFFICIAL ID
    heatLevel: 0,
    output: "microchip",
    science: "Integration: Photolithography allows thousands of transistors to be etched onto a single silicon chip."
  }
];