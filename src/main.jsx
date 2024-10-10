import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Book from './Book';
import Favorite from './favorite';
import Readbook from "./Readbook";
import BooksPage from './BooksPage';
import ErrorPage from "./error-page";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
    errorElement: <ErrorPage />,
  },
 
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/book/:id",
    element: <Book/>
  },
  {
    path: "/books",
    element: <BooksPage/>
  },
  {
    path: "/favorite",
    element: <Favorite/>
  },
  {
    path: "/readbook",
    element: <Readbook/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
