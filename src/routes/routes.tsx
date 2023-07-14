import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import AllBooks from "../pages/AllBooks/AllBooks";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
