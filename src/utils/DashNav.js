import { BiUser } from "react-icons/bi";
import { FiSliders } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbAddressBook } from "react-icons/tb";

export const DASHBOARD_NAV = [
  {
    title: "Dashboard",
    href: "/myaccount",
    icon: <FiSliders />,
    id: 1,
  },
  {
    title: "User Profile",
    href: "/myaccount/edit-account",
    icon: <BiUser />,
    id: 2,
  },
  {
    title: "Addresses",
    href: "/address",
    icon: <TbAddressBook />,
    id: 3,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <BsCart />,
    id: 4,
  },
  // {
  //     title: "Reviews",
  //     href: '/my-account/reviews',
  //     icon: <MdOutlineReviews />,
  // },
];
export default DASHBOARD_NAV;
