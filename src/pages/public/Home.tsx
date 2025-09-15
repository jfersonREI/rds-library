import HeroSection from '@/components/Sections/HeroSection';
import FeaturesSection from '@/components/Sections/FeaturesSection';
import TestimonialSection from '@/components/Sections/TestimonialSection';
import AboutSection from '@/components/Sections/AboutSection';
import BlogSection from '@/components/Sections/BlogSection';
import ContactSection from '@/components/Sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
