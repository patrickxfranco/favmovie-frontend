import { Fragment } from 'react';
import { Outlet } from 'react-router';

import type React from 'react';

export function AuthLayout(): React.ReactElement {
  return (
    <Fragment>
      <div className="grid grid-cols-3 min-h-screen">
        <div className="flex flex-col justify-between col-span-1 bg-amber-300 p-12 border-zinc-300 dark:border-zinc-800 border-r-1 text-zinc-950">
          <div className="flex flex-col font-[Roboto]">
            {/* <Command className="w-10 h-full" /> */}
            <h2 className="content-center font-black text-[38px] uppercase tracking-tight">Commando</h2>
          </div>
          <span className="text-[12px] text-zinc-800">
            {/*This product is protected by copyright and distributed under licences restricting copying, distribution, and decompilation.*/}
            Este produto é protegido por direitos autorais e distribuído sob licenças que restringem a cópia, distribuição e
            descompilação.
          </span>
        </div>
        <div className="relative flex justify-center items-center col-span-2 bg-background p-12">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
