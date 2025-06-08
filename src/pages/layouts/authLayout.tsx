import { Command } from 'lucide-react';
import { Outlet } from 'react-router';

import type React from 'react';

export function AuthLayout(): React.ReactElement {
  return (
    <div className="antialiased">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-between bg-amber-300 p-12 border-zinc-300 dark:border-zinc-800 border-r-1 text-zinc-950">
          <div className="flex flex-row gap-2">
            <Command className="w-10 h-10" />
          </div>
          <span className="text-[12px] text-zinc-800">
            {/*This product is protected by copyright and distributed under licences restricting copying, distribution, and decompilation.*/}
            Este produto é protegido por direitos autorais e distribuído sob licenças que restringem a cópia, distribuição e
            descompilação.
          </span>
        </div>
        <div className="relative flex justify-center items-center bg-background p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
