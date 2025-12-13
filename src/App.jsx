// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { NavigationRail } from './components/NavigationRail';
import { InventoryPanel } from './components/InventoryPanel';
import { LabView } from './components/LabView';
import { MapView } from './components/MapView';
import { GuideView } from './components/GuideView';
import { MailView } from './components/MailView';
import { CatalogView } from './components/CatalogView';
import { StudyView } from './components/StudyView';
import { SystemMenu } from './components/SystemMenu'; 
import { ColophonModal } from './components/ColophonModal';
import { ITEMS } from './data/items';
import { RECIPES } from './data/recipes';
import { COMMISSIONS } from './data/commissions';
import { CATALOG_ITEMS } from './data/catalog';
import { AudioSystem } from './systems/AudioSystem';

// Fuel Heat Levels
const FUEL_POWER = {
  "wood": 1,      
  "charcoal": 2,  
  "coal": 3,      
  "coke": 3       
};

// Friendly names for hints
const FUEL_HINTS = {
  1: "Wood",
  2: "Charcoal",
  3: "Coal or Coke"
};

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

function App() {
  // --- STATE ---
  const [gameStarted, setGameStarted] = useState(false); // Splash Screen
  const [isSplashFading, setIsSplashFading] = useState(false);
  const [currentView, setCurrentView] = useState('MAP');
  const [isMuted, setIsMuted] = useState(true);
  const [showSystemMenu, setShowSystemMenu] = useState(false); 
  const [toast, setToast] = useState(null); // Toast Notification State
  const [currentEra, setCurrentEra] = useState(0); // Starts at 0 (Tutorial)
  const [florins, setFlorins] = useState(0);
  const [completedCommissions, setCompletedCommissions] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]); // Array of IDs of items bought from the Catalog
  const [studyPlacement, setStudyPlacement] = useState({});
  const [itemInCrate, setItemInCrate] = useState(null); // Holds the ID of the curio waiting to be unpacked
  const [showColophonModal, setShowColophonModal] = useState(false);
  const [godMode, setGodMode] = useState(false);

  // Inventory
  const [inventory, setInventory] = useState({
    "wood": 5, 
    "ash": 0
  });
  
  // Progress Tracking
  const [unlockedRecipes, setUnlockedRecipes] = useState([]);
  
  // Track Station Unlocks 
  const [labUpgrades, setLabUpgrades] = useState({
    RETORT: false, 
    PLANTER: false
  });

  // Crafting State
  const [activeStation, setActiveStation] = useState(null);
  const [slots, setSlots] = useState({ A: null, B: null, fuel: null, result: null });
  const [selectedSlot, setSelectedSlot] = useState(null);

  // --- EFFECTS ---

  // Sync Audio on Mount
  useEffect(() => {
    AudioSystem.setMuted(isMuted);
  }, []);

  // Splash Screen Timer
  useEffect(() => {
    if (!gameStarted && !isSplashFading) {
      const timer = setTimeout(() => {
        handleStartGame();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gameStarted, isSplashFading]); 

  // Wait for fade animation, then unmount splash screen
  useEffect(() => {
    if (isSplashFading) {
      const timer = setTimeout(() => {
        setGameStarted(true);
      }, 1000); // Wait 1 second for CSS transition
      return () => clearTimeout(timer);
    }
  }, [isSplashFading]);

  // --- ACTIONS ---

  // Toast Helper
  const showToast = (message, type = 'normal') => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleShowColophon = () => {
    setShowSystemMenu(false); // Close the System menu first
    setShowColophonModal(true);  // Open the Colophon modal
  }

  const handleStartGame = () => {
    if (!isSplashFading) {
       setIsSplashFading(true);
       AudioSystem.playSFX('click');
    }
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleHarvest = (itemId) => {
    AudioSystem.playSFX('harvest');
    setInventory(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  // Station Logic
  const handleStationClick = (stationId) => {
    setActiveStation(stationId);
    setSlots({ A: null, B: null, fuel: null, result: null });
    setSelectedSlot('A'); 
    AudioSystem.playSFX('click');
  };

  const handleCloseStation = () => {
    setActiveStation(null);
    setSlots({ A: null, B: null, fuel: null, result: null });
    setSelectedSlot(null);
  };

  const handleSlotClick = (slotKey) => {
    if (slots[slotKey]) {
      setSlots(prev => ({ ...prev, [slotKey]: null }));
      AudioSystem.playSFX('click'); 
    }
    setSelectedSlot(slotKey);
    if (!slots[slotKey]) {
      AudioSystem.playSFX('click');
    }
  };

  const handleInventoryClick = (itemId) => {
    if (!activeStation) return;
    if (!selectedSlot) return; 

    const itemObj = ITEMS[itemId];
    if (!itemObj) return;
    if ((inventory[itemId] || 0) <= 0) return;

    setSlots(prev => ({
      ...prev,
      [selectedSlot]: itemObj
    }));

    AudioSystem.playSFX('click');
    
    // Auto-Advance Logic
    if (selectedSlot === 'A') setSelectedSlot('B');
    else if (selectedSlot === 'B') setSelectedSlot('fuel');
    else if (selectedSlot === 'fuel') setSelectedSlot(null); 
  };

  // Crafting Logic
  const handleProcess = () => {
    const inputIds = [slots.A?.id, slots.B?.id].filter(Boolean);
    let batchMultiplier = 1; 
    
    // 1. Exact Recipe Check
    let recipe = RECIPES.find(r => {
      if (!r || !r.inputs) return false;
      if (r.station !== activeStation) return false;
      if (r.inputs.length !== inputIds.length) return false;
      
      const recipeInputs = r.inputs.map(i => i.id).sort();
      const playerInputs = [...inputIds].sort();
      return JSON.stringify(recipeInputs) === JSON.stringify(playerInputs);
    });

    // 2. Double Batch Check
    if (!recipe && inputIds.length === 2 && inputIds[0] === inputIds[1]) {
      const singleItemId = inputIds[0];
      recipe = RECIPES.find(r => {
        if (r.station !== activeStation) return false;
        return r.inputs.length === 1 && r.inputs[0].id === singleItemId;
      });
      if (recipe) batchMultiplier = 2;
    }

    // 3. Validate Recipe
    if (!recipe) {
      showToast("Reaction Failed: No recipe matches these ingredients.");
      AudioSystem.playSFX('error');
      return;
    }

    // 4. Validate Stock
    for (const id of inputIds) {
      if ((inventory[id] || 0) <= 0) {
        showToast(`Reaction Failed: You are out of ingredients!`);
        AudioSystem.playSFX('error');
        return;
      }
    }

    // 5. Validate Fuel
    if (recipe.heatLevel > 0) {
      const fuelItem = slots.fuel;
      if (!fuelItem) {
        showToast("Reaction Failed: This process requires fuel!");
        return;
      }
      
      const currentHeat = FUEL_POWER[fuelItem.id] || 0;
      if (currentHeat < recipe.heatLevel) {
        const requiredFuel = FUEL_HINTS[recipe.heatLevel];
        showToast(`Not hot enough! Try using ${requiredFuel}.`);
        return;
      }

      if ((inventory[fuelItem.id] || 0) <= 0) {
        showToast("Reaction Failed: Out of fuel!");
        return;
      }
      
      const ingredientCount = inputIds.filter(id => id === fuelItem.id).length;
      const fuelCost = 1; 
      const totalNeeded = ingredientCount + fuelCost;
      
      if ((inventory[fuelItem.id] || 0) < totalNeeded) {
         showToast(`Reaction Failed: Not enough ${fuelItem.name} for both input and fuel!`);
         return;
      }
    }

    // 6. Execute
    const newInventory = { ...inventory };
    
    inputIds.forEach(id => {
      newInventory[id] = Math.max(0, newInventory[id] - 1);
    });
    
    if (recipe.heatLevel > 0 && slots.fuel) {
      newInventory[slots.fuel.id] = Math.max(0, newInventory[slots.fuel.id] - 1);
    }
    
    const productID = recipe.output;
    const yieldCount = recipe.yield || 1; 
    
    newInventory[productID] = (newInventory[productID] || 0) + (yieldCount * batchMultiplier);

    setInventory(newInventory);
    
    setSlots(prev => {
      const nextSlots = { ...prev, result: ITEMS[productID] };
      if (prev.A && newInventory[prev.A.id] <= 0) nextSlots.A = null;
      if (prev.B && newInventory[prev.B.id] <= 0) nextSlots.B = null;
      if (prev.fuel && newInventory[prev.fuel.id] <= 0) nextSlots.fuel = null;
      return nextSlots;
    });
    
    AudioSystem.playSFX('success');
    
    if (!unlockedRecipes.includes(recipe.id)) {
      setUnlockedRecipes(prev => [...prev, recipe.id]);
    }
  }; 
  
  // Era Helper
  const checkEraProgression = (updatedCompletedList) => {
    const eraCommissions = COMMISSIONS.filter(c => c.era === currentEra);
    const allDone = eraCommissions.every(c => updatedCompletedList.includes(c.id));
    
    if (allDone) {
      const nextEra = currentEra + 1;
      setCurrentEra(nextEra);
      
      if (nextEra > 5) {
        showToast("ALL ERAS COMPLETE! YOU HAVE MASTERED NATURE.");
      } else {
        showToast(`ERA ${nextEra} UNLOCKED! New letters arrived.`);
        AudioSystem.playSFX('success_long'); 
      }
    }
  };

  const handleCompleteCommission = (commissionId) => {
    const comm = COMMISSIONS.find(c => c.id === commissionId);
    if (!comm) {
      console.error("Commission not found:", commissionId);
      return;
    }

    for (const r of comm.req) {
      if ((inventory[r.id] || 0) < r.count) {
        showToast("Insufficient items.");
        AudioSystem.playSFX('error');
        return;
      }
    }

    const newInv = { ...inventory };
    comm.req.forEach(r => {
      newInv[r.id] -= r.count;
    });
    setInventory(newInv);

    setFlorins(prev => prev + comm.reward.florins);
    
    const newCompleted = [...completedCommissions, commissionId];
    setCompletedCommissions(newCompleted);
    
    showToast(`Order Delivered! Earned ${comm.reward.florins} Florins.`);
    AudioSystem.playSFX('success');
    
    checkEraProgression(newCompleted);
  };

  // --- GOD MODE & KONAMI CODE ---

  // Must be defined BEFORE the useEffect that calls it.
  const handleGodMode = () => {
    setFlorins(10000); 
    setCurrentEra(5);

    const godInventory = {};
    Object.keys(ITEMS).forEach(itemId => {
      godInventory[itemId] = 999;
    });
    setInventory(godInventory);

    showToast("God Mode Activated: 10,000 ƒ and full inventory granted.", 'warning');
    AudioSystem.playSFX('success'); 
    setGodMode(true);
  };
  
  const [konamiProgress, setKonamiProgress] = useState(0); 

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key; 
      
      setKonamiProgress(prevProgress => {
        if (key === KONAMI_CODE[prevProgress]) {
          const nextProgress = prevProgress + 1;
          if (nextProgress === KONAMI_CODE.length) {
            handleGodMode(); 
            return 0; 
          }
          return nextProgress;
        } else {
          if (key === KONAMI_CODE[0]) {
            return 1; 
          }
          return 0; 
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleGodMode]); 

  // --- CATALOG ACTIONS ---
  const handlePurchaseItem = (itemId, price) => {
    if (itemInCrate) {
      showToast("The delivery crate is currently full. Unpack your last purchase first.", 'error');
      return;
    }
    
    if (florins < price) {
      showToast("Insufficient florins for this acquisition.", 'error');
      AudioSystem.playSFX('error');
      return;
    }

    setPurchasedItems(prev => [...prev, itemId]);
    setItemInCrate(itemId); 
    setFlorins(prev => prev - price);

    const item = CATALOG_ITEMS.find(c => c.id === itemId);
    showToast(`Acquired '${item.name}'! Find the delivery crate in your Study.`, 'success');
    AudioSystem.playSFX('coin_jingle');
  };

  // --- STUDY ACTIONS ---
  const handlePlaceItem = (itemId, position, surfaceId) => {
    // 1. Verify ownership
    if (purchasedItems.includes(itemId)) {
      
      // 2. Update state (works for both new placements AND moves)
      setStudyPlacement(prev => ({
        ...prev,
        [itemId]: { x: position.x, y: position.y, surface: surfaceId }
      }));

      // 3. Optional: Only show toast on FIRST placement to avoid spamming while dragging
      if (!studyPlacement[itemId]) {
         showToast(`${CATALOG_ITEMS.find(i => i.id === itemId)?.name} placed in the Study.`);
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    if (studyPlacement[itemId]) {
      setStudyPlacement(prev => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
      showToast(`Removed item from Study.`);
    }
  };

  const handleRepairStation = (stationId) => {
    // DEFINING THE COSTS
    const repairCosts = {
      RETORT: { id: 'glass', count: 1, name: 'Glass' },
      PLANTER: { id: 'wood', count: 5, name: 'Wood' } // Costs 5 Wood to build
    };

    const cost = repairCosts[stationId];
    if (!cost) return; // Should not happen

    // Check Inventory
    if ((inventory[cost.id] || 0) < cost.count) {
      showToast(`Construction Failed: You need ${cost.count} ${cost.name} to build this.`);
      AudioSystem.playSFX('error');
      return;
    }
    
    // Deduct Cost and Upgrade
    setInventory(prev => ({ 
      ...prev, 
      [cost.id]: prev[cost.id] - cost.count 
    }));
    
    setLabUpgrades(prev => ({ ...prev, [stationId]: true }));
    
    // Reset station UI
    setSlots({ A: null, B: null, fuel: null, result: null });
    
    showToast(`${stationId === 'PLANTER' ? 'Planter Built' : 'Retort Repaired'}!`);
    AudioSystem.playSFX('success');
  };

  // Save System
  const handleExportSave = () => {
    const saveData = {
      version: "1.3",
      timestamp: Date.now(),
      inventory,
      unlockedRecipes,
      labUpgrades, 
      currentEra,
      florins,
      completedCommissions,
      purchasedItems,
      studyPlacement
    };

    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `catalyst_save_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowSystemMenu(false);
  };

  const handleImportSave = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.inventory && data.unlockedRecipes) {
          setInventory(data.inventory);
          setUnlockedRecipes(data.unlockedRecipes);
          setLabUpgrades(data.labUpgrades || { RETORT: false }); 

          setCurrentEra(data.currentEra || 0);
          setFlorins(data.florins || 0);
          setCompletedCommissions(data.completedCommissions || []);
          setPurchasedItems(data.purchasedItems || []);
          setStudyPlacement(data.studyPlacement || {});

          showToast("Archive retrieved successfully.");
          setShowSystemMenu(false);
        } else {
          showToast("Error: Invalid archive format.");
        }
      } catch (err) {
        showToast("Error reading file.");
      }
    };
    reader.readAsText(file);
  };

  const handleHardReset = () => {
    setInventory({ "wood": 5 });
    setUnlockedRecipes([]);
    setLabUpgrades({ RETORT: false });
    setFlorins(0); 
    setCompletedCommissions([]);
    setPurchasedItems([]); 
    setStudyPlacement({});
    setCurrentEra(0);
    setItemInCrate(null);
    setCurrentView('MAP');
    setShowSystemMenu(false);
    showToast("Simulation Reset.");
  };

// src/App.jsx

// --- RENDER HELPERS ---
const renderStageContent = () => {
  switch(currentView) {
    case 'MAP':
      return (
        <MapView 
          onHarvest={handleHarvest}
          // 👇 A2: ADDED currentEra PROP
          currentEra={currentEra} 
        />
      );
    case 'LAB':
      return (
        <LabView 
          onSelectStation={handleStationClick} 
          activeStation={activeStation}
          slots={slots}
          selectedSlot={selectedSlot}
          onSlotClick={handleSlotClick}
          onProcess={handleProcess}
          canProcess={!!(slots.A || slots.B)}
          outputPreview={slots.result}
          onCloseStation={handleCloseStation}
          labUpgrades={labUpgrades}
          onRepair={handleRepairStation}
          currentEra={currentEra}
        />
      );
    case 'GUIDE':
      return <GuideView unlockedRecipes={unlockedRecipes} />;
    case 'MAIL':
      return (
        <MailView 
          currentEra={currentEra}
          inventory={inventory}
          completedCommissions={completedCommissions}
          onComplete={handleCompleteCommission}
          // 👇 A4: MAIL/COMMISSIONS VIEW ALREADY HAS IT
        />
      );
    case 'CATALOG':
      return (
        <CatalogView
          florins={florins}
          purchasedItems={purchasedItems}
          onPurchaseItem={handlePurchaseItem}
          // 👇 A3: ADDED currentEra PROP
          currentEra={currentEra}
        />
      );
    case 'STUDY':
      return (
        <StudyView
          purchasedItems={purchasedItems}
          studyPlacement={studyPlacement}
          onPlaceItem={handlePlaceItem}
          onRemoveItem={handleRemoveItem}
          itemInCrate={itemInCrate}     // Pass crate state
          setItemInCrate={setItemInCrate} // Pass crate setter
        />
      );
    default:
      return <div>Error</div>;
  }
};

  // --- SPLASH SCREEN RENDER ---
  if (!gameStarted) {
    return (
      <div 
        className={`splash-screen stone-texture ${isSplashFading ? 'fade-out' : ''}`} 
        onClick={handleStartGame}
      >
        <div className="splash-content">
          <h1 className="splash-title">CATALYST</h1>
          <p className="splash-subtitle">Encyclopedia Naturalis</p>
          <button className="sys-btn splash-btn">
            INITIALIZING...
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">

    {godMode && (
        <div className="debug-era-controls">
          <span style={{ color: '#00ff00', alignSelf: 'center' }}>DEBUG ERA:</span>
          {[0, 1, 2, 3, 4, 5].map((era) => (
            <button 
              key={era}
              className={`debug-era-btn ${currentEra === era ? 'active' : ''}`}
              onClick={() => {
                setCurrentEra(era);
                showToast(`Debug: Warped to Era ${era}`);
              }}
            >
              {era}
            </button>
          ))}
        </div>
      )}

      <NavigationRail 
        currentView={currentView} 
        onChangeView={handleViewChange}
        isMuted={isMuted}
        onToggleMute={() => {
          const newMuted = !isMuted;
          setIsMuted(newMuted);
          AudioSystem.setMuted(newMuted); 
        }}
        onOpenSystem={() => setShowSystemMenu(true)} 
      />

      <div className="main-stage">
        {renderStageContent()}
      </div>

      <InventoryPanel 
        inventory={inventory} 
        onSelectItem={handleInventoryClick} 
        florins={florins} 
      />

      {showSystemMenu && (
        <SystemMenu 
          onClose={() => setShowSystemMenu(false)}
          onExport={handleExportSave}
          onImport={handleImportSave}
          onReset={handleHardReset}
          onShowColophon={handleShowColophon}
        />
      )}

      {/* COLOPHON MODAL - Conditionally rendered */}
      {showColophonModal && (
        <ColophonModal
          onClose={() => setShowColophonModal(false)}
        />
      )}

      {toast && (
        <div className="toast-notification">
          {toast}
        </div>
      )}

    </div>
  );
}

export default App;