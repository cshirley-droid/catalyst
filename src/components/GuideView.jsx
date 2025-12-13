// src/components/GuideView.jsx
import React from 'react';
import './GuideView.css';
import { RECIPES } from '../data/recipes';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon'; 

export function GuideView({ unlockedRecipes }) {
  // Filter valid recipes first to avoid counting broken/legacy ones
  const validRecipes = unlockedRecipes
    .map(id => RECIPES.find(r => r.id === id))
    .filter(r => r && ITEMS[r.output]); // Ensure recipe AND output item exist

  return (
    <div className="guide-container leather-texture">
      <div className="guide-book paper-texture">
        <div className="guide-header">
          <h2>Field Guide</h2>
          <div className="guide-subtitle">
            Encyclopedia Naturalis • {validRecipes.length} Discoveries
          </div>
        </div>

        <div className="guide-content">
          {validRecipes.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: 50, fontStyle: 'italic', color: '#888' }}>
              No discoveries yet. Begin experimenting in the Lab...
            </div>
          )}

          {validRecipes.map((recipe, index) => {
            const outputItem = ITEMS[recipe.output];
            
            return (
              <div key={recipe.id} className="recipe-entry unlocked">
                <div className="recipe-icon">
                  <ItemIcon icon={outputItem.icon} size="50px" />
                </div>

                <div className="recipe-details">
                  <div className="recipe-name">{outputItem.name}</div>
                  
                  {/* The Equation */}
                  <div className="recipe-equation">
                    <span className="eq-part">
                      {recipe.inputs.map(i => (ITEMS[i.id] ? ITEMS[i.id].name : i.id)).join(' + ')}
                    </span>
                    <span className="eq-arrow"> &rarr; </span>
                    <span className="eq-station">[{recipe.station}]</span>
                    <span className="eq-arrow"> &rarr; </span>
                    <span className="eq-part">{outputItem.name}</span>
                  </div>

                  {/* The Science Note */}
                  {recipe.science && (
                    <div className="recipe-science">
                      {recipe.science}
                    </div>
                  )}
                </div>

                <div className="recipe-meta">
                  Fig. {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}