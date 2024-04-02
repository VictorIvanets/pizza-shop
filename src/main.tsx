/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter, defer} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
// import {Menu} from './pages/menu';
import {Cart} from './pages/cart';
import {Layout} from './pages/layout';
import {Error} from './pages/Error';
import {Product} from './pages/Product';
import { PREFIX } from './pages/API';
import axios from 'axios';
import { Preloader } from './pages/preloader';
import { AuthLayout } from './pages/AuthLyout';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register';
import { RequireAuth } from './components/RequireAuth';
import { StartPage } from './pages/StartPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SuccessPage } from './pages/Success';

const Menu = lazy(()=> import('./pages/menu'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout/></RequireAuth>,
    children: [
    {
    path: '/start',
      element: <StartPage/>
    },
    {
      path: '/success',
        element: <SuccessPage/>
      },
    {
      path: '/cart',
      element: <Cart/>
    },
    {
      path: '/menu',
      element: <Suspense fallback={<Preloader error={'Йде завантаження'}/>}><Menu/></Suspense>
    },
    {
      path: '/product/:id',
      element: <Product/>,
      errorElement: <Preloader error={'Щось не так... Такої сторінки немає'}/>,
      loader: async ({ params }) => {
        return defer ({
          data: await axios.get(`${PREFIX}/products/${params.id}`).then(data=>data)
        });
      }
    }
  ],
  },
  {
    path: '/main-menu',
    element: <Menu/>
  },

  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
        {
          path: 'login',
          element: <Auth/>
        },
        {
          path: 'register',
          element: <Register/>
        },
    ]
  },

  {
    path: '*',
    element: <Error/>
  },

  ]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>
  </React.StrictMode>,
);
