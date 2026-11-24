import { useState, type FormEvent } from 'react';
import {
  Briefcase,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Send,
  Store,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  SCOPER_SERVICES,
  SCOPER_TIMELINES,
  type ServiceCategory,
  type TimelineOption,
} from '../data/studioData';

const sectionEase = [0.22, 1, 0.36, 1] as const;

interface ContactSectionProps {
  selectedService: ServiceCategory;
  onChangeService: (service: ServiceCategory) => void;
  selectedTimeline: TimelineOption;
  onChangeTimeline: (timeline: TimelineOption) => void;
  referenceProject: string | null;
  onClearReference: () => void;
}

export function ContactSection({
  selectedService,
  onChangeService,
  selectedTimeline,
  onChangeTimeline,
  referenceProject,
  onClearReference,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedBrief, setSubmittedBrief] = useState<{
    name: string;
    email: string;
    service: ServiceCategory;
    timeline: TimelineOption;
  } | null>(null);

  const briefMessage = referenceProject
    ? `Hi Muzammil, I'd like to scope a ${selectedService} sprint (similar to ${referenceProject}) on an ${selectedTimeline} timeline with Splash Studio.`
    : `Hi Muzammil, I'd like to scope a ${selectedService} sprint on an ${selectedTimeline} timeline with Splash Studio.`;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(briefMessage)}`;
  const emailHref = `mailto:muzammil@splashstudio.co?subject=${encodeURIComponent(
    `Splash Studio — ${selectedService}`
  )}&body=${encodeURIComponent(briefMessage)}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setFormError('Please enter your name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError(null);
    setSubmittedBrief({
      name: trimmedName,
      email: trimmedEmail,
      service: selectedService,
      timeline: selectedTimeline,
    });
    setName('');
    setEmail('');
    setNotes('');
  };

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-6 md:pt-10 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.48, ease: sectionEase }}
        className="rounded-[24px] bg-white border border-[#DFDFD7] p-6 md:p-12 portfolio-card-shadow flex flex-col gap-6 md:gap-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, delay: 0.05, ease: sectionEase }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6"
        >
          <div className="flex flex-col gap-2 md:gap-3 max-w-lg">
            <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#2F5BFF]">
              30-Second Project Scoper
            </span>
            <h2 className="font-headline text-[28px] leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px] font-bold text-[#14161D] text-balance">
              Ready to build with Splash Studio?
            </h2>
            <p className="font-body text-[15px] leading-[24px] font-normal text-[#525563] text-pretty">
              Pick what you need below to pre-fill a brief, or message me directly. I reply
              within a few hours.
            </p>
          </div>

          {referenceProject && (
            <div className="flex items-center gap-3 text-[13px] text-[#525563]">
              <span>
                Inspired by <strong className="text-[#14161D]">{referenceProject}</strong>
              </span>
              <button
                type="button"
                onClick={onClearReference}
                className="text-[#2F5BFF] font-semibold hover:underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-4 md:p-6 rounded-[18px] bg-[#F4F4EF] border border-[#DFDFD7]">
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
            <div className="flex flex-col gap-2.5">
              <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#14161D]">
                1. Select service focus
              </span>
              <div className="flex flex-wrap gap-2">
                {SCOPER_SERVICES.map((service) => {
                  const isActive = selectedService === service;
                  return (
                    <button
                      key={service}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => onChangeService(service)}
                      className={`rounded-full px-3.5 md:px-4 py-1.5 md:py-2 font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF] ${
                        isActive
                          ? 'bg-[#2F5BFF] text-white'
                          : 'bg-white text-[#525563] border border-[#DFDFD7] hover:border-[#2F5BFF] hover:text-[#2F5BFF]'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold text-[#14161D]">
                2. Target timeline
              </span>
              <div className="flex flex-wrap gap-2">
                {SCOPER_TIMELINES.map((timeline) => {
                  const isActive = selectedTimeline === timeline;
                  return (
                    <button
                      key={timeline}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => onChangeTimeline(timeline)}
                      className={`rounded-full px-3.5 md:px-4 py-1.5 md:py-2 font-body text-[13px] leading-[18px] tracking-[0.1px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF] ${
                        isActive
                          ? 'bg-[#2F5BFF] text-white'
                          : 'bg-white text-[#525563] border border-[#DFDFD7] hover:border-[#2F5BFF] hover:text-[#2F5BFF]'
                      }`}
                    >
                      {timeline}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4 rounded-[14px] bg-white border border-[#DFDFD7] p-4 md:p-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-body text-[12px] leading-4 tracking-[0.4px] font-semibold text-[#2F5BFF]">
                  Recommended brief
                </span>
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#525563] hover:text-[#2F5BFF] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2F5BFF]" aria-hidden="true" />
                      <span className="text-[#2F5BFF]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-body text-[15px] leading-[24px] text-[#14161D] text-pretty">
                &ldquo;{briefMessage}&rdquo;
              </p>
            </div>
            <span className="font-body text-[12px] leading-4 text-[#525563]">
              Pre-filled automatically when you click WhatsApp, Email, or Send Brief below.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 md:gap-3.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2F5BFF] text-white px-6 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            href={emailHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#14161D] border border-[#DFDFD7] px-6 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-all duration-150 ease-out hover:border-[#2F5BFF] hover:text-[#2F5BFF] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <Mail className="w-[18px] h-[18px] text-[#2F5BFF]" aria-hidden="true" />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#14161D] border border-[#DFDFD7] px-6 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-all duration-150 ease-out hover:border-[#2F5BFF] hover:text-[#2F5BFF] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <Briefcase className="w-[18px] h-[18px] text-[#2F5BFF]" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#14161D] border border-[#DFDFD7] px-6 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-all duration-150 ease-out hover:border-[#2F5BFF] hover:text-[#2F5BFF] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <Store className="w-[18px] h-[18px] text-[#2F5BFF]" aria-hidden="true" />
            <span>Fiverr</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setShowInquiryForm((prev) => !prev);
              setSubmittedBrief(null);
            }}
            aria-expanded={showInquiryForm}
            className="sm:ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#EEF2FF] text-[#002388] px-5 py-3.5 font-body text-[15px] leading-5 font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#2F5BFF] hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>{showInquiryForm ? 'Hide inquiry form' : 'Send brief on site'}</span>
          </button>
        </div>

        {showInquiryForm && (
          <div className="pt-6 border-t border-[#DFDFD7]">
            {submittedBrief ? (
              <div className="rounded-[18px] bg-[#EEF2FF] border border-[#2F5BFF]/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-headline text-[18px] font-bold text-[#002388]">
                    Brief received — thank you, {submittedBrief.name}.
                  </span>
                  <p className="font-body text-[15px] text-[#002388]/80">
                    Muzammil will review your {submittedBrief.service} ({submittedBrief.timeline})
                    scope and reply to {submittedBrief.email} within a few hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedBrief(null)}
                  className="rounded-full bg-white text-[#002388] border border-[#DFDFD7] px-4 py-2 text-[13px] font-semibold whitespace-nowrap shrink-0 cursor-pointer hover:border-[#2F5BFF]"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-name" className="font-body text-[13px] font-semibold text-[#14161D]">
                    Your name
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full rounded-[10px] border border-[#DFDFD7] bg-[#FAFAF7] px-4 py-2.5 font-body text-[15px] text-[#14161D] placeholder:text-[#737685] focus:border-[#2F5BFF] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-email" className="font-body text-[13px] font-semibold text-[#14161D]">
                    Work email
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full rounded-[10px] border border-[#DFDFD7] bg-[#FAFAF7] px-4 py-2.5 font-body text-[15px] text-[#14161D] placeholder:text-[#737685] focus:border-[#2F5BFF] focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="inquiry-notes" className="font-body text-[13px] font-semibold text-[#14161D]">
                    Additional context (optional)
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={briefMessage}
                    className="w-full rounded-[10px] border border-[#DFDFD7] bg-[#FAFAF7] px-4 py-2.5 font-body text-[15px] text-[#14161D] placeholder:text-[#737685] focus:border-[#2F5BFF] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="md:col-span-2 font-body text-[13px] font-semibold text-[#BA1A1A]">
                    {formError}
                  </p>
                )}

                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <span className="font-body text-[13px] text-[#525563]">
                    Scope: <strong className="text-[#14161D]">{selectedService}</strong> · {selectedTimeline}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5BFF] text-white px-6 py-3 font-body text-[15px] font-semibold whitespace-nowrap shrink-0 hover:-translate-y-0.5 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5BFF]"
                  >
                    Submit brief
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
