// src/data/biomes.js

export const BIOME_RESOURCES = [
  // ==========================================
  // ERA 3: THE MINES (Deep Earth / Industrial)
  // ==========================================
  { id: "copper_ore",     x: 37, y: 33, era: 3 }, 
  { id: "coal",           x: 27, y: 33, era: 2 }, 
  { id: "pyrite",         x: 32, y: 18, era: 3 }, // Source of Sulfur
  { id: "chromite",       x: 40, y: 15, era: 3 }, // Advanced Alloys
  { id: "tin",            x: 60, y: 20, era: 3 }, 
  { id: "latex_sap",      x: 8,  y: 77, era: 3 }, // Added for Rubber (Era 3 commission trace)

  // ==========================================
  // ERA 4: INDUSTRY (Chemicals / Late Game)
  // ==========================================
  { id: "phosphate_rock", x: 50, y: 15, era: 4 }, // Fertilizer
  { id: "wild_poppy",     x: 38, y: 43, era: 4 }, // Added for Morphine (Era 4 commission trace)

  // ==========================================
  // ERA 2: THE COAST (Enlightenment / Sand & Stone)
  // ==========================================
  // Seawater is Era 0 (Tutorial), but located here visually.
  { id: "seawater",       x: 85, y: 50, era: 0 }, 
  { id: "sand",           x: 57, y: 47, era: 2 }, 
  { id: "limestone",      x: 90, y: 30, era: 2 }, 
  { id: "kelp",           x: 80, y: 40, era: 2 }, 
  { id: "iron_ore",       x: 57, y: 33, era: 2 }, // Needed for Compass (Era 2 commission)

  // ==========================================
  // ERA 1: THE FOREST (Biology / Survival)
  // ==========================================
  { id: "water",          x: 54, y: 69, era: 1 }, 
  { id: "wood",           x: 33, y: 92, era: 1 }, 
  { id: "willow_bark",    x: 14, y: 80, era: 1 }, 
  { id: "berries",        x: 96, y: 77, era: 1 }, 
  { id: "clay",           x: 75, y: 67, era: 1 },
  
  // --- CROPS & GENETICS ---
  { id: "goatgrass",      x: 30, y: 50, era: 1 }, 
  { id: "wild_emmer",     x: 33, y: 55, era: 1 }, 
  { id: "wild_peas",      x: 95, y: 57, era: 1 }, 
  { id: "yellow_peas",    x: 88, y: 60, era: 1 }, 
  { id: "corn",           x: 42, y: 53, era: 1 }, 
  { id: "beans",          x: 90, y: 67, era: 1 },

// --- FARM: ANIMAL PEN (Added) ---
  { id: "animal_fat",     x: 64, y: 86, era: 1 }, 
  { id: "hide",           x: 74, y: 88, era: 1 }, 
  { id: "urine",          x: 84, y: 92, era: 1 }, 
  { id: "manure",         x: 94, y: 94, era: 1 },

];