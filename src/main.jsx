import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import { Home } from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MovieDetail } from './pages/MovieDetail.jsx';
import { Layout } from './pages/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // layout fixo
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filme/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
>>>>>>> 5398abd58f61b5bb6bb1f3f37652ad023c575dff
  </StrictMode>,
)
