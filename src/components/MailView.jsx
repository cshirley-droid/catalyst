// src/components/MailView.jsx
import React from 'react';
import './MailView.css';
import { COMMISSIONS } from '../data/commissions';
import { ITEMS } from '../data/items';
import { ItemIcon } from './ItemIcon';

export function MailView({ 
  currentEra, 
  inventory, 
  completedCommissions, 
  onComplete 
}) {
  
  // 1. Filter Logic
  // Show all commissions from current or previous eras
  const availableCommissions = COMMISSIONS.filter(c => c.era <= currentEra);
  
  // Sort: Active first, then Completed (reverse chronological order)
  availableCommissions.sort((a, b) => {
    const aDone = completedCommissions.includes(a.id);
    const bDone = completedCommissions.includes(b.id);

    // 1. Prioritize Unfulfilled Commissions
    // If a is done and b is not, b goes first (-1)
    if (aDone && !bDone) return 1; 
    // If b is done and a is not, a goes first (1)
    if (bDone && !aDone) return -1;

    // 2. Sort Completed Commissions in Reverse Order
    if (aDone && bDone) {
      // Return negative if 'a' index is greater than 'b' index.
      // Since 'completedCommissions' is an array of IDs in order of completion,
      // sorting by descending index puts the newest completed commissions first.
      const aIndex = completedCommissions.indexOf(a.id);
      const bIndex = completedCommissions.indexOf(b.id);
      return bIndex - aIndex; // Reverse sort: higher index (more recent) comes first
    }

    // 3. Keep Unfulfilled Commissions in their natural (era-based) order
    return 0;
  });

  // 2. Helper: Can we afford this?
  const checkAffordability = (reqs) => {
    return reqs.every(r => (inventory[r.id] || 0) >= r.count);
  };

  return (
    <div className="mail-container wood-texture">
      <div className="mail-header" style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '2px solid #8b4444',
        paddingBottom: '10px',
        marginBottom: '10px',
      }}>
        <h2>COMMISSIONS</h2>
        <div className="mail-subtitle" style={{
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: '#d4af37' // Use the florin gold color here
        }}>
          ERA: {currentEra}
        </div>
      </div>

      <div className="letters-grid">
        {availableCommissions.map(comm => {
          const isCompleted = completedCommissions.includes(comm.id);
          const canAfford = checkAffordability(comm.req);
          
          return (
            <div key={comm.id} className={`letter-card paper-texture ${isCompleted ? 'completed' : ''}`}>
              
              {/* STAMP */}
              {isCompleted && <div className="stamp-seal">PAID</div>}

              <div className="letter-header">
                <span className="letter-sender">{comm.sender}</span>
                <span className="letter-reward">{comm.reward.florins} ƒ</span>
              </div>

              <div className="letter-body">
                "{comm.text}"
              </div>

              {/* Conditional Rendering for Requirements */}
              {!isCompleted ? (
                // --- PENDING COMMISSION: Show progress tracker and item counter ---
                <div className="letter-requirements">
                  {comm.req.map(r => {
                    const item = ITEMS[r.id];
                    const currentCount = inventory[r.id] || 0;
                    const isEnough = currentCount >= r.count;
                    
                    return (
                      <div key={r.id} className="req-item">
                        <ItemIcon icon={item.icon} size="30px" />
                        <span 
                          className={`req-text ${isEnough ? 'green' : 'red'}`}
                          style={{ fontFamily: "'Crimson Text', serif", fontWeight: 'bold' }} // <--- PASTE THIS STYLE HERE
                        >
                          {currentCount} / {r.count} {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // --- COMPLETED COMMISSION: Show a clean fulfillment record ---
                <div className="letter-requirements" style={{opacity: 0.6, fontStyle: 'italic'}}>
                  Order fulfilled. Delivered:
                  <div style={{marginTop: '5px'}}>
                    {comm.req.map(r => (
                      <span key={r.id} style={{marginRight: '15px', fontWeight: 'bold'}}>{r.count}x {ITEMS[r.id].name}</span>
                    ))}
                  </div>
                </div>
              )}

              {!isCompleted && (
                <button 
                  className={`sys-btn deliver-btn ${canAfford ? 'active' : ''}`}
                  disabled={!canAfford}
                  onClick={() => onComplete(comm.id)}
                >
                  {canAfford ? "DELIVER ORDER" : "INSUFFICIENT STOCK"}
                </button>
              )}
            </div>
          );
        })}
        
        {availableCommissions.length === 0 && (
          <div className="empty-mail">
            No letters have arrived yet.
          </div>
        )}
      </div>
    </div>
  );
}