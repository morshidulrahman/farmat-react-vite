import React, { useEffect, useState } from "react";
import CartTableMobile from "./OrderTableMobile";
import CartTableRow from "./OrderTableRow";
import { LoadingOverlay } from "@mantine/core";
import { db } from "../../firebase/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import Orders from "../../pages/my-account/orders";

function CartTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const ordersRef = collection(db, "orders");
  // get order data form database
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(ordersRef, (snapshot) => {
      // Create an empty array to store the orders
      const ordersData = [];

      // Loop through the documents in the snapshot
      snapshot.docs.forEach((doc) => {
        // Extract the data from the document
        const data = doc.data();

        // Push the document data along with the document ID into the ordersData array
        ordersData.push({
          ...data,
          id: doc.id,
          created_at: data.created_at.toDate().getTime(),
        });
      });

      // Set the state with the retrieved orders data
      setOrders(ordersData);

      // Set loading to false since data has been fetched
      setLoading(false);
    });

    // The returned unsubscribe function will be called when the component unmounts,
    // which will stop listening to changes in the orders collection
    return () => unsubscribe();
  }, []);
  console.log(orders);
  return (
    <>
      <LoadingOverlay visible={loading} />
      <table className="w-full hidden md:table">
        <thead className="bg-gray-100 border">
          <tr className="text-left">
            <th className="text-title py-5 pl-3">Order Id</th>
            <th className="text-title py-5">Products</th>
            <th className="text-title py-5">Total Price</th>
            <th className="text-title py-5">Time ago</th>
            <th className="text-title py-5">Payment</th>
            <th className="text-title py-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item, index) => (
            <CartTableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
      {orders?.map((item, index) => (
        <CartTableMobile key={index} {...item} />
      ))}
    </>
  );
}

export default CartTable;
