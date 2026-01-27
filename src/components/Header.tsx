import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Gradient Overlay - visible only when not scrolled */}
      {!isScrolled && (
        <div
          className="header-gradient"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      )}
      <header
        className={`header ${isScrolled ? 'header--scrolled' : ''}`}
        style={{
          position: isScrolled ? 'fixed' : 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-sticky)',
          backgroundColor: isScrolled ? 'rgba(250, 250, 248, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease',
          boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div
          className="header-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 'var(--container-max-width)',
            margin: '0 auto',
            padding: '0 var(--container-padding)',
            height: '70px',
          }}
        >
          {/* Mobile: Burger Menu */}
          <button
            className="burger-menu"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              padding: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              borderRadius: 'var(--border-radius-sm)',
              cursor: 'pointer',
              transition: 'background-color var(--transition-fast), color 300ms ease',
              color: isScrolled ? 'var(--color-primary)' : '#FFFFFF',
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a 
            href="#accueil" 
            className="header-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {logo ? (
              <img
                src={logo}
                alt={clientConfig.institutName}
                style={{
                  height: '40px',
                  width: 'auto',
                  filter: isScrolled ? 'invert(1)' : 'none',
                  transition: 'filter 300ms ease',
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: isScrolled ? 'var(--color-primary)' : '#FFFFFF',
                  transition: 'color 300ms ease',
                }}
              >
                {clientConfig.institutName}
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav
            className="header-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flex: '1',
              justifyContent: 'center',
            }}
          >
            {clientConfig.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isScrolled ? 'nav-link--scrolled' : ''}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 'var(--font-medium)',
                  color: isScrolled ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'color var(--transition-fast)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href={clientConfig.navigation.ctaButton.href}
            className={`header-cta ${isScrolled ? 'header-cta--scrolled' : ''}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: '0.02em',
              color: isScrolled ? 'var(--color-text-on-dark)' : '#FFFFFF',
              backgroundColor: isScrolled ? 'var(--color-accent)' : 'transparent',
              border: isScrolled ? 'none' : '2px solid #FFFFFF',
              borderRadius: 'var(--border-radius-sm)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)',
              flexShrink: 0,
            }}
          >
            {clientConfig.navigation.ctaButton.label}
          </a>

          {/* Mobile: Phone Icon */}
          <a
            href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
            className="phone-icon"
            aria-label="Appeler l'institut"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              padding: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color var(--transition-fast), color 300ms ease',
              color: isScrolled ? 'var(--color-accent)' : '#FFFFFF',
            }}
          >
            <Phone size={24} />
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 'calc(var(--z-sticky) - 1)',
          }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}
        style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-background)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 'var(--z-sticky)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'transform 300ms ease-out, opacity 300ms ease-out, visibility 300ms',
          padding: '24px 16px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {clientConfig.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-text)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid var(--color-border-light)',
                transition: 'color var(--transition-fast)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={clientConfig.navigation.ctaButton.href}
            onClick={closeMobileMenu}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 24px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: '0.02em',
              color: 'var(--color-text-on-dark)',
              backgroundColor: 'var(--color-accent)',
              border: 'none',
              borderRadius: 'var(--border-radius-sm)',
              textDecoration: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'all var(--transition-normal)',
            }}
          >
            {clientConfig.navigation.ctaButton.label}
          </a>
        </nav>
      </div>

      {/* CSS for responsive and hover states */}
      <style>{`
        .header-container {
          height: 70px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFFFFF;
          transition: width 200ms ease, background-color 300ms ease;
        }

        .nav-link--scrolled::after {
          background-color: var(--color-accent);
        }

        .nav-link:hover {
          color: #FFFFFF !important;
        }

        .nav-link--scrolled:hover {
          color: var(--color-primary) !important;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-cta:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-1px);
        }

        .header-cta--scrolled:hover {
          background-color: var(--color-accent-hover) !important;
          box-shadow: 0 2px 8px rgba(201, 168, 124, 0.3);
        }

        .burger-menu:hover,
        .phone-icon:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .header {
            position: absolute !important;
          }

          .header--scrolled {
            position: absolute !important;
          }

          .header-container {
            height: 60px !important;
            padding: 0 16px !important;
            display: grid !important;
            grid-template-columns: 40px 1fr 40px !important;
            gap: 8px !important;
          }

          .burger-menu {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 40px !important;
            height: 40px !important;
          }

          .header-logo {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .header-logo img,
          .header-logo span {
            height: 28px !important;
            font-size: var(--text-lg) !important;
          }

          .header-nav {
            display: none !important;
          }

          .header-cta {
            display: none !important;
          }

          .phone-icon {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 40px !important;
            height: 40px !important;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .header-container {
            height: 60px !important;
            padding: 0 24px !important;
          }

          .header-logo img {
            height: 30px !important;
          }

          .header-nav {
            gap: 24px !important;
          }

          .nav-link {
            font-size: 14px !important;
          }

          .header-cta {
            padding: 8px 20px !important;
            font-size: 13px !important;
          }
        }

        /* Hide mobile menu on desktop */
        @media (min-width: 768px) {
          .mobile-menu,
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;