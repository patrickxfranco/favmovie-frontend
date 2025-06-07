import type React from 'react';
import { Outlet } from 'react-router';

export function SettingsLayout(): React.ReactElement {
  return (
    <div className="antialiased">
      <Outlet />
    </div>
  );
}
