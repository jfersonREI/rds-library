import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

// Import BASE_URL from your centralized utility file
import { BASE_URL } from '@/lib/utils';

/**
 * @component ProductsDetailsPage
 * @description Placeholder component for the Admin Product Details page.
 */

const ProductDetailsPage: React.FC = () => {
  // If you want to use local images for team members, you would do it here
  const teamMembers = [
    {
      id: 1,
      name: 'Marcia Rice',
      role: 'Software Developer',
      company: 'Product Name',
      // Corrected avatar path to use BASE_URL and the path relative to project root
      avatar: `${BASE_URL}src/assets/avatars/01.png`,
      reviewDue: '12/12/2023',
    },

    {
      id: 2,
      name: 'Reyes Hessel',
      role: 'Business Analyst',
      company: 'Product Name',
      avatar: `${BASE_URL}src/assets/avatars/02.png`,
      reviewDue: '12/12/2023',
    },
    {
      id: 3,
      name: 'Celia Prohaska',
      role: 'UX Manager',
      company: 'Product Name',
      avatar: `${BASE_URL}src/assets/avatars/03.png`,
      reviewDue: '12/12/2023',
    },
  ];

  // Path to the GSA logo, assuming it's in src/assets/products
  const gsaLogoPath = `${BASE_URL}src/assets/products/product-gsa.png`;

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Product Name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header Section */}
      <div className="mb-6 py-4 sm:py-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold">Product Name</h1>
            <p className="text-md text-muted-foreground mt-1">
              IT Services and IT Consulting - Bethesda, MD
            </p>
          </div>
          {/* Placeholder Logo */}
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
            {/* Corrected the image src to use the BASE_URL */}
            <img src={gsaLogoPath} alt="GSA" />
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <Tabs defaultValue="team-members" className="w-full">
        <div className="foo">
          <TabsList className="bg-primary/20 mb-6 grid h-auto w-full grid-cols-5 p-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team-members">Team Members</TabsTrigger>
            <TabsTrigger value="current-review">Current Review</TabsTrigger>
            <TabsTrigger value="past-reviews">Past Reviews</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>
        {/* Tabs Content - Overview (Placeholder) */}
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                General information about the project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">This is the overview content.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tabs Content - Team Members */}
        <TabsContent value="team-members">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                Team members
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between rounded-md p-3 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {member.role} - {member.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      REVIEW DUE: {member.reviewDue}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tabs Content - Current Review (Placeholder) */}
        <TabsContent value="current-review">
          <Card>
            <CardHeader>
              <CardTitle>Current Review</CardTitle>
              <CardDescription>
                Details about the ongoing review.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                This is the current review content.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tabs Content - Past Reviews (Placeholder) */}
        <TabsContent value="past-reviews">
          <Card>
            <CardHeader>
              <CardTitle>Past Reviews</CardTitle>
              <CardDescription>
                History of past project reviews.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                This is the past reviews content.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tabs Content - Settings (Placeholder) */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure project settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">This is the settings content.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductDetailsPage;
