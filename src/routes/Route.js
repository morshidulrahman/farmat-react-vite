import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/checkout";
import Myaccount from "../pages/my-account/index";
import EditAcont from "../pages/my-account/edit-account";

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
        path: "myaccount",
        element: <Myaccount />,
      },
      {
        path: "myaccount/edit-account",
        element: <EditAcont />,
      },
    ],
  },
]);
