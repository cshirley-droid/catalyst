// src/components/InventoryPanel.jsx
import React, { useState } from 'react';
import './InventoryPanel.css';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon'; 

// 1. PASTE YOUR ICON LINKS HERE
const TAB_ICONS = {
  raw: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/raw.png?raw=true", 
  reagent: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/reagents.png?raw=true", 
  goods: "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/goods.png?raw=true" 
};

// Accept 'florins' as a new prop
export function InventoryPanel({ inventory, onSelectItem, florins }) {
  const [activeTab, setActiveTab] = useState('raw');

  // --- HELPER: Define what counts as a "Good" for both Tab and Tracker ---
  const isGoodsItem = (itemDef) => {
    return itemDef.type === 'product' || itemDef.type === 'goods';
  };

  // --- 1. Calculate Progress (Dynamic) ---
  const totalGoodsCount = Object.values(ITEMS).filter(isGoodsItem).length;

  const currentGoodsProgress = Object.keys(inventory).filter(id => {
    const item = ITEMS[id];
    return item && isGoodsItem(item) && inventory[id] > 0;
  }).length;

  // --- 2. Filter Items for Display ---
  const getVisibleItems = (activeTab) => {
    return Object.keys(inventory)
      .filter(itemId => {
        const itemDef = ITEMS[itemId];
        
        // Safety Check
        if (!itemDef) return false;
        
        // Filter out empty items (Zero count)
        if ((inventory[itemId] || 0) <= 0) return false;
        
        // LOGIC FIX: Map the tab names to item types
        if (activeTab === 'raw') return itemDef.type === 'raw';
        if (activeTab === 'reagent') return itemDef.type === 'reagent';
        
        // CATCH-ALL: The 'goods' tab should show 'goods' AND 'product'
        if (activeTab === 'goods') return isGoodsItem(itemDef);
        
        return false;
      })
      .map(itemId => ({ ...ITEMS[itemId], count: inventory[itemId] }))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className="inventory-container paper-texture">
      
      {/* HEADER WITH WALLET */}
      <div className="inventory-header" style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 15px',
        borderBottom: '2px solid #d4cfb8',
        backgroundColor: 'rgba(0,0,0,0.03)'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Cinzel, serif', color: '#3e3e3e' }}>
          INVENTORY
        </h2>
        
        {/* WALLET DISPLAY - HIGH CONTRAST FIX */}
        <div className="wallet-display" style={{ 
          fontFamily: "'Crimson Text', serif", 
          fontWeight: 'bold', 
          color: '#ffd700',       /* Brighter Gold */
          backgroundColor: '#2c241b', /* Dark Brown Background */
          padding: '5px 12px',
          borderRadius: '4px',
          border: '1px solid #8b4444',
          fontSize: '1.1rem',
          boxShadow: 'inset 0 0 5px rgba(0,0,0,0.8)' /* Inner shadow for depth */
        }}>
          {florins || 0} ƒ
        </div>
      </div>

      {/* TABS */}
      <div className="inventory-tabs">
        <button className={`tab-btn ${activeTab === 'raw' ? 'active' : ''}`} onClick={() => setActiveTab('raw')}>
          <ItemIcon icon={TAB_ICONS.raw} size="50px" />
          <span className="tab-label">Raw</span>
        </button>
        
        <button className={`tab-btn ${activeTab === 'reagent' ? 'active' : ''}`} onClick={() => setActiveTab('reagent')}>
          <ItemIcon icon={TAB_ICONS.reagent} size="50px" />
          <span className="tab-label">Reagents</span>
        </button>
        
        <button className={`tab-btn ${activeTab === 'goods' ? 'active' : ''}`} onClick={() => setActiveTab('goods')}>
          <ItemIcon icon={TAB_ICONS.goods} size="50px" />
          <span className="tab-label">Goods</span>
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="inventory-grid">
        {getVisibleItems(activeTab).map(item => (
          <div key={item.id} className="item-card" onClick={() => onSelectItem(item.id)} title={item.desc}>
            <div className="item-icon-wrapper">
            <ItemIcon icon={item.icon} />
            </div>
            <span className="item-name">{item.name}</span>
            <span className="item-badge">{item.count}</span>
          </div>
        ))}
        
        {getVisibleItems(activeTab).length === 0 && (
          <div style={{gridColumn: '1/-1', textAlign: 'center', opacity: 0.5, padding: 20}}>
            Empty
          </div>
        )}
      </div>
      
    </div>
  );
}