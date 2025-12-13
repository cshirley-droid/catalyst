// src/components/CatalogView.jsx
import React from 'react';
import './CatalogView.css';
import { CATALOG_ITEMS } from '../data/catalog';
// import { ITEMS } from '../data/items'; // No longer needed if we aren't showing icons
// import { ItemIcon } from './ItemIcon'; // No longer needed

export function CatalogView({ florins, purchasedItems, onPurchaseItem, currentEra }) {
  
  // FILTER LOGIC:
  // Show item IF:
  // 1. Its required era is <= the player's current era
  // 2. OR if the player has already bought it (so it doesn't vanish if they somehow lose era progress)
  const visibleItems = CATALOG_ITEMS.filter(item => 
    (item.era === undefined || item.era <= currentEra) || purchasedItems.includes(item.id)
  );

  return (
    <div className="catalog-container leather-texture">
      <div className="catalog-book paper-texture">
        
        {/* Header with Pinyon Script */}
        <div className="catalog-header">
          <h1 className="catalog-title">A Catalogue of Curios</h1>
          <div className="catalog-subtitle">
             rare artifacts & oddities for the discerning scholar 
          </div>
        </div>
        
        {/* Scrollable Content Area */}
        <div className="catalog-content">
          {visibleItems.length === 0 && (
            <div className="empty-catalog">
              The merchants have nothing to offer at this time.
            </div>
          )}

          {visibleItems.map((item, index) => {
            const isPurchased = purchasedItems.includes(item.id);
            const canAfford = florins >= item.price;
            
            return (
              <div key={item.id} className={`catalog-entry ${isPurchased ? 'purchased' : ''}`}>
                
                {/* 1. Details (Name, Description, Type) */}
                <div className="catalog-details">
                  <div className="catalog-item-name">
                    {item.name}
                  </div>
                  <div className="catalog-item-desc">
                    {item.desc_catalog}
                  </div>
                </div>

                {/* 2. Action Area (Button or Stamp) */}
                <div className="catalog-action">
                  {isPurchased ? (
                    <div className="purchased-stamp">ACQUIRED</div>
                  ) : (
                    <div className="purchase-controls">
                      <span className={`price-tag ${canAfford ? 'affordable' : 'expensive'}`}>
                        {item.price} ƒ
                      </span>
                      <button
                        className="sys-btn purchase-btn"
                        disabled={!canAfford}
                        onClick={() => onPurchaseItem(item.id, item.price)}
                        title={canAfford ? "Purchase this item" : "Insufficient Florins"}
                      >
                        {canAfford ? "PURCHASE" : "LOCKED"}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}