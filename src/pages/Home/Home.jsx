import Seo from '../../components/Seo/Seo';
import Ticker from '../../components/Ticker/Ticker';
import CTASection from '../../components/CTASection/CTASection';

import HeroSection from './sections/HeroSection';
import BeliefSection from './sections/BeliefSection';
import ServiceList from '../../components/ServiceList/ServiceList';
import AISection from './sections/AISection';
import WorkSection from './sections/WorkSection';
import IndustriesSection from './sections/IndustriesSection';
import WhySection from './sections/WhySection';
import ProcessTrack from '../../components/ProcessTrack/ProcessTrack';

const tickerItems = [
  'AI AGENTS',
  'CUSTOM SOFTWARE',
  'MOBILE APPS',
  'CLOUD',
  'AUTOMATION',
  'DIGITAL TRANSFORMATION',
  'MVP',
  'E-COMMERCE',
];

const tickerImages = [
  'aiAgents',
  'softwareDevelopment',
  'mobileApp',
  'cloudSolutions',
];

export default function Home() {
  return (
    <>
      <Seo
        title="Code Kompany — AI-Native Software Studio in Vadodara, India"
        description="Code Kompany is an AI-native software studio in Vadodara, India, building custom software, AI agents and digital systems that help businesses automate operations and grow."
        path="/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Full-bleed Marquee Ticker */}
      <Ticker items={tickerItems} images={tickerImages} speed={40} />

      {/* 3. Our Belief Statement + Wide Image */}
      <BeliefSection />

      {/* 4. Services (Digi Sidekick storytelling layout) */}
      <ServiceList />

      {/* 5. AI Section (Dark contrast Hub) */}
      <AISection />

      {/* 6. Selected Work (12-col asymmetric grid) */}
      <WorkSection />

      {/* 7. Target Industries (Typographic list / Mobile carousel) */}
      <IndustriesSection />

      {/* 8. Why Code Kompany (Editorial 3/2 text grid) */}
      <WhySection />

      {/* 9. Engineering Process (Horizontal scroll / Mobile timeline) */}
      <ProcessTrack />

      {/* 10. Final CTA Section */}
      <CTASection
        label="(08) — START"
        title="Have a business problem worth solving?"
        text="Let's talk about what technology could change in your business."
        primary={{ text: 'Start a Project', to: '/contact' }}
        secondary={{ text: 'Book a Consultation', to: '/contact?intent=consultation' }}
        imageKey="ctaRibbon"
        showWhatsApp
      />
    </>
  );
}
