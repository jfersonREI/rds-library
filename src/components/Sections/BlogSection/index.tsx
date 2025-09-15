import webDesignTrendsImg from '@/assets/blog_web-design-trends-in-2025.webp';
import brandIdentityImg from '@/assets/blog_how-to-build-a-strong-brand-identity.webp';
import storytellingImg from '@/assets/blog_power-of-storytelling-in-marketing.webp';
import seoBasicsImg from '@/assets/blog_seo-basics-for-business-owners.webp';
import { Link } from 'react-router';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Web Design Trends in 2025',
      description:
        'Stay ahead of the curve with emerging web design trends that will define the digital landscape.',
      date: 'Jan 11, 2025',
      category: 'Articles',
      image: webDesignTrendsImg,
      href: '/blog/1',
    },
    {
      id: 2,
      title: 'How to Build a Strong Brand Identity',
      description:
        'Learn the essential elements of a successful brand identity and how to create one that resonates.',
      date: 'Jan 07, 2025',
      category: 'Articles',
      image: brandIdentityImg,
      href: '/blog/2',
    },
    {
      id: 3,
      title: 'The Power of Storytelling in Marketing',
      description:
        "Find out how effective storytelling can boost your brand's impact and customer loyalty.",
      date: 'Dec 13, 2024',
      category: 'Articles',
      image: storytellingImg,
      href: '/blog/3',
    },
    {
      id: 4,
      title: 'SEO Basics for Business Owners',
      description:
        'Understand the fundamentals of SEO and how to optimize your website for better visibility.',
      date: 'Jan 03, 2025',
      category: 'Articles',
      image: seoBasicsImg,
      href: '/blog/4',
    },
  ];

  return (
    <section
      className="bg-background section-padding-y border-border border-y border-dashed"
      aria-labelledby="blog-section-heading"
    >
      <div className="container-padding-x container mx-auto gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="text-muted-foreground flex w-fit items-center justify-center gap-1 bg-transparent text-sm font-medium [&_svg]:size-3.5 [&_svg]:shrink-0">
              Ideas and insights
            </div>
            <h2 id="blog-section-heading" className="heading-lg">
              Explore our blog
            </h2>
            <p className="text-muted-foreground">
              Stay updated on the latest in design, branding, and marketing.
              Learn from industry experts and take your strategy to the next
              level.
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
            role="list"
          >
            {blogPosts.map((post) => (
              <Link key={post.id} className="group block" to={post.href}>
                <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '75%',
                    }}
                    data-radix-aspect-ratio-wrapper=""
                  >
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-xl"
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      }}
                    >
                      <img
                        alt={`${post.title} thumbnail`}
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: 'transparent',
                        }}
                        sizes="100vw"
                        src={post.image}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-base leading-normal font-semibold group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-normal">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
