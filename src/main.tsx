// import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { ThemeProvider } from '@/components/ThemeProvider';
import { router } from '@/router';

const rootElement: HTMLElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>
);
