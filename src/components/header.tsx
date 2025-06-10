import { Cog, Command, Flame, Popcorn, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

function HeaderButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Button asChild size="icon" variant="ghost" className="w-12 h-12">
      <Link to={to}>{children}</Link>
    </Button>
  );
}

function SearchBar({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
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

function NavLinks() {
  return (
    <nav className="flex flex-row gap-2">
      <Button variant="ghost" className="h-12">
        <Popcorn />
        Lançamentos
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" className="h-12">
        <Flame />
        Em Alta
      </Button>
    </nav>
  );
}

export function Header(): React.ReactElement {
  const [query, setQuery] = useState('');

  return (
    <header className="fixed items-center gap-4 grid grid-cols-[min-content_1fr_min-content] grid-flow-col bg-white/80 dark:bg-black/80 backdrop-blur-2xl px-16 py-6 border-b w-full *:h-full text-accent-foreground">
      {/* Logo */}
      <div className="flex flex-row items-center gap-2">
        <HeaderButton to="/home">
          <Command className="size-8" />
        </HeaderButton>
      </div>
      {/* Busca e navegação */}
      <div className="flex flex-row gap-2">
        <SearchBar query={query} setQuery={setQuery} />
        <NavLinks />
      </div>
      {/* Ações do usuário */}
      <div className="flex flex-row gap-4">
        <HeaderButton to="#">
          <Cog className="size-8" />
        </HeaderButton>
        <Avatar className="rounded-md w-12 h-12">
          <AvatarImage src="https://www.github.com/patrickxfranco.png" />
          <AvatarFallback>PF</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
