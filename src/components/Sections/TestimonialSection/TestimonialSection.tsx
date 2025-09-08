import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

import TestimonialImage1 from '@/assets/home_testimonial-section_iva_ryan.png';
import TestimonialImage2 from '@/assets/home_testimonial-section_jerry-helfer.png';
import TestimonialImage3 from '@/assets/home_testimonial-section_marry-freund.png';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        'Inspiro transformed our brand completely. Their fresh ideas and attention to detail were game-changing!',
      name: 'Iva Ryan',
      role: 'Marketing Manager @ Trendify',
      avatar: TestimonialImage1,
      initials: 'IR',
    },
    {
      quote:
        'The website they created for us not only looks amazing but performs exceptionally well. Highly recommend!',
      name: 'Jerry Helfer',
      role: 'CEO @ TechVision',
      avatar: TestimonialImage2,
      initials: 'JH',
    },
    {
      quote:
        'Thanks to Inspiro, our social media strategy finally resonates with our audience, and engagement has skyrocketed!',
      name: 'Mary Freund',
      role: 'Social media lead @ GreenGrowth',
      avatar: TestimonialImage3,
      initials: 'MF',
    },
  ];
  return (
    <section
      className="bg-muted/50 section-padding-y border-border border-t border-dashed"
      aria-labelledby="testimonial-title"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <div className="text-muted-foreground flex w-fit items-center justify-center gap-1 bg-transparent text-sm font-medium [&_svg]:size-3.5 [&_svg]:shrink-0">
              Happy clients
            </div>
            <h2 id="testimonial-title" className="heading-lg text-foreground">
              What our clients say
            </h2>
            <p className="text-muted-foreground text-base">
              We're proud to be a part of our clients' success. Here's what they
              have to say about working with us:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <>
                <Card
                  key={index}
                  data-slot="card"
                  className="gap-6 p-6 text-center md:p-8"
                >
                  <p className="text-foreground text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <p className="text-foreground text-base font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
