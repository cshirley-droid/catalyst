// src/components/NavigationRail.jsx
import React from 'react';
import './NavigationRail.css';

// Helper component to style the images consistently
const NavIcon = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{
      width: '40px',   /* Increased from 32px */
      height: '40px',  /* Increased from 32px */
      objectFit: 'contain', 
      mixBlendMode: 'multiply', 
      filter: 'contrast(110%)'
    }} 
  />
);

export function NavigationRail({ currentView, onChangeView, isMuted, onToggleMute, onOpenSystem }) {
  return (
    // Added 'paper-texture' class for the background we set up earlier
    <div className="nav-rail paper-texture">
      
      {/* Top Group: Navigation */}
      <div className="nav-group">
        
        {/* MAP BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'MAP' ? 'active' : ''}`} 
          onClick={() => onChangeView('MAP')}
          title="Map"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/map_button_small.png?raw=true" 
            alt="Map" 
          />
        </button>

        {/* LAB BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'LAB' ? 'active' : ''}`} 
          onClick={() => onChangeView('LAB')}
          title="Laboratory"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/lab_button_small.png?raw=true" 
            alt="Lab" 
          />
        </button>

        {/* GUIDE BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'GUIDE' ? 'active' : ''}`} 
          onClick={() => onChangeView('GUIDE')}
          title="Field Guide"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/guide_button_small.png?raw=true" 
            alt="Guide" 
          />
          </button>

        {/* MAIL BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'MAIL' ? 'active' : ''}`} 
          onClick={() => onChangeView('MAIL')}
          title="Commissions"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/mail.png?raw=true" 
            alt="Mail" 
          />
        </button>

        {/* CATALOG BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'CATALOG' ? 'active' : ''}`} 
          onClick={() => onChangeView('CATALOG')}
          title="Catalogue of Curios"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/catalog.png?raw=true" 
            alt="Catalog" 
          />
        </button>

        {/* STUDY BUTTON */}
        <button 
          className={`nav-btn ${currentView === 'STUDY' ? 'active' : ''}`} 
          onClick={() => onChangeView('STUDY')}
          title="The Study / Wunderkammer"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/wunderkammer.png?raw=true" 
            alt="Wunderkammer ('The Study')" 
          />
        </button>
      </div>

      {/* Bottom Group: System */}
      <div className="nav-group bottom">
        
        {/* MUTE BUTTON */}
        <button 
          className="nav-btn" 
          onClick={onToggleMute}
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {/* Swaps between Singing and Sleeping bird based on state */}
          <NavIcon 
            src={isMuted 
              ? "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/unmute_button_bird_sleeping_small.png?raw=true" 
              : "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/mute_button_bird_singing_small.png?raw=true"
            } 
            alt="Mute" 
          />
        </button>
        
        {/* SYSTEM MENU BUTTON */}
        <button 
          className="nav-btn danger" 
          onClick={onOpenSystem}
          title="System Menu"
        >
          <NavIcon 
            src="https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/reset_button_ouroboros_small.png?raw=true" 
            alt="System" 
          />
        </button>
      </div>
    </div>
  );
}