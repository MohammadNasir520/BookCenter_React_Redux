import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import AllBooks from "../pages/AllBooks/AllBooks";
import NotFound from "../pages/NotFound/NotFound";
import AddBook from "../pages/AddBook/AddBook";
import BookDetails from "../pages/BookDetails/BookDetails";
import Login from "../pages/Login/Login";
import EditBook from "../pages/EditBook/EditBook";
import Error from "../pages/Error/Error";
import WishList from "../pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/editbook/:id",
        element: <EditBook></EditBook>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
