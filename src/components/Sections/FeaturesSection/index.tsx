import FunctionalImage from '@/assets/home_feature-section_beautifully-functional.png';
import IdentityImage from '@/assets/home_feature-section_your-identity.png';
import EngageImage from '@/assets/home_feature-section_engage-and-connect.png';
import ResultsImage from '@/assets/home_feature-section_results-driven.png';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Beautifully functional',
      description:
        'Bring your online presence to life with intuitive, user-focused designs that captivate and convert.',
      image: FunctionalImage,
      alt: 'Beautifully functional',
    },
    {
      title: 'Your identity',
      description:
        'Craft a brand that stands out and resonates, building trust and recognition.',
      image: IdentityImage,
      alt: 'Your identity',
    },
    {
      title: 'Engage and connect',
      description:
        'Boost engagement with tailored social media strategies that connect your brand to the right audience.',
      image: EngageImage,
      alt: 'Engage and connect',
    },
    {
      title: 'Results-driven',
      description:
        'Our marketing campaigns increase visibility and drive ROI with data-backed strategies.',
      image: ResultsImage,
      alt: 'Results-driven',
    },
  ];

  return (
    <section className="bg-background section-padding-y border-border border-b border-dashed py-12 md:py-16">
      <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 md:gap-12 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center text-center md:mb-12">
          <div className="text-muted-foreground flex items-center justify-center gap-1 text-sm font-medium">
            What we do
          </div>
          <h2 className="text-foreground mt-4 text-3xl font-bold md:text-4xl">
            Creative solutions for modern and innovative brands
          </h2>
          <p className="text-muted-foreground mt-4 text-base">
            Our expertise bridges creativity with strategy. Explore how Inspiro
            helps you stand out, connect with your audience, and achieve your
            goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 text-center"
            >
              <div className="bg-background relative flex h-20 w-20 shrink-0 items-center justify-center">
                <img
                  alt={feature.alt}
                  loading="lazy"
                  decoding="async"
                  src={feature.image}
                  className="absolute h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
