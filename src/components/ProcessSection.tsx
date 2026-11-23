import { motion } from 'motion/react';
import { PROCESS_STEPS, type ProcessStep } from '../data/studioData';
import {
  Icon3DDraw,
  Icon3DRocket,
  Icon3DSearch,
  Icon3DTerminal,
} from './Icons3D';

const sectionEase = [0.22, 1, 0.36, 1] as const;

function ProcessIcon3D({ icon }: { icon: ProcessStep['icon'] }) {
  const iconClass = 'w-9 h-9 md:w-10 md:h-10';
  switch (icon) {
    case 'search':
      return <Icon3DSearch className={iconClass} />;
    case 'draw':
      return <Icon3DDraw className={iconClass} />;
    case 'terminal':
      return <Icon3DTerminal className={iconClass} />;
    case 'rocket':
      return <Icon3DRocket className={iconClass} />;
  }
}

export function ProcessSection() {
  return (
    <section
      id="process"
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
          Process
        </span>
        <h2 className="font-headline text-[28px] leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px] font-bold text-[#14161D] text-balance">
          How we ship together
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
        {PROCESS_STEPS.map((item, index) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.42,
              delay: index * 0.06,
              ease: sectionEase,
            }}
            className="group h-full flex flex-col gap-3 md:gap-4 rounded-[24px] bg-white border border-[#DFDFD7] p-5 md:p-7 portfolio-card-shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="w-12 h-12 md:w-13 md:h-13 rounded-[18px] bg-[#EEF2FF]/70 border border-[#DCE4FF] flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-105">
                <ProcessIcon3D icon={item.icon} />
              </div>
              <span className="font-mono text-[12px] font-medium text-[#737685] tabular-nums">
                {item.step}
              </span>
            </div>

            <h3 className="font-headline text-[20px] leading-[26px] tracking-[-0.2px] font-bold text-[#14161D]">
              {item.title}
            </h3>

            <p className="font-body text-[15px] leading-[24px] font-normal text-[#525563] text-pretty">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
