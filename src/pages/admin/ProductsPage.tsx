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
import { Link } from 'react-router'; // Import the Link component

import { BASE_URL } from '@/lib/utils';

const products = [
  {
    name: 'General Services Administration (GSA)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'GSA',
    teamMembers: 12,
    logo: '/products/product-gsa.png', // Placeholder logo
    path: '/admin/products/gsa', // Stored path
  },
  {
    name: 'FDA',
    description: 'Government Administration',
    location: 'Silver Spring, MD',
    avatarFallback: 'FDA',
    teamMembers: 12,
    logo: '/products/product-fda.png', // Placeholder logo
    path: '/admin/products/fda', // Stored path
  },
  {
    name: 'Health Resources and Services Administration (HRSA)',
    description: 'Government Administration',
    location: 'Rockville, MD',
    avatarFallback: 'HRSA',
    teamMembers: 12,
    logo: '/products/product-hrsa.png', // Placeholder logo
    path: '/admin/products/hrsa', // Stored path
  },
  {
    name: 'U.S. Department of Homeland Security (DHS)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'DHS',
    teamMembers: 12,
    logo: '/products/product-dhs.png', // Placeholder logo
    path: '/admin/products/dhs', // Stored path
  },
  {
    name: 'NASA',
    description: 'Aviation and Aerospace Component Manufacturi...',
    location: 'Washington, D.C.',
    avatarFallback: 'NASA',
    teamMembers: 12,
    logo: '/products/product-nasa.png', // Placeholder logo
    path: '/admin/products/nasa', // Stored path
  },
  {
    name: 'Administration for Children and Families (ACF)',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'ACF',
    teamMembers: 12,
    logo: '/products/product-acf.png', // Placeholder logo
    path: '/admin/products/acf', // Stored path
  },
  {
    name: 'USPTO',
    description: 'Government Administration',
    location: 'Washington, D.C.',
    avatarFallback: 'USPTO',
    teamMembers: 12,
    logo: '/products/product-uspto.png', // Placeholder logo
    path: '/admin/products/uspto', // Stored path
  },
  {
    name: 'U.S. Department of Justice (DOJ)',
    description: 'Law Enforcement',
    location: 'Washington, D.C.',
    avatarFallback: 'DOJ',
    teamMembers: 12,
    logo: '/products/product-doj.png', // Placeholder logo
    path: '/admin/products/doj', // Stored path
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
                      src={`${BASE_URL}src/assets/${product.logo}`}
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
