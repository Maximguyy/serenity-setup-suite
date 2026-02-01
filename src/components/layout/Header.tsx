import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

interface HeaderProps {
  forceScrolledStyle?: boolean;
  onBookingClick?: () => void;
  announcementBarVisible?: boolean;
}

const Header = ({ forceScrolledStyle = false, onBookingClick, announcementBarVisible = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolledStyle);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
  const [isMobilePrestationsOpen, setIsMobilePrestationsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const { services } = clientConfig;

  useEffect(() => {
    if (forceScrolledStyle) {
      setIsScrolled(true);
      return;
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolledStyle]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobilePrestationsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-prestations-dropdown]')) {
        setIsPrestationsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePrestationsOpen(false);
  };

  // Helper to get correct href for navigation links
  const getNavigationHref = (href: string) => {
    if (href.startsWith('/')) return href;
    if (href.startsWith('#') && !isHomePage) return `/${href}`;
    return href;
  };

  // Check if a link is the Prestations link
  const isPrestationsLink = (href: string) => href === '#prestations';

  return (
    <>
      {/* Header Gradient Overlay */}
      {!isScrolled && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[180px]"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
      )}

      <header
        className={cn(
          'left-0 right-0 top-0 z-[100] transition-all duration-300',
          isScrolled
            ? 'fixed bg-background/95 shadow-sm backdrop-blur-md'
            : 'absolute bg-transparent'
        )}
      >
        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4 lg:px-6">
          {/* Mobile/Tablet: Burger Menu */}
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            className={cn(
              'flex items-center justify-center rounded-sm p-2 transition-colors lg:hidden',
              isScrolled ? 'text-foreground' : 'text-white',
              'hover:bg-white/10'
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - centered on mobile/tablet */}
          <Link to="/#accueil" className="absolute left-1/2 flex -translate-x-1/2 shrink-0 items-center lg:relative lg:left-auto lg:translate-x-0">
            {logo ? (
              <img
                src={logo}
                alt={clientConfig.institutName}
                className={cn(
                  'h-10 w-auto transition-all duration-300',
                  isScrolled && 'invert'
                )}
              />
            ) : (
              <span
                className={cn(
                  'font-heading text-xl font-semibold transition-colors duration-300',
                  isScrolled ? 'text-foreground' : 'text-white'
                )}
              >
                {clientConfig.institutName}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {clientConfig.navigation.links.map((link) => {
              const linkClasses = cn(
                'relative py-2 font-body text-[15px] font-medium transition-colors',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-200',
                'hover:after:w-full',
                isScrolled
                  ? 'text-secondary hover:text-foreground after:bg-accent'
                  : 'text-white/90 hover:text-white after:bg-white'
              );

              // Prestations dropdown
              if (isPrestationsLink(link.href)) {
                return (
                  <div 
                    key={link.href} 
                    className="relative"
                    data-prestations-dropdown
                  >
                    <button
                      onClick={() => setIsPrestationsOpen(!isPrestationsOpen)}
                      className={cn(
                        linkClasses,
                        'flex items-center gap-1'
                      )}
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          'transition-transform duration-200',
                          isPrestationsOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        'absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg bg-background py-2 shadow-lg ring-1 ring-black/5 transition-all duration-200',
                        isPrestationsOpen
                          ? 'visible translate-y-0 opacity-100'
                          : 'invisible -translate-y-2 opacity-0'
                      )}
                      style={{ minWidth: '180px' }}
                    >
                      {services.categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/soins/${category.slug}`}
                          onClick={() => setIsPrestationsOpen(false)}
                          className="block px-4 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link 
                  key={link.href} 
                  to={getNavigationHref(link.href)} 
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <button
            onClick={onBookingClick}
            className={cn(
              'hidden shrink-0 items-center justify-center rounded-sm px-6 py-2.5 font-body text-sm font-semibold tracking-wide transition-all lg:inline-flex',
              isScrolled
                ? 'bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-md'
                : 'border-2 border-white text-white hover:bg-white/10'
            )}
          >
            {clientConfig.navigation.ctaButton.label}
          </button>

          {/* Mobile/Tablet: Phone Icon */}
          <a
            href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
            aria-label="Appeler l'institut"
            className={cn(
              'flex items-center justify-center rounded-full p-2 transition-colors lg:hidden',
              isScrolled ? 'text-accent' : 'text-white',
              'hover:bg-white/10'
            )}
          >
            <Phone size={24} />
          </a>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/20 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile/Tablet Menu */}
      <div
        className={cn(
          'fixed inset-x-0 z-[100] max-h-[calc(100vh-70px)] overflow-y-auto bg-background p-6 shadow-md transition-all duration-300 lg:hidden',
          // When scrolled (header is fixed), announcement bar is off-screen, so use 70px
          // When not scrolled AND announcement bar is visible, add its height (44px)
          isScrolled ? 'top-[70px]' : announcementBarVisible ? 'top-[114px]' : 'top-[70px]',
          isMobileMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        )}
      >
        <nav className="flex flex-col gap-4">
          {clientConfig.navigation.links.map((link) => {
            // Prestations expandable section
            if (isPrestationsLink(link.href)) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobilePrestationsOpen(!isMobilePrestationsOpen)}
                    className="flex w-full items-center justify-between border-b border-border-light py-2 font-body text-base font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                    {isMobilePrestationsOpen ? (
                      <ChevronUp size={20} className="text-accent" />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {/* Subcategories */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isMobilePrestationsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="flex flex-col gap-1 pl-4 pt-2">
                      {services.categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/soins/${category.slug}`}
                          onClick={closeMobileMenu}
                          className="py-2 font-body text-sm font-medium text-secondary transition-colors hover:text-accent"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={getNavigationHref(link.href)}
                onClick={closeMobileMenu}
                className="border-b border-border-light py-2 font-body text-base font-medium text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              closeMobileMenu();
              onBookingClick?.();
            }}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 font-body text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:bg-accent-hover"
          >
            {clientConfig.navigation.ctaButton.label}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
