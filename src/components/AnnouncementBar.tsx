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
        {announcement.textDesktopOnly && (
          <span className="announcement-desktop-only">{announcement.textDesktopOnly}</span>
        )}
        {announcement.highlight && (
          <span className="announcement-highlight" style={{ fontWeight: 'var(--font-bold)', marginLeft: '4px' }}>
            {announcement.highlight}
          </span>
        )}
      </span>
    </div>
  );

  const barStyles: React.CSSProperties = {
    position: 'relative',
    zIndex: 200,
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px',
    padding: '10px 48px 10px 16px',
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
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
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
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
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
            padding: 10px 40px 10px 16px !important;
            min-height: 40px !important;
          }

          .announcement-text {
            font-size: 13px !important;
          }

          .announcement-desktop-only {
            display: none !important;
          }

          .announcement-close {
            right: 8px !important;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementBar;