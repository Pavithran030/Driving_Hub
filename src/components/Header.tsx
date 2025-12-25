import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/stories', label: t('nav.stories') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20 px-3 md:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform p-1.5">
              <lord-icon
                src="https://cdn.lordicon.com/njpauqoc.json"
                trigger="loop"
                delay="50"
                stroke="bold"
                state="loop-cycle"
                colors="primary:#ffffff,secondary:#f0f0f0"
                style={{ width: '100%', height: '100%' }}>
              </lord-icon>
            </div>
            <div>
              <h1 className="font-bold text-base md:text-lg lg:text-xl text-foreground leading-tight">{t('brand.name')}</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">{t('brand.institute')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle />
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="call" size="sm" asChild>
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <lord-icon
                      src="https://cdn.lordicon.com/nnzfcuqw.json"
                      trigger="loop"
                      delay="500"
                      stroke="bold"
                      colors="primary:#ffffff,secondary:#30e849"
                      style={{ width: '100%', height: '100%' }}>
                    </lord-icon>
                  </div>
                  <span className="hidden xl:inline">{t('nav.callNow')}</span>
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <lord-icon
                      src="https://cdn.lordicon.com/vmxvhdko.json"
                      trigger="loop"
                      delay="500"
                      stroke="bold"
                      colors="primary:#ffffff,secondary:#30e849"
                      style={{ width: '100%', height: '100%' }}>
                    </lord-icon>
                  </div>
                  <span className="hidden xl:inline">{t('nav.whatsapp')}</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-slide-up">
            <nav className="py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex gap-3 pt-4 mt-4 border-t border-border">
                <Button variant="call" size="lg" className="flex-1" asChild>
                  <a href="tel:+919876543210" className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <lord-icon
                        src="https://cdn.lordicon.com/nnzfcuqw.json"
                        trigger="loop"
                        delay="500"
                        stroke="bold"
                        colors="primary:#ffffff,secondary:#30e849"
                        style={{ width: '100%', height: '100%' }}>
                      </lord-icon>
                    </div>
                    <span>{t('nav.callNow')}</span>
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <lord-icon
                        src="https://cdn.lordicon.com/vmxvhdko.json"
                        trigger="loop"
                        delay="500"
                        stroke="bold"
                        colors="primary:#ffffff,secondary:#30e849"
                        style={{ width: '100%', height: '100%' }}>
                      </lord-icon>
                    </div>
                    <span>{t('nav.whatsapp')}</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
