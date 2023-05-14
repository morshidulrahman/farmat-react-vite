import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";

import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";

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
    ],
  },
]);
