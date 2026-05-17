import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import ProductAll from './pages/product-all';

import './index.css';

import { LangProvider } from './context/LangContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <ProductAll />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>
);