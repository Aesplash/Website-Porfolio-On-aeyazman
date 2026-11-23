import { motion } from 'motion/react';
import { SERVICES, type ServiceCategory, type ServiceItem } from '../data/studioData';
import {
  Icon3DAnalytics,
  Icon3DBot,
  Icon3DCode,
  Icon3DDesign,
  Icon3DVideo,
} from './Icons3D';

interface ServicesSectionProps {
  onSelectService: (service: ServiceCategory) => void;
}

const sectionEase = [0.22, 1, 0.36, 1] as const;

function ServiceIcon3D({ icon, compact }: { icon: ServiceItem['icon']; compact?: boolean }) {
  const iconClass = compact ? 'w-10 h-10 md:w-11 md:h-11' : 'w-11 h-11 md:w-12 md:h-12';
  switch (icon) {
    case 'design':
      return <Icon3DDesign className={iconClass} />;
    case 'analytics':
      return <Icon3DAnalytics className={iconClass} />;
    case 'bot':
      return <Icon3DBot className={iconClass} />;
    case 'code':
      return <Icon3DCode className={iconClass} />;
    case 'video':
      return <Icon3DVideo className={iconClass} />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const handleCardClick = (service: ServiceCategory) => {
    onSelectService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 border-t border-[#DFDFD7]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: sectionEase }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12"
      >
        <div className="flex flex-col gap-2 md:gap-3 max-w-xl">
          <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#2F5BFF]">
            Services
          </span>
          <h2 className="font-headline text-[28px] leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px] font-bold text-[#14161D] text-balance">
            What Splash Studio builds
          </h2>
        </div>
        <p className="font-body text-[15px] leading-[24px] font-normal text-[#525563] max-w-sm text-pretty">
          End-to-end execution across product design, engineering, automation, and motion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 items-stretch">
        {SERVICES.map((service, index) => {
          const isWide = Boolean(service.spanWide);
          return (
            <motion.button
              key={service.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.42,
                delay: index * 0.06,
                ease: sectionEase,
              }}
              whileHover={{ y: -4, transition: { duration: 0.18, ease: sectionEase } }}
              onClick={() => handleCardClick(service.title)}
              className={`${
                isWide ? 'md:col-span-3 md:p-8' : 'md:col-span-2 md:p-7'
              } group text-left h-full flex flex-col justify-between gap-4 md:gap-6 rounded-[24px] bg-white border border-[#DFDFD7] p-5 portfolio-card-shadow portfolio-card-shadow-hover transition-shadow duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF] cursor-pointer`}
            >
              <div className="w-full flex items-center justify-between gap-4">
                <div
                  className={`${
                    isWide ? 'w-14 h-14 md:w-16 md:h-16' : 'w-12 h-12 md:w-14 md:h-14'
                  } rounded-[18px] bg-[#EEF2FF]/70 border border-[#DCE4FF] flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-105`}
                >
                  <ServiceIcon3D icon={service.icon} compact={!isWide} />
                </div>
                <span className="font-body text-[12px] leading-4 tracking-[0.2px] font-semibold text-[#2F5BFF] shrink-0">
                  {service.sprint}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className={`font-headline font-bold text-[#14161D] ${
                    isWide
                      ? 'text-[20px] leading-[26px] md:text-[24px] md:leading-[30px] tracking-[-0.3px]'
                      : 'text-[20px] leading-[26px] tracking-[-0.2px]'
                  }`}
                >
                  {service.title}
                </h3>
                <p className="font-body text-[15px] leading-[24px] font-normal text-[#525563] text-pretty">
                  {service.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
