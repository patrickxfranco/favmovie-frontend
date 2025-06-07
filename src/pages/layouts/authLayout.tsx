import type React from 'react';
import { Outlet } from 'react-router';

export function AuthLayout(): React.ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  );
}
