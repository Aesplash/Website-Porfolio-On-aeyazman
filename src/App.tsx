import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import type { ProjectItem, ServiceCategory, TimelineOption } from './data/studioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCategory>('UI/UX Design');
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>('ASAP (2 weeks)');
  const [referenceProject, setReferenceProject] = useState<string | null>(null);

  const handleRequestSimilar = (service: ServiceCategory, projectTitle: string) => {
    setSelectedService(service);
    setReferenceProject(projectTitle);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#14161D] font-body">
        <Navbar />

        <main id="top" className="flex-1">
          <Hero />
          <ServicesSection onSelectService={setSelectedService} />
          <PortfolioSection onSelectProject={setSelectedProject} />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection
            selectedService={selectedService}
            onChangeService={setSelectedService}
            selectedTimeline={selectedTimeline}
            onChangeTimeline={setSelectedTimeline}
            referenceProject={referenceProject}
            onClearReference={() => setReferenceProject(null)}
          />
        </main>

        <Footer />

        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={handleRequestSimilar}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
