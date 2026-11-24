import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjectItem, ServiceCategory } from '../data/studioData';
import { BrandImage } from './BrandImage';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (service: ServiceCategory, projectTitle: string) => void;
}

const modalEase = [0.22, 1, 0.36, 1] as const;

export function CaseStudyModal({
  project,
  onClose,
  onRequestSimilar,
}: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [project]);

  const handleRequestSimilar = () => {
    if (!project) return;
    onRequestSimilar(project.relatedService, project.title);
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-50 bg-[#0F172A]/50 backdrop-blur-[2px] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: modalEase }}
            className="w-full max-w-2xl rounded-[24px] bg-white border border-[#DFDFD7] shadow-2xl overflow-hidden my-auto"
          >
            <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 md:py-5 border-b border-[#DFDFD7]">
              <div className="flex items-center gap-2 text-[13px] leading-[18px] tracking-[0.1px] font-semibold">
                <span className="text-[#2F5BFF]">{project.categoryLabel}</span>
                <span aria-hidden="true" className="text-[#737685]">·</span>
                <span className="text-[#525563]">{project.timeline} sprint</span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="w-9 h-9 rounded-full border border-[#DFDFD7] flex items-center justify-center text-[#14161D] hover:border-[#2F5BFF] hover:text-[#2F5BFF] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
              >
                <X className="w-[18px] h-[18px]" aria-hidden="true" />
              </button>
            </div>

            <div className="p-5 md:p-7 flex flex-col gap-4 md:gap-5">
              <div className="flex flex-col gap-1">
                <h3
                  id="modal-title"
                  className="font-headline text-[20px] leading-[26px] md:text-[24px] md:leading-[30px] tracking-[-0.3px] font-bold text-[#14161D]"
                >
                  {project.title}
                </h3>
                <p className="font-body text-[14px] text-[#525563]">
                  {project.deliverables.join(' · ')}
                </p>
              </div>

              <div className="aspect-[16/9] w-full rounded-[14px] overflow-hidden bg-[#F4F4EF] border border-[#DFDFD7]">
                <BrandImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fallbackVariant="project"
                  fallbackLabel={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="p-4 rounded-[14px] bg-[#F4F4EF]">
                  <span className="font-body text-[12px] leading-4 tracking-[0.2px] font-semibold text-[#2F5BFF] block mb-1">
                    Challenge
                  </span>
                  <p className="font-body text-[15px] leading-[22px] text-[#525563]">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-[14px] bg-[#F4F4EF]">
                  <span className="font-body text-[12px] leading-4 tracking-[0.2px] font-semibold text-[#2F5BFF] block mb-1">
                    Solution
                  </span>
                  <p className="font-body text-[15px] leading-[22px] text-[#525563]">
                    {project.solution}
                  </p>
                </div>

                <div className="p-4 rounded-[14px] bg-[#EEF2FF]">
                  <span className="font-body text-[12px] leading-4 tracking-[0.2px] font-semibold text-[#002388] block mb-1">
                    Outcome
                  </span>
                  <p className="font-headline text-[16px] leading-[22px] tracking-[-0.1px] font-bold text-[#002388]">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleRequestSimilar}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5BFF] text-white px-6 py-3 font-body text-[15px] leading-5 font-semibold whitespace-nowrap transition-transform duration-150 ease-out hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
                >
                  Request a similar project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
