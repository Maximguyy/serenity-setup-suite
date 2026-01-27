import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const STORAGE_KEY = 'announcement-dismissed';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const { announcement } = clientConfig;

  // Check if previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') {
      setIsDismissed(true);
    } else {
      // Delay for entrance animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  // Don't render if not enabled or dismissed
  if (!announcement.enabled || isDismissed) {
    return null;
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      localStorage.setItem(STORAGE_KEY, 'true');
    }, 200);
  };

  const content = (
    <div
      className="announcement-content"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
      }}
    >
      {/* Emoji + Text together */}
      <span
        className="announcement-text"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 'var(--font-medium)',
          color: '#FFFFFF',
          letterSpacing: '0.02em',
          lineHeight: '1.4',
        }}
      >
        {announcement.emoji && (
          <span
            className="announcement-emoji"
            aria-hidden="true"
            style={{ marginRight: '8px' }}
          >
            {announcement.emoji}
          </span>
        )}
        {announcement.text}
      </span>
    </div>
  );

  const barStyles: React.CSSProperties = {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    zIndex: 150,
    backgroundColor: '#1A1A1A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px',
    padding: '10px 32px',
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 400ms ease-out, opacity 400ms ease-out',
  };

  return (
    <>
      {announcement.link ? (
        <a
          href={announcement.link}
          className="announcement-bar"
          style={{
            ...barStyles,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          {content}
          <button
            onClick={handleDismiss}
            aria-label="Fermer l'annonce"
            className="announcement-close"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              padding: '4px',
              border: 'none',
              backgroundColor: 'transparent',
              borderRadius: 'var(--border-radius-sm)',
              cursor: 'pointer',
              color: '#FFFFFF',
              opacity: 0.7,
              transition: 'opacity var(--transition-fast), background-color var(--transition-fast)',
              marginLeft: '16px',
              flexShrink: 0,
            }}
          >
            <X size={16} />
          </button>
        </a>
      ) : (
        <div
          className="announcement-bar"
          style={barStyles}
        >
          {content}
          <button
            onClick={handleDismiss}
            aria-label="Fermer l'annonce"
            className="announcement-close"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              padding: '4px',
              border: 'none',
              backgroundColor: 'transparent',
              borderRadius: 'var(--border-radius-sm)',
              cursor: 'pointer',
              color: '#FFFFFF',
              opacity: 0.7,
              transition: 'opacity var(--transition-fast), background-color var(--transition-fast)',
              marginLeft: '16px',
              flexShrink: 0,
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* CSS for hover and responsive */}
      <style>{`
        .announcement-close:hover {
          opacity: 1 !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .announcement-bar {
            top: 60px !important;
            padding: 10px 40px 10px 16px !important;
            min-height: 40px !important;
          }

          .announcement-text {
            font-size: 13px !important;
          }

          .announcement-close {
            position: absolute !important;
            right: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
        }
      `}</style>

      {/* Spacer for fixed announcement bar */}
      {isVisible && (
        <div className="announcement-spacer" style={{ height: '44px' }} />
      )}
      <style>{`
        @media (max-width: 767px) {
          .announcement-spacer {
            height: 40px !important;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementBar;
