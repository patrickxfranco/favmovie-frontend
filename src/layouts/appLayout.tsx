import { Outlet } from 'react-router';

import { Header } from '@/components/Header';

import type React from 'react';

export function AppLayout(): React.ReactElement {
  return (
    <div className="grid grid-rows-[auto] overflow-y-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
