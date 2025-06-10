import { Search } from 'lucide-react';

import { Input } from '../ui/input';

export function SearchBar({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  return (
    <div className="relative w-min">
      <Input
        placeholder="Buscar conteúdos"
        value={query}
        className="bg-white dark:bg-black border-secondary w-150 h-12 placeholder:text-ring"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search className="top-0 right-0 absolute p-4 rounded-r-sm w-12 h-full text-muted-foreground" />
    </div>
  );
}
