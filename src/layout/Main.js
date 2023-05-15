import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopBtn from "../components/shared/TopBtn";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TopBtn />
      <Footer />
    </>
  );
};

export default Main;
