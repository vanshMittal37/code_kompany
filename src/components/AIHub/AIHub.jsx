import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { aiCenterNode, aiCapabilities } from '../../data/ai';
import { useMediaQuery, DESKTOP_BREAK } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInView } from '../../hooks/useInView';
import styles from './AIHub.module.css';

const NODE_POSITIONS = [
  { x: 300, y: 65,  left: '300px', top: '65px' },
  { x: 495, y: 155, left: '495px', top: '155px' },
  { x: 495, y: 345, left: '495px', top: '345px' },
  { x: 300, y: 435, left: '300px', top: '435px' },
  { x: 105, y: 345, left: '105px', top: '345px' },
  { x: 105, y: 155, left: '105px', top: '155px' },
];

export default function AIHub({ className = '' }) {
  const [activeId, setActiveId] = useState(aiCapabilities[0]?.id || 'ai-chatbots');
  const [userInteracted, setUserInteracted] = useState(false);

  const isDesktop = useMediaQuery(DESKTOP_BREAK);
  const reducedMotion = useReducedMotion();
  const [hubRef, isInView] = useInView({ threshold: 0.1 });

  const activeCapability =
    aiCapabilities.find((c) => c.id === activeId) ?? aiCapabilities[0];

  // Auto-cycle every 5s if in view, no user interaction, reduced motion off
  useEffect(() => {
    if (!isInView || userInteracted || reducedMotion) return;

    const timer = setInterval(() => {
      setActiveId((prev) => {
        const idx = aiCapabilities.findIndex((c) => c.id === prev);
        const nextIdx = (idx + 1) % aiCapabilities.length;
        return aiCapabilities[nextIdx].id;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isInView, userInteracted, reducedMotion]);

  const handleSelectNode = (id) => {
    setUserInteracted(true);
    setActiveId(id);
  };

  const handleKeyDown = (e, currentIdx) => {
    let nextIdx = currentIdx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIdx = (currentIdx + 1) % aiCapabilities.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIdx = (currentIdx - 1 + aiCapabilities.length) % aiCapabilities.length;
    }
    if (nextIdx !== currentIdx) {
      handleSelectNode(aiCapabilities[nextIdx].id);
    }
  };

  return (
    <div ref={hubRef} className={`${styles.hubContainer} ${className}`}>
      {isDesktop ? (
        /* Desktop Diagram + Panel */
        <div className={styles.desktopHub}>
          {/* Left Diagram */}
          <div className={styles.diagramWrap}>
            <svg viewBox="0 0 600 500" className={styles.svgLines} aria-hidden="true">
              {/* Connection lines from center (300,250) to 6 node positions */}
              {NODE_POSITIONS.map((pos, idx) => {
                const cap = aiCapabilities[idx];
                if (!cap) return null;
                const isActive = cap.id === activeId;
                return (
                  <g key={cap.id}>
                    <line
                      x1="300"
                      y1="250"
                      x2={pos.x}
                      y2={pos.y}
                      className={`${styles.connLine} ${isActive ? styles.connActive : ''}`}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central Node */}
            <div className={styles.centerNode}>
              <span className={styles.centerPulse} />
              <span className="label">{aiCenterNode}</span>
            </div>

            {/* 6 Satellite Nodes */}
            {NODE_POSITIONS.map((pos, idx) => {
              const cap = aiCapabilities[idx];
              if (!cap) return null;
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  type="button"
                  aria-pressed={isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.nodeBtn} ${isActive ? styles.nodeBtnActive : ''}`}
                  style={{ left: pos.left, top: pos.top }}
                  onClick={() => handleSelectNode(cap.id)}
                  onFocus={() => handleSelectNode(cap.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  <span className={styles.nodeDot} />
                  <span className={styles.nodeName}>{cap.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div className={styles.detailPanel} aria-live="polite">
            <div key={activeCapability.id} className={styles.panelContent}>
              <span className="label" style={{ color: '#FF5A1F' }}>
                CAPABILITY
              </span>
              <h3 className={styles.capTitle}>{activeCapability.name}</h3>
              <p className={styles.capLine}>{activeCapability.line}</p>

              <div className={styles.flowWrapper}>
                <span className="label" style={{ marginBottom: '8px', display: 'block' }}>
                  AUTOMATED WORKFLOW FLOW
                </span>
                <div className={styles.flowChain}>
                  {activeCapability.flow.map((step, idx) => (
                    <div key={idx} className={styles.flowStep}>
                      <span className={styles.chip}>{step}</span>
                      {idx < activeCapability.flow.length - 1 && (
                        <ArrowRight size={14} className={styles.flowArrow} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile Scrollable Tabs + Vertical Flow */
        <div className={styles.mobileHub}>
          {/* Scrollable Tablist */}
          <div className={styles.tabList} role="tablist" aria-label="AI Capabilities">
            {aiCapabilities.map((cap) => {
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabChip} ${isActive ? styles.tabChipActive : ''}`}
                  onClick={() => handleSelectNode(cap.id)}
                >
                  {cap.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Detail Panel */}
          <div className={styles.mobilePanel} aria-live="polite">
            <h3 className={styles.capTitle}>{activeCapability.name}</h3>
            <p className={styles.capLine}>{activeCapability.line}</p>

            <div className={styles.mobileFlowChain}>
              {activeCapability.flow.map((step, idx) => (
                <div key={idx} className={styles.mobileFlowStep}>
                  <span className={styles.chip}>{step}</span>
                  {idx < activeCapability.flow.length - 1 && (
                    <ArrowDown size={14} className={styles.flowArrow} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
