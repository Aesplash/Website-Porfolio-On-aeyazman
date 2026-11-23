import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS, HERO_METRICS } from '../data/studioData';
import { BrandImage } from './BrandImage';

const heroEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 pt-12 md:pt-24 pb-14 md:pb-20">
      <div className="max-w-3xl flex flex-col items-start gap-5 md:gap-7">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: heroEase }}
          className="inline-flex items-center gap-2.5 md:gap-3 rounded-full bg-white border border-[#DFDFD7] pl-1.5 md:pl-2 pr-3.5 md:pr-4 py-1 md:py-1.5 shadow-sm"
        >
          <BrandImage
            src={BRAND_ASSETS.founderAvatar}
            alt="Muzammil, founder of Splash Studio"
            fallbackVariant="avatar"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
          />
          <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#14161D]">
            Muzammil · Founder of Splash Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: heroEase }}
          className="font-display text-[32px] leading-[38px] tracking-[-0.75px] md:text-[64px] md:leading-[70px] md:tracking-[-1.5px] font-extrabold text-[#14161D] text-balance min-w-0"
        >
          Hi, I&apos;m Muzammil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: heroEase }}
          className="font-body text-[15px] leading-[24px] md:text-[18px] md:leading-[28px] font-normal text-[#525563] max-w-prose text-pretty"
        >
          I lead Splash Studio, a digital agency helping founders and product teams ship
          high-converting UI/UX design, analytics dashboards, AI automations, custom web
          apps, and launch videos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: heroEase }}
          className="w-full sm:w-auto flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5BFF] text-white px-6 md:px-7 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <span>View my work</span>
            <ArrowDown className="w-[18px] h-[18px]" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#14161D] border border-[#DFDFD7] px-6 md:px-7 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ease-out hover:border-[#2F5BFF] hover:text-[#2F5BFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <span>Hire me</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: heroEase }}
          className="w-full pt-5 md:pt-8 mt-1 md:mt-2 border-t border-[#DFDFD7] grid grid-cols-3 gap-3 md:gap-6 max-w-xl"
        >
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5 md:gap-1">
              <span className="font-headline text-[20px] leading-[26px] md:text-[24px] md:leading-[30px] tracking-[-0.3px] font-bold text-[#14161D] tabular-nums">
                {metric.value}
              </span>
              <span className="font-body text-[12px] leading-[16px] md:text-[13px] md:leading-[18px] tracking-[0.1px] font-medium md:font-semibold text-[#525563]">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
