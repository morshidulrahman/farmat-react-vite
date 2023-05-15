import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";

import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/checkout";
import Auth from "../components/Auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
