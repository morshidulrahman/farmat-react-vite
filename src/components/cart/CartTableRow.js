import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeitems,
} from "../../features/basketSlices";
import Quantity from "../shared/Quantity";

function CartTableRow({ id, name, image, price, weight, quantity }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };
  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <>
      <tr className="border-b md:border-r md:border-l">
        <td className="py-5 pl-3">
          <img
            width={80}
            height={80}
            src={image}
            loading="lazy"
            alt={name}
            className=" object-cover rounded-md"
          />
        </td>
        <td className="py-5 max-w-[250px]">
          <div className="">
            <h1 className="text-lg font-bold text-title">{name}</h1>
            <p className="text-sm text-gray-500">Weight:{weight}</p>
          </div>
        </td>
        <td className="py-5">${price}</td>
        <td className="py-5">
          <div className="w-28">
            <Quantity
              quantity={quantity}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          </div>
        </td>
        <td className="py-5">${(price * quantity).toFixed(2)}</td>
        <td className="py-5">
          <MdDelete
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(removeitems(id))}
          />
        </td>
      </tr>
    </>
  );
}

export default CartTableRow;
