import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const TopBtn = () => {
  const [active, setactive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setactive(true);
      } else {
        setactive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={` bg-orange text-white w-10 h-10 rounded-full flex justify-center items-center fixed right-10 bottom-10 transition duration-300 ${
        active ? "flex" : "hidden"
      }`}
    >
      <AiOutlineArrowUp size={22} />
    </button>
  );
};

export default TopBtn;
