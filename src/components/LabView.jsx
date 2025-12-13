// src/components/LabView.jsx
import React, { useState } from 'react';
import './LabView.css';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon';

// --- CONFIGURATION: REPAIR COSTS ---
// Defined outside the component to prevent errors
const REPAIR_REQ = {
  RETORT: { text: "Glass", count: 1 },
  PLANTER: { text: "Wood", count: 5 }
};

// --- CONFIGURATION: ERA BACKGROUNDS ---
const ERA_BACKGROUNDS = {
  0: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab1.png?raw=true', // Tutorial
  1: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab1.png?raw=true', // Forest
  2: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab2.png?raw=true', // Coast
  3: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab3.png?raw=true', // Mines
  4: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab4.png?raw=true', // Chemistry
  5: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab5.png?raw=true', // Electric
};

const DEFAULT_BG = ERA_BACKGROUNDS[0];

// 1. STATION DEFINITION & INFO
const STATION_BASE_INFO = {
  RETORT: {
    title: "Retort",
    desc: "A glass vessel for heating things without air. It breaks down wood into charcoal and catches the gas.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/retort_button_small.png?raw=true'
  },
  POT: {
    title: "Pot",
    desc: "A metal pot for boiling liquids. Use it to cook soup, mix soap, or evaporate water to get salt.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/pot_button_small.png?raw=true'
  },
  BOWL: {
    title: "Bowl",
    desc: "A mixing bowl for dry ingredients. Use it to mash things together or separate wheat grains from the stalks.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/bowl_button_small.png?raw=true'
  },
  VAT: {
    title: "Vat",
    desc: "A large wooden tub for fermentation. Use it to brew alcohol, make vinegar, or rot compost over time.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/vat_button_small.png?raw=true'
  },
  KILN: {
    title: "Kiln",
    desc: "A super-hot brick oven. Use it to bake bread, fire clay into pottery, or melt sand into glass.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/kiln_button_small.png?raw=true'
  },
  PLANTER: {
    title: "Planter",
    desc: "A garden bed for growing crops. Use it to plant seeds or breed new types of plants together.",
    img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/planter_button_small.png?raw=true'
  },
  
  // --- MILL/PRESS DYNAMIC STATION ---
  MILL: {
    era1: {
        title: "Mill (Grinding)",
        desc: "A heavy stone crusher. Use it to grind grain into flour.",
        img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/mill_button_small.png?raw=true',
        processName: "Grind"
    },
    era2_plus: {
        title: "Press (Force)",
        desc: "A hand-screw press used for high-force pressing. Use it to flatten wood pulp into paper, form metal, or etch microchips.",
        img: 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/hand_screw_press.png?raw=true',
        processName: "Press"
    }
  }
};

const getStationDefinition = (stationId, currentEra) => {
    if (stationId !== 'MILL') {
        return STATION_BASE_INFO[stationId];
    }
    // Logic for MILL -> PRESS transition
    const eraKey = currentEra >= 2 ? 'era2_plus' : 'era1';
    return {
        id: stationId,
        ...STATION_BASE_INFO[stationId][eraKey]
    };
};

