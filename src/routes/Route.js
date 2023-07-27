import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/checkout";
import Myaccount from "../pages/my-account/index";
import EditAcont from "../pages/my-account/edit-account";
import Orders from "../pages/my-account/orders";
import Success from "../pages/success";
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
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);
