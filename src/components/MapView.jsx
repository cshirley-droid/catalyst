// src/components/MapView.jsx
import React from 'react';
import './MapView.css';
import { BIOME_RESOURCES } from '../data/biomes';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon';

export function MapView({ onHarvest, currentEra }) {
  const visibleResources = BIOME_RESOURCES.filter(res => res.era <= currentEra);
  
  // New variable to determine which fog class to apply
  let fogClass = `era-${currentEra}-fog`;
  if (currentEra >= 3) {
      fogClass = 'era-3-plus-fog';
  }

  return (
    <div className="map-container">
      {/* 1. THE BACKGROUND LAYER */}
      <div className="map-background">
        <div className="biome-label mines">MINES</div>
        <div className="biome-label coast">COAST</div>
        <div className="biome-label forest">FOREST</div>
        <div className="biome-label farm">FARM</div>
      </div>

    {/* 👇 NEW LAYER: FOG OF WAR */}
    <div className={`fog-of-war ${fogClass}`}></div>

      {/* 2. THE RESOURCE PINS LAYER */}
      {visibleResources.map((res, index) => {
        const itemDef = ITEMS[res.id];
        if (!itemDef) return null;

        return (
          <button
            key={index}
            className="resource-pin"
            style={{ left: `${res.x}%`, top: `${res.y}%` }}
            onClick={(e) => {
              // Simple "Pop" Animation
              const btn = e.target.closest('button');
              btn.classList.add('pop');
              setTimeout(() => btn.classList.remove('pop'), 200);
              
              onHarvest(res.id);
            }}
            title={`Harvest ${itemDef.name}`}
          >
            <ItemIcon icon={itemDef.icon} size="120px" />
          </button>
        );
      })}
    </div>
  );
}