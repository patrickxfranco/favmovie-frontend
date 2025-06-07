import type React from 'react';
import { Outlet } from 'react-router';

export function AppLayout(): React.ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  );
}
