import { Cog, Command } from 'lucide-react';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { HeaderButton } from './HeaderButton';
import { NavLinks } from './NavLinks';
import { SearchBar } from './SearchBar';

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