export function LabView({ 
  onSelectStation, 
  activeStation,    
  slots,            
  selectedSlot,     
  onSlotClick,      
  onProcess,        
  canProcess,       
  outputPreview,    
  onCloseStation,
  labUpgrades,      
  onRepair,
  currentEra 
}) {
  const [hovered, setHovered] = useState(null);

  // 2. STATION POSITIONS
  const stationPositions = [
    { id: 'PLANTER', pos: 'top-left' },
    { id: 'VAT', pos: 'bottom-left' },
    { id: 'POT', pos: 'top-center' },
    { id: 'KILN', pos: 'center' },
    { id: 'RETORT', pos: 'bottom-center' },
    { id: 'BOWL', pos: 'top-right' },
    { id: 'MILL', pos: 'bottom-right' }, 
  ];
  
  const stations = stationPositions.map(s => ({
      ...s,
      ...getStationDefinition(s.id, currentEra)
  }));

  const needsFuel = ['RETORT', 'POT', 'KILN'].includes(activeStation);
  const isBroken = labUpgrades && labUpgrades[activeStation] === false;
  const bgImage = ERA_BACKGROUNDS[currentEra] || DEFAULT_BG;
  
  const getProcessButtonText = () => {
    if (activeStation === 'VAT' || activeStation === 'PLANTER') return "Wait";
    if (activeStation === 'MILL') return getStationDefinition('MILL', currentEra).processName;
    if (activeStation === 'BOWL') return slots.B ? "Mix" : "Process"; 
    return "Ignite";
  }

  const renderCraftingSlot = (slotKey, defaultLabel) => {
    const itemDef = slots[slotKey];
    const isSelected = selectedSlot === slotKey;
    const displayLabel = itemDef 
      ? itemDef.name 
      : (slotKey === 'fuel' ? "FUEL" : "INGREDIENT");
    
    return (
      <div className="craft-slot-container" onClick={() => onSlotClick(slotKey)}>
        <div className={`craft-slot ${itemDef ? 'filled' : 'empty'} ${isSelected ? 'selected' : ''}`}>
           {itemDef ? (
            <ItemIcon icon={itemDef.icon} size="40px" />
          ) : (
            <span className="craft-placeholder">{isSelected ? "Select..." : "Empty"}</span>
          )}
        </div>
        <div className="craft-label" style={{ minHeight: '1.2em' }}>
          {displayLabel}
        </div>
      </div>
    );
  };

  const activeStationDef = activeStation ? getStationDefinition(activeStation, currentEra) : null;
  const hoveredStationDef = hovered ? getStationDefinition(hovered, currentEra) : null;

  return (
    <div 
      className="lab-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out' 
      }}
    >
      {/* 1. MACHINE GRID */}
      <div className="hexagon-grid">
        {stations.map(station => {
          const stationIsBroken = labUpgrades && labUpgrades[station.id] === false;
          return (
            <div 
              key={station.id}
              className={`station-card ${station.pos} ${activeStation === station.id ? 'active' : ''} ${stationIsBroken ? 'broken' : ''}`}
              onClick={() => onSelectStation(station.id)}
              onMouseEnter={() => setHovered(station.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={station.img} alt={station.title} className="station-img" />
              <div className="station-label">
                {/* FIXED: Using standard space for split */}
                {station.title.split(' ')[0]} 
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. RIGHT PANEL */}
      <div className="lab-panel-container">
        {activeStation ? (
          <div className="crafting-interface paper-texture">
             <div className="panel-header">
                <h3>{activeStationDef.title}</h3>
                <button className="close-station-btn" onClick={onCloseStation}>X</button>
             </div>
             
             {/* DYNAMIC REPAIR UI */}
             {isBroken ? (
               <div className="crafting-body broken-state" style={{ 
                 display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '20px' 
               }}>
                  <div style={{ fontFamily: 'Crimson Text', fontStyle: 'italic', textAlign: 'center', padding: '0 20px', color: '#5a4a42', fontSize: '1.1rem' }}>
                    {activeStation === 'PLANTER' 
                      ? "This plot is overgrown." 
                      : "This equipment is damaged."}
                    <br/>
                    You must use <strong>{REPAIR_REQ[activeStation]?.text || "Glass"}</strong> to {activeStation === 'PLANTER' ? "build" : "repair"} it.
                  </div>
                  <button 
                    className="process-btn" 
                    onClick={() => onRepair(activeStation)}
                    style={{ width: 'auto', padding: '10px 30px' }}
                  >
                    {activeStation === 'PLANTER' ? "Build" : "Repair"} ({REPAIR_REQ[activeStation]?.count || 1} {REPAIR_REQ[activeStation]?.text || "Glass"})
                  </button>
               </div>
             ) : (
               <div className="crafting-body">
                  <div className="craft-row">
                    {renderCraftingSlot('A', 'Input A')}
                    {renderCraftingSlot('B', 'Input B')}
                  </div>
                  <div className="craft-row center" style={{ gap: '15px', alignItems: 'center' }}>
                     {needsFuel && renderCraftingSlot('fuel', 'Fuel')}
                     <button 
                      className={`process-btn ${canProcess ? 'active' : ''}`}
                      onClick={onProcess}
                      disabled={!canProcess}
                      style={{ marginTop: needsFuel ? '-15px' : '0' }}
                     >
                      {getProcessButtonText()} 
                     </button>
                  </div>
                  <div className="craft-row">
                     <div className="craft-slot output">
                        {outputPreview ? (
                          <ItemIcon icon={ITEMS[outputPreview.id].icon} size="60px" />
                        ) : (
                          <span className="craft-placeholder">?</span>
                        )}
                     </div>
                  </div>
                  <div className="craft-label output-text">
                      {outputPreview ? ITEMS[outputPreview.id].name : "\u00A0"}
                  </div>
               </div>
             )}
          </div>

        ) : (
          <div className={`info-interface paper-texture ${hovered ? 'visible' : ''}`}>
             {hovered ? (
               <>
                 <div className="panel-header">
                    <h3>{hoveredStationDef.title}</h3>
                 </div>
                 <div className="panel-desc">
                    {hoveredStationDef.desc}
                 </div>
                 <div className="panel-hint">
                    ACCESS TERMINAL
                 </div>
               </>
             ) : (
               <div className="panel-placeholder">
                  Select a Station...
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
}