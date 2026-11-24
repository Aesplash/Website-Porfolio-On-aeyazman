import { useMemo, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  PORTFOLIO_FILTERS,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/studioData';
import { BrandImage } from './BrandImage';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const sectionEase = [0.22, 1, 0.36, 1] as const;

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [hasFiltered, setHasFiltered] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 border-t border-[#DFDFD7]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: sectionEase }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-8 md:mb-12"
      >
        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#2F5BFF]">
            Selected Work
          </span>
          <h2 className="font-headline text-[28px] leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px] font-bold text-[#14161D] text-balance">
            Recent projects
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center gap-2 md:gap-2.5"
        >
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setHasFiltered(true);
                  setActiveFilter(filter.id);
                }}
                className={`inline-flex items-center justify-center rounded-full px-3.5 md:px-4 py-2 font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF] cursor-pointer ${
                  isActive
                    ? 'bg-[#2F5BFF] text-white'
                    : 'bg-white text-[#525563] border border-[#DFDFD7] hover:border-[#2F5BFF] hover:text-[#2F5BFF]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-[24px] bg-white border border-[#DFDFD7] p-10 text-center">
          <p className="font-body text-[15px] text-[#525563]">
            No projects found in this category yet.
          </p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={hasFiltered ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.14 } }}
            transition={{ duration: 0.25, ease: sectionEase }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch"
          >
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={hasFiltered ? { opacity: 1, y: 0, scale: 1 } : undefined}
                whileInView={hasFiltered ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.42,
                  delay: Math.min(index * 0.06, 0.24),
                  ease: sectionEase,
                }}
                whileHover={{ y: -4, transition: { duration: 0.18, ease: sectionEase } }}
                onClick={() => onSelectProject(project)}
                className="text-left group flex flex-col overflow-hidden rounded-[24px] bg-white border border-[#DFDFD7] portfolio-card-shadow portfolio-card-shadow-hover transition-shadow duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF] cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F4F4EF] relative">
                  <BrandImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fallbackVariant="project"
                    fallbackLabel={project.title}
                    className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                  {project.hasVideoOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 text-[#2F5BFF] flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105">
                        <Play
                          className="w-5 h-5 md:w-6 md:h-6 fill-[#2F5BFF] ml-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <div className="w-full flex items-center justify-between gap-3 md:gap-4 p-5 md:p-7">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#2F5BFF]">
                      {project.categoryLabel} · {project.metric}
                    </span>
                    <h3 className="font-headline text-[20px] leading-[26px] tracking-[-0.2px] font-bold text-[#14161D]">
                      {project.title}
                    </h3>
                    <p className="font-body text-[15px] leading-[24px] font-normal text-[#525563] text-pretty">
                      {project.summary}
                    </p>
                  </div>

                  <span className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full border border-[#DFDFD7] flex items-center justify-center text-[#14161D] group-hover:border-[#2F5BFF] group-hover:text-[#2F5BFF] transition-colors duration-150">
                    <ArrowUpRight className="w-[18px] h-[18px]" aria-hidden="true" />
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}
