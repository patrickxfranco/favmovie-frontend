import type React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router';

export function SettingsLayout(): React.ReactElement {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
