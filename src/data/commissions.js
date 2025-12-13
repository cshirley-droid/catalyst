// src/data/commissions.js

export const COMMISSIONS = [
  // ==========================================
  // ERA 0: THE TUTORIAL (Survival)
  // ==========================================
  {
    id: "cm_salt",
    era: 0,
    sender: "Julius Caesar",
    text: "The Republic pays the legions in salt. Figure out how to extract it from the sea.",
    req: [{ id: "salt", count: 5 }],
    reward: { florins: 100 } // Slight bump for starter cash
  },

  // ==========================================
  // ERA 1: THE FOREST (Biology)
  // ==========================================
  {
    id: "cm_succotash",
    era: 1,
    sender: "Squanto (Tisquantum)",
    text: "The soil is tired. Show the new settlers how the beans and corn feed one another when planted together.",
    req: [{ id: "succotash", count: 10 }],
    reward: { florins: 250 }
  },
  {
    id: "cm_beer",
    era: 1,
    sender: "The Village Baker",
    text: "My sourdough starter has died! I need lively yeast foam from a grain brew to rise the dough.",
    req: [{ id: "beer", count: 5 }],
    reward: { florins: 350 }
  },
  {
    id: "cm_tea",
    era: 1,
    sender: "Paracelsus",
    text: "The barber-surgeons bleed patients for headaches. I seek the essence of the Willow tree, boiled.",
    req: [{ id: "pain_tea", count: 5 }],
    reward: { florins: 500 }
  },

  // ==========================================
  // ERA 2: THE COAST (Enlightenment & Navigation)
  // Target: ~800 - 1500 Florins
  // ==========================================
  {
    id: "cm_compass",
    era: 2,
    sender: "Christopher Columbus",
    text: "The stars are hidden by storms. We need a needle that finds the North, floating in a bowl.",
    req: [{ id: "compass", count: 5 }],
    reward: { florins: 800 }
  },
  {
    id: "cm_concrete",
    era: 2,
    sender: "Vitruvius",
    text: "The harbor walls crumble. We need the liquid stone of the Romans (Ash and Lime) to bind the aqueduct.",
    req: [{ id: "concrete", count: 20 }],
    reward: { florins: 1000 }
  },
  {
    id: "cm_paper",
    era: 2,
    sender: "Johannes Gutenberg",
    text: "The press is ready. But we lack the medium to carry the Word. Press the wood pulp flat.",
    req: [{ id: "paper", count: 20 }],
    reward: { florins: 1200 }
  },
  {
    id: "cm_glass",
    era: 2,
    sender: "Isaac Newton",
    text: "I attempt to split the light itself. I require prisms of perfect clarity, melted from sand and ash.",
    req: [{ id: "glass", count: 10 }],
    reward: { florins: 1500 }
  },

  // ==========================================
  // ERA 3: THE MINES (Industrial Age)
  // Target: ~2500 - 4500 Florins
  // ==========================================
  {
    id: "cm_rubber",
    era: 3,
    sender: "Charles Goodyear",
    text: "It melts in summer. Stabilize this gum with brimstone (Sulfur) and heat.",
    req: [{ id: "vulcanized_rubber", count: 10 }],
    reward: { florins: 2500 }
  },
  {
    id: "cm_wright_fuel",
    era: 3,
    sender: "The Wright Brothers",
    text: "The engine is too heavy. We need a fuel that burns cleaner and hotter than kerosene.",
    req: [{ id: "ethanol_spirits", count: 100 }],
    reward: { florins: 3000 }
  },
  {
    id: "cm_steel",
    era: 3,
    sender: "Henry Bessemer",
    text: "Iron is too brittle for the rails. We need a metal cooked with pure carbon to make it strong.",
    req: [{ id: "steel", count: 15 }],
    reward: { florins: 3500 }
  },
  {
    id: "cm_tnt",
    era: 3,
    sender: "Alfred Nobel",
    text: "Nitroglycerin is too volatile. I seek a stable compound to make the mines safer.",
    req: [{ id: "tnt", count: 10 }],
    reward: { florins: 4500 }
  },

  // ==========================================
  // ERA 4: INDUSTRY (Chemistry)
  // Target: ~6000 - 10000 Florins
  // ==========================================
  {
    id: "cm_sanitation_kit", 
    era: 4,
    sender: "Florence Nightingale",
    text: "The field hospitals are rampant with infection. We need disinfectants and scrubbing agents immediately.",
    req: [
        { id: "bleach_bottle", count: 20 }, 
        { id: "hard_soap", count: 20 }      
    ],
    reward: { florins: 6000 }
  },
  {
    id: "cm_fertilizer",
    era: 4,
    sender: "John Bennet Lawes",
    text: "The population grows. Dissolve the phosphate rocks with acid to feed the world.",
    req: [{ id: "superphosphate", count: 20 }],
    reward: { florins: 7000 }
  },
  {
    id: "cm_aspirin",
    era: 4,
    sender: "Felix Hoffmann",
    text: "My father suffers rheumatism. Willow tea is too weak. Synthesize the acetylated acid.",
    req: [{ id: "aspirin", count: 20 }],
    reward: { florins: 8500 }
  },
  {
    id: "cm_morphine",
    era: 4,
    sender: "Civil War Surgeon",
    text: "The amputation saw is cruel. We need the deep sleep of the poppy, purified with lime and alcohol.",
    req: [{ id: "morphine", count: 5 }],
    reward: { florins: 10000 }
  },

  // ==========================================
  // ERA 5: THE ELECTRIC AGE (Physics & Future)
  // Target: ~15000 - 25000 Florins
  // ==========================================
  {
    id: "cm_bell_insulation",
    era: 5,
    sender: "Alexander Graham Bell",
    text: "I am attempting to insulate wires for a new communication device. Gutta-percha is failing me.",
    req: [
        { id: "vulcanized_rubber", count: 50 }, 
        { id: "bakelite_casing", count: 10 }    
    ],
    reward: { florins: 15000 }
  },
  {
    id: "cm_battery",
    era: 5,
    sender: "Alessandro Volta",
    text: "I stack discs of copper and acid. A continuous flow of electrical fluid is born!",
    req: [{ id: "battery", count: 10 }],
    reward: { florins: 18000 }
  },
  {
    id: "cm_lightbulb",
    era: 5,
    sender: "Thomas Edison",
    text: "I have found 10,000 ways that won't work. Now I need carbon filaments encased in glass.",
    req: [{ id: "lightbulb", count: 20 }],
    reward: { florins: 20000 }
  },
  {
    id: "cm_microchip",
    era: 5,
    sender: "Ada Lovelace",
    text: "I dream of a thinking engine. Logic etched into silicon and sealed in plastic.",
    req: [{ id: "microchip", count: 10 }],
    reward: { florins: 25000 }
  }
];