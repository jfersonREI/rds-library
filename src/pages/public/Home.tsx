import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import FeaturesSection from '@/components/Sections/FeaturesSection/FeaturesSection';
import TestimonialSection from '@/components/Sections/TestimonialSection/TestimonialSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import BlogSection from '@/components/Sections/BlogSection/BlogSection';
import ContactSection from '@/components/Sections/ContactSection/ContactSection';

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
