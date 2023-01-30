import { HomePage, LoginPage, SignupPage } from '../pages';

export const publicRoutes = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
];

export const privateRoutes = [
  {
    path: '/',
    exact: true,
    element: <HomePage />,
  },
];
