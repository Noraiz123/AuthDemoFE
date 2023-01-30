import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './config/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorPage } from './pages';
import './assets/theme/index.css';
import { isAuth } from './helpers/auth.helper';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const routes = isAuth() ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} element={route.element} />
        ))}
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
