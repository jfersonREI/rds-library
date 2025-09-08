// src/components/PageHeadManager.tsx
import React, { useEffect } from 'react'; // Keep useEffect
import { useMatches, UIMatch } from 'react-router';
import { useAppConfig } from '@/hooks/usePageMeta';

interface RouteMeta {
  title?: string;
  description?: string;
}

interface CustomRouteHandle {
  meta?: RouteMeta;
}

type CustomUIMatch = UIMatch<unknown, CustomRouteHandle>;

const PageHeadManager: React.FC = () => {
  const matches = useMatches() as CustomUIMatch[];
  const appConfig = useAppConfig();

  // No need for these console logs anymore, they served their purpose!
  // console.group('PageHeadManager Debugging');
  // console.log('1. Raw useMatches() output:', matches);
  // ... and so on for all 5 logs
  // console.groupEnd();

  const currentRouteMatch = matches[matches.length - 1];
  const currentRouteMeta = currentRouteMatch?.handle?.meta || {};

  const pageTitleFragment = currentRouteMeta.title || 'Untitled Page';
  const fullTitle = `${pageTitleFragment}${appConfig.titleSeparator}${appConfig.appName}`;

  const description =
    currentRouteMeta.description || appConfig.defaultDescription;

  // Use useEffect to update the document title and meta description directly
  useEffect(() => {
    // Set the document title
    document.title = fullTitle;

    // Set the meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      // If meta description tag doesn't exist, create it
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);
  }, [fullTitle, description]); // Re-run effect if fullTitle or description changes

  return <></>;
};

export default PageHeadManager;
