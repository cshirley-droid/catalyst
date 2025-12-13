// src/components/StationModal.jsx
import React from 'react';
import './StationModal.css';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon';

export function StationModal({ 
  stationId, stationName, slots, onSlotClick, 
  onProcess, onClose, canProcess, outputPreview,
  selectedSlot
}) {
  
  const renderSlot = (slotKey, label) => {
    // Get the item object directly from props
    const itemDef = slots[slotKey]; 
    const isSelected = selectedSlot === slotKey;

    return (
      <div className="slot-container" onClick={() => onSlotClick(slotKey)}>
        <div className={`machine-slot ${itemDef ? 'filled' : 'empty'} ${isSelected ? 'selected' : ''}`}>
          {itemDef ? (
            <ItemIcon icon={itemDef.icon} size="40px" />
          ) : (
            <span className="placeholder-text">{isSelected ? "Select..." : "Empty"}</span>
          )}
        </div>
        <div className="slot-label">{label}</div>
      </div>
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-paper">
        
        {/* CLOSE BUTTON (Inside the box now) */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-title">{stationName}</div>
          <div className="modal-subtitle">
            {selectedSlot 
              ? `Select item for ${selectedSlot === 'fuel' ? 'Fuel' : 'Input ' + selectedSlot}...` 
              : "Select a slot to fill"}
          </div>
        </div>

        <div className="modal-content">
          
          {/* LEFT: All Inputs (A, B, Fuel) in one row */}
          <div className="column reactants">
            <div className="group-label">Inputs</div>
            <div className="slots-row">
              {renderSlot('A', 'Input A')}
              {renderSlot('B', 'Input B')}
              {/* MOVED FUEL HERE for alignment */}
              {renderSlot('fuel', 'Fuel')}
            </div>
          </div>

          {/* CENTER: Process Arrow */}
          <div className="column center">
            <button 
              className={`process-btn ${canProcess ? 'active' : ''}`}
              onClick={onProcess}
              disabled={!canProcess}
              title="Ignite Reaction"
            >
              ➔
            </button>
          </div>

          {/* RIGHT: Output */}
          <div className="column output">
            <div className="group-label">Result</div>
            <div className="machine-slot output">
              {outputPreview ? (
                <ItemIcon icon={ITEMS[outputPreview.id].icon} size="70px" />
              ) : (
                <span className="placeholder-text">?</span>
              )}
            </div>
            
            {/* FIX: Always render this div so the space is reserved! */}
            <div className="output-label">
              {outputPreview ? ITEMS[outputPreview.id].name : "\u00A0"} 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}