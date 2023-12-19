import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoCliente from './pages/NuevoCliente';
import Layout from './components/Layout';
import ReactDOM from 'react-dom/client'
import Index, {loader as clientesLoader} from './pages/Index';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, element: <Index />,
        loader: clientesLoader
      },
      {
        path: '/client/new', element: <NuevoCliente />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
