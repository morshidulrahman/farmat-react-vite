import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route.js";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import store from "./app/Store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          {/* <Notifications position="top-right" zIndex={999} /> */}
          <ToastContainer
            theme="dark"
            position="bottom-left"
            autoClose={2000}
            closeOnClick
            pauseOnHover={false}
          />

          <App />
        </MantineProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
