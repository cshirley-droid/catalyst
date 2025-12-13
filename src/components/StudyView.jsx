// src/components/StudyView.jsx
import React, { useState, useRef, useEffect } from 'react';
import './StudyView.css';
import { CATALOG_ITEMS } from '../data/catalog'; 

// Study background URL
const STUDY_BACKGROUND = "https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/study2.png?raw=true";

// Image URL for the crate
const CRATE_IMAGE = 'https://cdn.jsdelivr.net/gh/cshirley-droid/catalyst@main/goods.png?raw=true'; 

// CRATE POSITION IS NOW DEFINED IN PERCENTAGES (0-100)
// 20% from left, 80% from top (relative to the container)
const CRATE_POSITION_PERCENT = { x: 20, y: 80 }; 

// Custom hook to provide a simple toast function (since it wasn't passed as a prop)
const useStudyToast = () => {
    // In a real application, you would pass the App's showToast here.
    return (message) => console.log(`[STUDY] ${message}`);
};

export function StudyView({ purchasedItems, studyPlacement, onPlaceItem, onRemoveItem, itemInCrate, setItemInCrate }) {
  
  const showToast = useStudyToast();
  const [dragState, setDragState] = useState(null); // { itemId, initialX, initialY, offset, surface }
  const containerRef = useRef(null);
  const [isUnpacking, setIsUnpacking] = useState(false);

  // --- DRAG HANDLERS ---

  const handleMouseDown = (e, itemId) => {
    e.preventDefault();
    if (e.button !== 0) return; 

    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate the offset (where the user clicked relative to the item's top-left corner)
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const surface = CATALOG_ITEMS.find(i => i.id === itemId)?.type || 'desk';

    setDragState({ 
      itemId, 
      initialX: rect.left, 
      initialY: rect.top, 
      offset: { x: offsetX, y: offsetY },
      surface
    });
  };

  const handleUnpackCrate = () => {
    if (!itemInCrate) return;
    
    setIsUnpacking(true);

    setTimeout(() => {
      const item = CATALOG_ITEMS.find(i => i.id === itemInCrate);
      
      // Use the CRATE_POSITION_PERCENT for initial placement
      const initialX = CRATE_POSITION_PERCENT.x + 5; // Move slightly right (5%)
      const initialY = CRATE_POSITION_PERCENT.y - 10; // Move slightly up (10%)

      // The onPlaceItem handler now receives and saves PERCENTAGES
      onPlaceItem(itemInCrate, { x: initialX, y: initialY }, item?.type || 'desk');
      
      setItemInCrate(null);
      setIsUnpacking(false);
      
      showToast(`'${item?.name}' revealed! Drag it into position.`);
    }, 500); // 500ms for the "wobble and fade" animation
  };

  const handleMouseMove = (e) => {
    if (!dragState || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Calculate new position relative to the container IN PIXELS for real-time visual drag
    const newX = e.clientX - containerRect.left - dragState.offset.x;
    const newY = e.clientY - containerRect.top - dragState.offset.y;

    const itemElement = document.getElementById(`curio-${dragState.itemId}`);
    if (itemElement) {
      // VISUAL drag uses pixels
      itemElement.style.left = `${newX}px`;
      itemElement.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = (e) => {
    if (!dragState || !containerRef.current) return;

    const itemElement = document.getElementById(`curio-${dragState.itemId}`);
    if (!itemElement) {
      setDragState(null);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = itemElement.getBoundingClientRect();
    
    // Calculate the final X/Y position relative to the Study Container (in Pixels)
    const finalX_px = itemRect.left - containerRect.left;
    const finalY_px = itemRect.top - containerRect.top;
    
    // CRITICAL: CONVERT PIXELS TO PERCENTAGES FOR STORAGE
    const finalX_percent = (finalX_px / containerRect.width) * 100;
    const finalY_percent = (finalY_px / containerRect.height) * 100;
    
    // 1. SAVE the PERCENTAGES to global state
    onPlaceItem(dragState.itemId, { x: finalX_percent, y: finalY_percent }, dragState.surface);

    // 2. Reset local drag state
    setDragState(null);
  };

  // Attach/Detach global event listeners for drag motion
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState, showToast]); 

  // --- Render Functions ---

  const renderCurioIcon = (itemId) => {
    const item = CATALOG_ITEMS.find(i => i.id === itemId);
    if (!item) return null;

    const placement = studyPlacement[itemId];
    const isPlaced = !!placement;
    
    // Position logic
    const x = isPlaced ? placement.x : -999; 
    const y = isPlaced ? placement.y : -999;
    
    const baseStyle = {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      cursor: isPlaced ? 'grab' : 'default',
      zIndex: 10
    };

    // --- CASE A: ITEM HAS AN IMAGE (Photorealistic) ---
    if (item.img && item.img !== '') {
        // Different sizing for Wall vs Table items
        const sizeStyle = item.type === 'wall_curio' 
            ? { width: '150px' } // Wall items usually bigger/wider
            : { width: '100px' }; // Table items usually smaller

        return (
            <div 
                key={itemId}
                id={`curio-${itemId}`}
                className={`placed-curio-visual ${isPlaced ? 'placed' : 'unplaced'}`}
                style={baseStyle}
                onMouseDown={isPlaced ? (e) => handleMouseDown(e, itemId) : undefined}
                title={item.name} // Show name on hover
            >
                <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{
                        ...sizeStyle,
                        height: 'auto',
                        filter: 'drop-shadow(5px 5px 8px rgba(0,0,0,0.6))', // Strong shadow for depth
                        userSelect: 'none',
                        pointerEvents: 'none', // Allow clicks to pass through to div
                        display: 'block'
                    }} 
                />
            </div>
        );
    }

    // --- CASE B: FALLBACK (Emoji/Box) ---
    const fallbackStyle = {
      ...baseStyle,
      padding: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '2px solid #333',
      borderRadius: '8px',
    };

    let emoji = '🏺';
    if (item?.name.includes('Pyrite Sun')) emoji = '☀️';
    if (item?.name.includes('Mechanism')) emoji = '⚙️';
    if (item?.name.includes('Fossil')) emoji = '🦴';

    return (
      <div 
        key={itemId}
        id={`curio-${itemId}`}
        className={`placed-curio-visual ${isPlaced ? 'placed' : 'unplaced'}`}
        style={fallbackStyle}
        onMouseDown={isPlaced ? (e) => handleMouseDown(e, itemId) : undefined}
      >
        <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
        <span style={{ fontSize: '0.8rem', marginLeft: '5px', color: '#4b3d32', userSelect: 'none' }}>{item?.name}</span>
      </div>
    );
  };
  
  // --- JSX RENDER ---

  return (
    <div 
      className="study-container" 
      ref={containerRef} 
      // Background Image set in CSS now, but inline backup just in case
      style={{ backgroundImage: `url(${STUDY_BACKGROUND})` }}
    >
      
      {/* --- THE CRATE ELEMENT --- */}
      {itemInCrate && (
        <div 
          className={`delivery-crate ${isUnpacking ? 'unpacking' : ''}`}
          style={{ 
            left: `${CRATE_POSITION_PERCENT.x}%`, 
            top: `${CRATE_POSITION_PERCENT.y}%`, 
            position: 'absolute'
          }}
          onClick={handleUnpackCrate}
          title={`Click to unpack: ${CATALOG_ITEMS.find(i => i.id === itemInCrate)?.name}`}
        >
          <img src={CRATE_IMAGE} alt="Delivery Crate" />
          <div className="crate-label">📦 New Arrival</div>
        </div>
      )}

      {/* RENDER ALL PLACED ITEMS */}
      {purchasedItems.filter(id => id !== itemInCrate).map(renderCurioIcon)}
      
    </div>
  );
}