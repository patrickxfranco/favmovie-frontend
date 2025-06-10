import { Flame, Popcorn } from 'lucide-react';

import { Separator } from '@radix-ui/react-separator';

import { Button } from '../ui/button';

export function NavLinks() {
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
