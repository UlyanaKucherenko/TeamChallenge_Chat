import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store';
import './index.css';
import Home from './pages/Home';
import './libs/i18n';
import Room from './pages/Room';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'public-chat/:roomId',
        element: <Room />,
      },
      {
        path: '*',
        element: <div style={{ textAlign: 'center' }}>Error 404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
