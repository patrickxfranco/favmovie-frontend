import { createBrowserRouter, type DataRouter } from 'react-router';

// Layouts
import { AppLayout } from '@/layouts/appLayout';
import { AuthLayout } from '@/layouts/authLayout';
import { SettingsLayout } from '@/layouts/settingsLayout';
import { SignIn } from '@/pages/auth/signin';
import { SignUp } from '@/pages/auth/signup';
// Pages
import { Home } from '@/pages/home';
import { SettingsProfile } from '@/pages/settings/settingsProfile';
import { TermsOfUse } from '@/pages/terms';

export const router: DataRouter = createBrowserRouter([
  {
    path: '',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '',
    element: <AppLayout />,
    children: [{ path: 'home', element: <Home /> }],
  },
  {
    path: 'settings',
    element: <SettingsLayout />,
    children: [
      { path: 'profile', element: <SettingsProfile /> },
      { path: 'movies', element: <div>movies</div> },
      { path: 'series', element: <div>series</div> },
    ],
  },
  {
    path: 'terms-of-use',
    element: <TermsOfUse />,
  },
]);
