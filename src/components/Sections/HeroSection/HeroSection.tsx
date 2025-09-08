import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import HeroImage from '@/assets/home_hero-section.webp';

const HeroSection = () => {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
        <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          <div className="flex flex-col items-center gap-6 text-center lg:gap-8">
            <div className="text-muted-foreground flex w-fit items-center justify-center gap-1 bg-transparent text-sm font-medium">
              Design with purpose
            </div>

            <Typography variant="h1" as="h1" id="hero-heading">
              Cool designs, real brands, visible results
            </Typography>

            <p className="text-muted-foreground mt-2 text-base lg:text-lg">
              At Inspiro, we take your ideas and turn them into awesome digital
              experiences. Whether it's slick web design, eye-catching branding,
              or custom marketing plans, we make stuff that clicks and gets
              results. Let's tell your story together!
            </p>
          </div>
          <a href="/contact">
            <Button variant="default" size="lg" className="cursor-pointer">
              Contact us <ArrowRight />
            </Button>
          </a>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <img
            alt="Hero Section"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
            src={HeroImage}
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-muted-foreground text-center">
            Working with teams at:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'logo-01.svg',
              'logo-02.svg',
              'logo-03.svg',
              'logo-04.svg',
              'logo-05.svg',
            ].map((logo, index) => (
              <div
                key={logo}
                className="relative dark:opacity-70 dark:brightness-0 dark:grayscale dark:invert"
                style={{
                  width: index === 4 ? '100px' : '140px',
                  height: '35px',
                }}
              >
                <img
                  alt="logo"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain"
                  src={`https://shadcndesign-agency-template.vercel.app/${logo}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
