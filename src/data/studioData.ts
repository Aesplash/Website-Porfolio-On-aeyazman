export type ServiceCategory =
  | 'UI/UX Design'
  | 'Dashboards'
  | 'AI Automation'
  | 'Web Development'
  | 'Video Production';

export type ProjectCategory = 'all' | 'mobile' | 'dashboards' | 'websites' | 'video';

export type TimelineOption = 'ASAP (2 weeks)' | '1–2 months' | 'Ongoing retainer';

export interface ServiceItem {
  id: string;
  title: ServiceCategory;
  sprint: string;
  description: string;
  icon: 'design' | 'analytics' | 'bot' | 'code' | 'video';
  spanWide?: boolean;
}

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  metric: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  hasVideoOverlay?: boolean;
  challenge: string;
  solution: string;
  outcome: string;
  relatedService: ServiceCategory;
  deliverables: string[];
  timeline: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: 'search' | 'draw' | 'terminal' | 'rocket';
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export const BRAND_ASSETS = {
  logoDark:
    'https://lh3.googleusercontent.com/aida/ALJJyrAyQHmDEqq-CDTMNrh1UZHBTeeMYOH-783E-9mqvjid8NZByALjoAIFWEnxoDeTuCWLBrlv4ybDdrRTufb4HOtoyLCzKig_q0EZ_rZfBE3COJUaAIirbVSQRMvEiek59BYkASS5wRvPtbqMZAnJbTydJwpwbuX5d_1NCiBP-54hP7-l2jX2aX5_jb2kbe-320Fnsj9mR33RLDiKD4Pczc0pM8NpC2ihrYjyF00e0JcdmO5rHc7-vPpvCv4',
  logoLight:
    'https://lh3.googleusercontent.com/aida/ALJJyrB5JOQV8CgSvfnmoN6ghQZhl-jMGEZQj4JC5t1YgjVzP1zkMjLdbdSUXqOlKv4Ya66SMSRBlKbBPvCwes4QEUcG_1rez55b0uDxPVk2FIe0_bggD_2eJAQRBXGjyM2AQeonZpM-MZkEdjGHCpfnDVdoJGYOeeZzsV56pISArrN-gz3pf6GGqrT-Rlk7eUkKF7jbHq5DaOoxr7Jch14axNp6k5ZhF2vI5bb2f3lrQIT-vU2ZtEE08fxNJLk',
  founderAvatar:
    'https://lh3.googleusercontent.com/aida/ALJJyrAtdyskTx1_rgG9h1zhDaaMD42UiaUiAKmaMA0HpMWCsLNrjtIzUlFTUAG58c6Ugy3n6Ijq31n-ezIgXtpMV5e7UqBJrwbPlIWmGE2P2d6pQp50S_miJccGYSqa5mV4D4ubY6PgKtdO2NLs_hOBB8jGf7_Z2JqLxpVldKC_q9nJbySEEj7f7_ovdFv0nLaCwqg1cE4-7N-KvzQ3Gg4HtC6RzR7TjQf8aI3MF9qx_tOtuudo-sAA_tGqzBCV',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_METRICS = [
  { value: '45+', label: 'Products shipped' },
  { value: '5.0', label: 'Client rating' },
  { value: '2–4 wks', label: 'Typical sprint' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    sprint: '2–3 wk sprint',
    description:
      'Web and mobile product interfaces, scalable design systems, and interactive prototypes built for clarity and conversion.',
    icon: 'design',
    spanWide: true,
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    sprint: '2–4 wk sprint',
    description:
      'Data-dense SaaS control centers, executive KPI views, and real-time operational workspaces that stay effortless to scan.',
    icon: 'analytics',
    spanWide: true,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    sprint: '1–2 wks',
    description:
      'Custom LLM agents, CRM pipelines, and workflow automations that eliminate manual bottlenecks.',
    icon: 'bot',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    sprint: '2–4 wks',
    description:
      'Fast, responsive marketing sites and production web apps engineered with modern frameworks.',
    icon: 'code',
  },
  {
    id: 'video-production',
    title: 'Video Production',
    sprint: '1–2 wks',
    description:
      'Product launch films, UI motion explainers, and crisp commercial edits tailored for growth.',
    icon: 'video',
  },
];

export const PORTFOLIO_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'websites', label: 'Websites' },
  { id: 'video', label: 'Video' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pulsepay',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    metric: '+38% onboarding',
    title: 'PulsePay Banking',
    summary: 'iOS & Android fintech experience with instant transfers.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrA00bXRortZkYBTtelGZHAWGaL8nRpvxvb2GVS-NNxQy4gxI8nYmZyHmu_kuzxtI2MiIJMXl7qDdQ-W3bmwFwMz_pIl4RJzIlNUnwQ1WhopXhzwv4yGT1C0qqNJvOiB7lOOSNUhNBO8R-qGJ1OtwI8QpS4LuTZHkhvr10UdiKSgnl-H9522cyTtVaIbc1p4Z4P2WSzbze-KB6O3wS-jZPiC8uRxE3pQYKDaH-yQomiib-ASFI4v_M35yuqIvOLCZjb_SQ',
    imageAlt: 'PulsePay Mobile Banking App mockup',
    challenge: 'High drop-off during KYC verification and transfer setup.',
    solution: 'Streamlined 3-step onboarding with biometric quick-send cards.',
    outcome: '+38% completed signups in 30 days',
    relatedService: 'UI/UX Design',
    deliverables: ['Mobile Product UI', 'Design System', 'Interactive Prototype'],
    timeline: '3 weeks',
  },
  {
    id: 'metricflow',
    category: 'dashboards',
    categoryLabel: 'Dashboards',
    metric: '2.1x faster triage',
    title: 'MetricFlow Analytics',
    summary: 'Real-time revenue, cohort, and retention command center.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrAj1FHr_uqO_Wd10ETjYWoz8RPZfadDJchxo_ERrzSujE7g-scackb1dD5E9ipnHFFONr_pOrV7kOcpJp-6W80oGsuXFYSIRVAJIxTsbuTgMeBiTku-Btli0WNEEZb5S5JDkxHqwkOqsGN4MTZRp0bPAKPHI8yfDkc_NPAfDudxnsMF0heaZNwZXrtz_w8kp7kTRKWPxUlP30JQ_uoJEzWcJgNPqOWd-gWPy5vPPtFAWxm-q1ZgRYY1XuoECBForCQdkg',
    imageAlt: 'MetricFlow SaaS Analytics Dashboard mockup',
    challenge: 'Founders struggled to spot churn signals across 12 tables.',
    solution: 'Unified executive KPI hierarchy with cohort drill-down.',
    outcome: '2.1x faster daily metric triage',
    relatedService: 'Dashboards',
    deliverables: ['SaaS Control Center', 'Component Library', 'Data Visualization Spec'],
    timeline: '3 weeks',
  },
  {
    id: 'novaai',
    category: 'websites',
    categoryLabel: 'Websites',
    metric: '4.8% demo CVR',
    title: 'NovaAI Platform',
    summary: 'High-speed marketing site and interactive demo flow.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCJKfdV1RA2x2SvuFnJv_ZvY5kabfLjUkFKIm1MUxAxEuwDzpF2teHM1r9z7-zftcDbd7A0qAPbNRYmq3Eq0Of4Ikm1ZARbdkAE41Hwd35P6mtr8EYg-7dWxI4tiznhSKp63EzWNeRkLWg__BSyFbx_yt2IWMarYxAmzNY42VDDGWivN6OkGt694paaCQG4raEqSmdkvEPFhfRrnlokyVzG7Ahdy7jhNTrWpzsWjBtUZp7KXmz1TXzVA2FyUST_',
    imageAlt: 'NovaAI Automation Platform Website mockup',
    challenge: 'Technical product story felt abstract to non-technical buyers.',
    solution: 'Built interactive workflow previews and clear ROI framing.',
    outcome: '4.8% visitor-to-demo conversion',
    relatedService: 'Web Development',
    deliverables: ['Conversion Copy & UI', 'Interactive Demo', 'Production React Build'],
    timeline: '2 weeks',
  },
  {
    id: 'kinetix',
    category: 'video',
    categoryLabel: 'Video',
    metric: '180K launch views',
    title: 'Kinetix Launch Film',
    summary: '90-second 3D and UI motion launch reel for Series A.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrADjp3E6wnubnRLTMEbb4i_JsJQrHdTJCDxl6b-coFSLfhs-1BpjJ_SKlB56udaBI2xrstyJU4jmQDeUCKlwDihtRlUsOfZWrw6xM_k1Q0Q8QPg3WGRdX-35xfBTkqlW4yo5aTOXT3cc4SoOf-hvySZ9aepVrUd1DBHT9XgqYoGwb1d8yfe2lgfRTBVjhVVPF-joVpLXq0IMzNtlLdBhQtAw8TTKr6e3DONr6Cnwn5IgYHGmDP0CoQ-m2S2X-9WDA',
    imageAlt: 'Kinetix Product Launch Film thumbnail',
    hasVideoOverlay: true,
    challenge: 'Needed flagship launch film for Series A announcement.',
    solution: 'Directed 90s 3D hardware + UI motion reel with sound design.',
    outcome: '180K organic views in launch week',
    relatedService: 'Video Production',
    deliverables: ['Script & Storyboard', '3D & UI Motion Reel', 'Custom Sound Design'],
    timeline: '2 weeks',
  },
  {
    id: 'veloce',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    metric: '4.9 App Store',
    title: 'Veloce Habit App',
    summary: 'Daily routine coaching with adaptive streak tracking.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrAWZPYLsqDRHc87zwuYLTuMRCPEGZsqDrouqeueFZvppWq8NP_sNoQVS95YT2cYaQcqb8FrN0p78Wh3PvfqW7yowTQzc2-0vbjdR1kvXGFvO0hms5HtvZqndHD-xrFXUHZlgI7-jmvy9MaPokBZM0BT22wJURRedbFHngcAs1WXpgn_SMYzJ4ehVD4ZRS4YFTW7ims14CpKFj-A53at_V9aMIEkR24Z_679f4Sq4mxsQ4xzXlPdPaMHmdD6QUegxHE',
    imageAlt: 'Veloce Fitness and Habit Tracker Mobile App mockup',
    challenge: 'Users abandoned rigid daily checklists after week one.',
    solution: 'Designed adaptive streak rings and 1-tap check-in widgets.',
    outcome: '4.9 App Store rating across 2K+ reviews',
    relatedService: 'UI/UX Design',
    deliverables: ['iOS Interface Design', 'Widget System', 'Micro-interaction Spec'],
    timeline: '2 weeks',
  },
  {
    id: 'dispatchos',
    category: 'dashboards',
    categoryLabel: 'Dashboards',
    metric: '14 hrs/wk saved',
    title: 'DispatchOS Center',
    summary: 'Automated agent monitoring and workflow orchestration UI.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBSI9xS5pmSCFN4Uo49RuodN3X6mOzYjA7V-jA7y95lbTnbyzlMZiU1w8M7TbfG0yI9trBU7BzuWeeEOCdoZuIZQMfidwDOrzLNZk1m8fEkMW3aGUO9pBabzns_MEhQ_PK3KV_6j-QDEu8muJ8YXqIS2NNcZqD9rBGmihLBY6mSCjCehe-LVLsajYffFZm3t5oe31RVhuGo8SSYrq8aNmbbQl2SOHbaO3yHCt4-ZnPdnlzCAP2uV4H1lkKQYCQxfdU',
    imageAlt: 'DispatchOS AI Ops Command Center mockup',
    challenge: 'Manual ticket routing slowed down operations teams.',
    solution: 'Built live AI agent monitor with exception-only alerts.',
    outcome: '14 hours/week saved per ops manager',
    relatedService: 'AI Automation',
    deliverables: ['Agent Orchestration UI', 'LLM Routing Pipeline', 'Exception Alerts'],
    timeline: '3 weeks',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Align on business goals, user bottlenecks, and technical scope before a single pixel is drawn.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Craft wireframes, interactive prototypes, and a cohesive visual system you can test early.',
    icon: 'draw',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Develop responsive web apps, AI workflows, and motion assets with production-grade polish.',
    icon: 'terminal',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'Ship cleanly, monitor real usage, and iterate rapidly with post-launch support.',
    icon: 'rocket',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      '“Muzammil redesigned our entire SaaS analytics dashboard in two weeks. Our enterprise trial-to-paid conversion jumped immediately.”',
    author: 'Daniela Ortiz',
    role: 'VP Product, MetricFlow',
  },
  {
    quote:
      '“Splash Studio automated our lead qualification with a custom AI agent and rebuilt our landing page. It paid for itself in the first month.”',
    author: 'Tariq Al-Mansoor',
    role: 'Founder, DispatchOS',
  },
  {
    quote:
      '“Our launch film looked like a $30k studio production. Clear communication, fast iterations, and zero hand-holding needed.”',
    author: 'Hannah Lindqvist',
    role: 'Co-founder, Kinetix',
  },
];

export const SCOPER_SERVICES: ServiceCategory[] = [
  'UI/UX Design',
  'Dashboards',
  'AI Automation',
  'Web Development',
  'Video Production',
];

export const SCOPER_TIMELINES: TimelineOption[] = [
  'ASAP (2 weeks)',
  '1–2 months',
  'Ongoing retainer',
];
