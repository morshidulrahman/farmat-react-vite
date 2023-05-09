import React, { useEffect, useState } from "react";

// import Search from "../components/search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import { selectTotalCartItems } from "../redux/slices/basketSlice";
// import { useSelector } from "react-redux";
import Search from "../components/shared/search";
function Header() {
  // const cartItems = useSelector(selectTotalCartItems);
  const [isSticky, setIsSticky] = useState(false);

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
          ? "sticky z-10 shadow-lg w-full transition duration-500 ease-in-out top-0"
          : ""
      }`}
    >
      {/* header top area */}
      <div className=" flex justify-between items-center container">
        {/* header logo */}
        <div className="  ">
          <a href="/">
            <img src="/images/logo.svg" width="160" height="55" />
          </a>
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
          <a href="/my-account">
            <AiOutlineUser className="text-3xl" />
          </a>

          <a href="/cart" className="flex gap-3">
            <div className="relative">
              <AiOutlineShoppingCart className="text-3xl" />
              <span className="bg-primary px-[4px]  rounded-sm -top-1 right-0 absolute text-xs">
                0
              </span>
            </div>
            <div className="flex-col text-xs text-color hidden lg:flex">
              your Cart
              <span className="font-bold text-lg text-title">$ 0.00</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
