// src/pages/admin/ProductDetailsPage.tsx
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

// 1. Explicitly import the static GSA logo.
import gsaLogo from '@/assets/products/product-gsa.png';

// 2. Use import.meta.glob with the corrected syntax and explicit type for team member avatars.
const avatarModules: Record<string, string> = import.meta.glob(
  '@/assets/avatars/*.png',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Resolves the URL for an avatar image based on its filename.
 * @param filename The name of the image file (e.g., '01.png').
 * @returns The resolved URL or undefined if not found.
 */
function resolveAvatarPath(filename: string): string | undefined {
  const fullPathKey = `/src/assets/avatars/${filename}`;
  return avatarModules[fullPathKey];
}

const ProductDetailsPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Marcia Rice',
      role: 'Software Developer',
      company: 'Product Name',
      // Corrected avatar path to use the helper function
      avatar: resolveAvatarPath('01.png'),
      reviewDue: '12/12/2023',
    },

    {
      id: 2,
      name: 'Reyes Hessel',
      role: 'Business Analyst',
      company: 'Product Name',
      avatar: resolveAvatarPath('02.png'),
      reviewDue: '12/12/2023',
    },
    {
      id: 3,
      name: 'Celia Prohaska',
      role: 'UX Manager',
      company: 'Product Name',
      avatar: resolveAvatarPath('03.png'),
      reviewDue: '12/12/2023',
    },
  ];

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
            {/* 3. Use the explicitly imported logo */}
            <img src={gsaLogo} alt="GSA" />
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
