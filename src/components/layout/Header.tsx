import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

interface HeaderProps {
  forceScrolledStyle?: boolean;
}

const Header = ({ forceScrolledStyle = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolledStyle);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-8 md:h-[60px] md:px-6 lg:h-[70px]">
          {/* Mobile: Burger Menu */}
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            className={cn(
              'hidden items-center justify-center rounded-sm p-2 transition-colors md:hidden',
              'max-md:flex',
              isScrolled ? 'text-foreground' : 'text-white',
              'hover:bg-white/10'
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="#accueil" className="flex shrink-0 items-center">
            {logo ? (
              <img
                src={logo}
                alt={clientConfig.institutName}
                className={cn(
                  'h-10 w-auto transition-all duration-300 md:h-[30px] lg:h-10',
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-8">
            {clientConfig.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative py-2 font-body text-[15px] font-medium transition-colors',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-200',
                  'hover:after:w-full',
                  isScrolled
                    ? 'text-secondary hover:text-foreground after:bg-accent'
                    : 'text-white/90 hover:text-white after:bg-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href={clientConfig.navigation.ctaButton.href}
            className={cn(
              'hidden shrink-0 items-center justify-center rounded-sm px-6 py-2.5 font-body text-sm font-semibold tracking-wide transition-all md:inline-flex',
              isScrolled
                ? 'bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-md'
                : 'border-2 border-white text-white hover:bg-white/10'
            )}
          >
            {clientConfig.navigation.ctaButton.label}
          </a>

          {/* Mobile: Phone Icon */}
          <a
            href={`tel:${clientConfig.contact.phone.replace(/\s/g, '')}`}
            aria-label="Appeler l'institut"
            className={cn(
              'hidden items-center justify-center rounded-full p-2 transition-colors max-md:flex',
              isScrolled ? 'text-accent' : 'text-white',
              'hover:bg-white/10'
            )}
          >
            <Phone size={24} />
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/20 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[60px] z-[100] bg-background p-6 shadow-md transition-all duration-300 md:hidden',
          isMobileMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        )}
      >
        <nav className="flex flex-col gap-4">
          {clientConfig.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-border-light py-2 font-body text-base font-medium text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={clientConfig.navigation.ctaButton.href}
            onClick={closeMobileMenu}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 font-body text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:bg-accent-hover"
          >
            {clientConfig.navigation.ctaButton.label}
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
