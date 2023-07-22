import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authSlice";
import { LoadingOverlay } from "@mantine/core";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <LoadingOverlay visible={loading} />
      <h1 className="text-3xl text-bold">User Profile</h1>
      <div className="flex items-center gap-4 mt-5">
        <img
          src={user?.photoURL}
          loading="lazy"
          alt={user?.displayName}
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-3xl text-bold">{user?.displayName}</h2>
          <h3 className="text-lg text-semibold text-primary mt-1">
            {user?.email}
          </h3>
        </div>
      </div>
      <Link to="/myaccount/orders">
        <button className="py-4 mt-5 bg-primary mr-5 px-2 rounded-md text-white">
          <p>View orders</p>
        </button>
      </Link>
      <Link to="/myaccount/address">
        <button className="py-4 mt-5 mr-5 bg-primary px-2 rounded-md text-white">
          <p>Update billing information</p>
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
