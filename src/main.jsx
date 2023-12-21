import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoCliente, {action as newClientAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditClient,{ loader as editClientLoader } from './pages/EditClient';
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import ReactDOM from 'react-dom/client'
import './index.css'

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
      {
        path: '/client/:id/edit',
        element: <EditClient />,
        loader: editClientLoader,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
