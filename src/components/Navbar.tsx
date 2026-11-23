import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_ASSETS, NAV_LINKS } from '../data/studioData';
import { BrandImage } from './BrandImage';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#DFDFD7]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="inline-flex items-center shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F5BFF] rounded-sm"
          aria-label="Splash Studio home"
        >
          <BrandImage
            src={BRAND_ASSETS.logoDark}
            alt="Splash Studio"
            fallbackVariant="logo-dark"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] leading-5 font-semibold text-[#525563] hover:text-[#2F5BFF] transition-colors duration-150 ease-out whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F5BFF] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5BFF] text-white px-5 py-2.5 font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold shrink-0 whitespace-nowrap transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            Hire me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#14161D] border border-[#DFDFD7] transition-colors duration-150 hover:border-[#2F5BFF] hover:text-[#2F5BFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#DFDFD7] bg-white px-5 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => {
            const isContact = link.href === '#contact';
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 px-2 rounded-lg font-body text-[15px] leading-5 font-semibold transition-colors ${
                  isContact
                    ? 'text-[#2F5BFF]'
                    : 'text-[#14161D] hover:text-[#2F5BFF]'
                }`}
              >
                {isContact ? 'Hire me' : link.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
