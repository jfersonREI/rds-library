import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

import homeFeatImg from '@/assets/home_feature-section_image.png';
import { Link } from 'react-router';

const AboutSection = () => {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col items-start">
            <div className="text-muted-foreground flex w-fit items-center justify-center gap-1 bg-transparent text-sm font-medium [&_svg]:size-3.5 [&_svg]:shrink-0">
              Who we are
            </div>
            <h2 className="heading-lg text-foreground">
              Creativity meets real purpose
            </h2>
            <p className="text-muted-foreground">
              Inspiro was founded on the belief that design should inspire,
              brands should connect, and marketing should deliver. With a team
              of talented creatives, strategists, and dreamers, we work together
              to transform ideas into reality. Every project is a journey, and
              we're here to guide you every step of the way.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/#contact">
              <Button className="inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <img
              alt="Creativity meets real purpose"
              loading="lazy"
              src={homeFeatImg}
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
