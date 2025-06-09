import { Cog, Command } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from './ui/button';
import { Input } from './ui/input';

// import { Separator } from './ui/separator';

export function Header(): React.ReactElement {
  const [query, setQuery] = useState('');

  return (
    <header className="fixed items-center gap-4 grid grid-cols-[min-content_1fr_min-content] grid-flow-col bg-white/80 dark:bg-black/80 backdrop-blur-2xl px-16 py-6 border-b w-full *:h-full">
      <div className="">
        <Button asChild size="icon" variant="ghost" className="w-12 h-12">
          <Link to="#">
            <Command className="size-8" />
          </Link>
        </Button>
      </div>
      <div className="relative">
        <Input
          placeholder="Buscar conteúdos"
          value={query}
          className="bg-white dark:bg-black border-secondary h-12 placeholder:text-ring"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-4">
        <Button asChild size="icon" variant="ghost" className="w-12 h-12">
          <Link to="#">
            <Cog className="size-8" />
          </Link>
        </Button>
        <Avatar className="rounded-md w-12 h-12">
          <AvatarImage src="https://www.github.com/patrickxfranco.png" />
          <AvatarFallback>PF</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
