import { Footer, HeroSection, LocationSection, PricingSection, RitualSection, ServicesSection, SpaceSection } from '@/components/sections';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return <><Navbar /><main id="top"><HeroSection /><ServicesSection /><SpaceSection /><RitualSection /><PricingSection /><LocationSection /></main><Footer /></>;
}
