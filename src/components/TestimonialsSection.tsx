import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/studioData';

const sectionEase = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 border-t border-[#DFDFD7]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: sectionEase }}
        className="flex flex-col gap-2 md:gap-3 max-w-xl mb-8 md:mb-12"
      >
        <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#2F5BFF]">
          Client Feedback
        </span>
        <h2 className="font-headline text-[28px] leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px] font-bold text-[#14161D] text-balance">
          Trusted by founders &amp; teams
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {TESTIMONIALS.map((item, index) => (
          <motion.article
            key={item.author}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.42,
              delay: index * 0.06,
              ease: sectionEase,
            }}
            className="h-full flex flex-col justify-between gap-4 md:gap-6 rounded-[24px] bg-white border border-[#DFDFD7] p-5 md:p-7 portfolio-card-shadow"
          >
            <p className="font-body text-[15px] leading-[24px] font-normal text-[#14161D] text-pretty">
              {item.quote}
            </p>
            <div className="flex flex-col gap-0.5 pt-3 md:pt-4 border-t border-[#DFDFD7]">
              <span className="font-headline text-[16px] leading-[22px] tracking-[-0.1px] font-semibold text-[#14161D]">
                {item.author}
              </span>
              <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#525563]">
                {item.role}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
