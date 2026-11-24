import { NAV_LINKS } from '../data/studioData';
import { SplashLogo } from './BrandImage';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a href="#top" className="inline-flex items-center gap-4 shrink-0">
          <SplashLogo variant="light" />
        </a>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5 md:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#F8FAFC]/80 hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-body text-[12px] leading-4 tracking-[0.4px] font-medium text-[#F8FAFC]/70">
          © 2026 Splash Studio · Muzammil
        </p>
      </div>
    </footer>
  );
}
