import React from 'react'
import EditClient,{ loader as editClientLoader, action as editClientAction } from './pages/EditClient';
import NuevoCliente, {action as newClientAction } from './pages/NuevoCliente';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as deleteClientAction } from './components/Cliente';
import Index, { loader as clientesLoader } from './pages/Index';
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
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/:id/edit',
        element: <EditClient />,
        loader: editClientLoader,
        action : editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'client/:id/delete',
        action: deleteClientAction,
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
