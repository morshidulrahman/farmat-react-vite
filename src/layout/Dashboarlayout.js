import React from "react";
import Breadcrumb from "../components/shared/Breadcrumb";
import Auth from "../components/Auth/Auth";
import Dashboardwraper from "../components/dashboard/Dashboardwraper";
import { useSelector } from "react-redux";
import { selectUser } from "../features/authSlice";

const Dashboarlayout = ({ children }) => {
  const user = useSelector(selectUser);
  return (
    <main>
      <div className="bg-[#f5f5f5] p-5">
        <div className=" max-w-6xl mx-auto">
          <Breadcrumb />
        </div>
      </div>
      {user ? <Dashboardwraper>{children}</Dashboardwraper> : <Auth />}
    </main>
  );
};

export default Dashboarlayout;
