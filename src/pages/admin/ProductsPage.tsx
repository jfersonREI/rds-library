// src/pages/admin/ProductsPage.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router';

// 1. Use import.meta.glob with the corrected syntax and explicit type
const productLogos: Record<string, string> = import.meta.glob(
  '@/assets/products/*.png',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Resolves the URL for a product logo image based on its filename.
 * @param filename The name of the image file (e.g., 'product-gsa.png').
 * @returns The resolved URL or undefined if not found.
 */
function getProductLogo(filename: string): string | undefined {
  // Vite resolves the alias, so the key in the imported object starts with /src/
  const path = `/src/assets/products/${filename}`;
  return productLogos[path];
}

const products = [
  {
    name: 'General Services Administration (GSA)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'GSA',
    teamMembers: 12,
    logo: 'product-gsa.png', // Just the filename
    path: '/admin/products/gsa',
  },
  {
    name: 'FDA',
    description: 'Government Administration',
    location: 'Silver Spring, MD',
    avatarFallback: 'FDA',
    teamMembers: 12,
    logo: 'product-fda.png',
    path: '/admin/products/fda',
  },
  {
    name: 'Health Resources and Services Administration (HRSA)',
    description: 'Government Administration',
    location: 'Rockville, MD',
    avatarFallback: 'HRSA',
    teamMembers: 12,
    logo: 'product-hrsa.png',
    path: '/admin/products/hrsa',
  },
  {
    name: 'U.S. Department of Homeland Security (DHS)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'DHS',
    teamMembers: 12,
    logo: 'product-dhs.png',
    path: '/admin/products/dhs',
  },
  {
    name: 'NASA',
    description: 'Aviation and Aerospace Component Manufacturi...',
    location: 'Washington, D.C.',
    avatarFallback: 'NASA',
    teamMembers: 12,
    logo: 'product-nasa.png',
    path: '/admin/products/nasa',
  },
  {
    name: 'Administration for Children and Families (ACF)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'ACF',
    teamMembers: 12,
    logo: 'product-acf.png',
    path: '/admin/products/acf',
  },
  {
    name: 'USPTO',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'USPTO',
    teamMembers: 12,
    logo: 'product-uspto.png',
    path: '/admin/products/uspto',
  },
  {
    name: 'U.S. Department of Justice (DOJ)',
    description: 'Law Enforcement',
    location: 'Washington, D.C.',
    avatarFallback: 'DOJ',
    teamMembers: 12,
    logo: 'product-doj.png',
    path: '/admin/products/doj',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="block h-full no-underline"
            >
              <Card className="flex h-full flex-col gap-6 transition-shadow duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-col items-start pb-0">
                  <Avatar className="h-18 w-18 rounded-none">
                    <AvatarImage
                      src={getProductLogo(product.logo)}
                      alt={`${product.name} logo`}
                      className="rounded-none"
                    />
                    <AvatarFallback className="rounded-none">
                      {product.avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col pt-0">
                  <div className="w-full">
                    <CardTitle className="text-foreground pb-2 text-lg font-semibold">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </div>
                  <p className="mb-4 text-sm text-gray-500">
                    {product.location}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="text-muted-foreground text-sm uppercase">
                    {product.teamMembers} Team members
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
