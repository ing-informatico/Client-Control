import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoCliente, {action as newClientAction } from './pages/NuevoCliente';
import Index, {loader as clientesLoader} from './pages/Index';
import Layout from './components/Layout';
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/new',
        element: <NuevoCliente />,
        action: newClientAction
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
