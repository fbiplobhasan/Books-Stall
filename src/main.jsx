import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './Error/Error.jsx';
import Home from './Home/Home.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import BookDetail from './BookDetail/BookDetail.jsx';
import ListedBooks from './ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: "/listedBooks",
        loader: () => fetch('/booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
