import React, { useEffect, useState } from "react";

// import Search from "../components/search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import { selectTotalCartItems } from "../redux/slices/basketSlice";
// import { useSelector } from "react-redux";

import Search from "../components/shared/search";
import { useSelector } from "react-redux";
import { selectTotalCartItems } from "../features/basketSlices";
import { Link } from "react-router-dom";
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const cartItems = useSelector(selectTotalCartItems);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`py-7 border-b bg-white w-full top-0 ${
        isSticky
          ? "sticky z-50 shadow-lg w-full transition duration-500 ease-in-out top-0"
          : ""
      }`}
    >
      {/* header top area */}
      <div className=" flex justify-between items-center container">
        {/* header logo */}
        <div className="  ">
          <Link to="/">
            <img src="/images/logo.svg" width="160" height="55" />
          </Link>
        </div>
        {/* header search */}
        <Search />
        {/* header contact */}
        <div className="lg:flex flex-col hidden">
          <span className="text-2xl font-bold">8 800 332 65-66</span>
          <p className="self-end text-color">Support 24/7</p>
        </div>
        {/* header icons */}
        <div className="cursor-pointer gap-3 flex l">
          <Link to="/auth">
            <AiOutlineUser className="text-3xl" />
          </Link>

          <Link to="/cart" className="flex gap-3">
            <div className="relative">
              <AiOutlineShoppingCart className="text-3xl" />
              <span className="bg-primary px-[4px] rounded-sm -top-1 right-0 absolute text-xs font-bold">
                {cartItems || 0}
              </span>
            </div>
            <div className="flex-col text-xs text-color hidden lg:flex">
              your Cart
              <span className="font-bold text-lg text-title">$ 0.00</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
