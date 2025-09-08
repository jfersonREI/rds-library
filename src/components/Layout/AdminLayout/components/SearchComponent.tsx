// ============================================
// File: components/SearchComponent.tsx
// ============================================
import { memo } from 'react';
import { Search } from 'lucide-react';
import { ADMIN_CONFIG } from '../config/adminConfig';

const SearchComponent = memo(() => {
  if (!ADMIN_CONFIG.search.enabled) return null;

  return (
    <div className="relative">
      <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
      <input
        type="search"
        placeholder={ADMIN_CONFIG.search.placeholder}
        className="bg-background border-input focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-8 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
        aria-label="Search"
      />
    </div>
  );
});

SearchComponent.displayName = 'SearchComponent';

export default SearchComponent;
