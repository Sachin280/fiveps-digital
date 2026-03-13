import { Hero } from '../components/sections/Hero';
import { ClientLogos } from '../components/sections/ClientLogos';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { AboutSection } from '../components/sections/AboutSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PricingSection } from '../components/sections/PricingSection';
import { BlogPreview } from '../components/sections/BlogPreview';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <div>
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogPreview />
      <CTASection />
    </div>
  );
}
