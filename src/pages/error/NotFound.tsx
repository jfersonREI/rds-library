import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@/components/ui/typography';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section-padding-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Typography variant="h1" as="h1" className="mb-6">
            Page not found
          </Typography>

          <p>
            We're sorry, we can't find the page you're looking for. The site
            administrator might have removed it, changed its location, or made
            it otherwise unavailable.
          </p>
          <p>
            If you typed the URL directly, check your spelling and
            capitalization. Our URLs look like this:{' '}
            <code>{'<agency.gov/example-one>'}</code>.
          </p>
          <p>
            Visit our homepage for helpful tools and resources, or contact us
            and we'll point you in the right direction.
          </p>
          <div className="flex flex-row items-start justify-start gap-2 py-8">
            <Button onClick={() => navigate('/')} variant="default" size="lg">
              Visit homepage
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
            >
              Contact us
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="mb-4 leading-6">For immediate assistance:</p>
            <ul className="list-inside list-disc pb-6">
              <li>Start a live chat with us</li>
              <li>Call (555) 555-GOVT</li>
            </ul>
            <p className="text-muted-foreground">Error code: 404</p>
          </div>
        </div>
      </section>
    </>
  );
}
