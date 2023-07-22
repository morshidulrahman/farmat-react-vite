import React from "react";
import DASHBOARD_NAV from "../../utils/DashNav";
import { useParams, Link } from "react-router-dom";

// import { auth } from "../../configs/firebase";

const DashboardNavigation = () => {
  const router = useParams();

  return (
    <div className="bg-gray-100 p-3 rounded-md space-y-3 flex flex-col">
      {DASHBOARD_NAV.map((nav_item, index) => {
        return (
          <Link
            to={`${nav_item.href}`}
            key={index}
            className={`flex items-center gap-4 ${
              router.pathname === nav_item.href && "bg-gray-200"
            } rounded-md cursor-pointer p-2`}
          >
            <div className="flex items-center justify-center text-base text-white bg-primary bg-opacity-80 p-2 rounded-md">
              {nav_item.icon}
            </div>
            <h4 className="font-semibold">{nav_item.title}</h4>
          </Link>
        );
      })}
      <button className="px-10 cursor-pointer bg-yellow-500 bg-opacity-80 py-2 rounded-md font-semibold">
        Logout
      </button>
    </div>
  );
};

export default DashboardNavigation;
