import React, { useState } from "react";
import Bilinginfo from "./Bilinginfo";
// import YourOrder from "./YourOrder";
import AppForm from "../shared/from/AppForm";
import * as Yup from "yup";
import Checkoutlayout from "../../layout/Checkoutlayout";
import { db, timestamp } from "../../firebase/firebaseconfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authSlice";
import { UID } from "../../utils/helper";
import { selectItems, selectTotalCartItems } from "../../features/basketSlices";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().max(25).required().label("First Name"),
  last_name: Yup.string().max(25).required().label("Last Name"),
  company: Yup.string().label("Company"),
  address: Yup.string().max(25).required().label("Address"),
  email: Yup.string().email().required().label("Email"),
  phone: Yup.string().required().label("Phone"),
  city: Yup.string().required().label("City"),
  state: Yup.string().required().label("State / province"),
  zip: Yup.string().required().label("Zip / postal code"),
  country: Yup.string().required().label("Country"),
  notes: Yup.string().max(400).required().label("Notes"),
});
function CheckoutContent() {
  const user = useSelector(selectUser);
  const items = useSelector(selectItems);
  const carttotal = useSelector(selectTotalCartItems);

  const [loading, setloading] = useState(false);

  const placeholder = async (values) => {
    const order_id = UID();
    setloading(true);
    await savingfromdata(values);
    await saveplaceorder(values, order_id);

    setloading(false);
  };

  const savingfromdata = async (values) => {
    return db.collection("users").doc(user?.uid).set(
      {
        billings_info: values,
      },
      { merge: true }
    );
  };

  const saveplaceorder = async (values, order_id) => {
    const orders = {
      order_id,
      ...user,
      payment_success: true,
      items: items,
      total: carttotal,
      created_at: timestamp,
      values: values,
    };
    await db.collection("orders").doc(order_id).set(orders);
  };

  return (
    <Checkoutlayout>
      <div className="flex flex-wrap md:flex-nowrap gap-5">
        <AppForm
          initialValues={{
            first_name: user?.billings_info?.first_name || "",
            last_name: user?.billings_info?.last_name || "",
            company: user?.billings_info?.company || "",
            address: user?.billings_info?.address || "",
            email: user?.billings_info?.email || "",
            phone: user?.billings_info?.phone || "",
            city: user?.billings_info?.city || "",
            state: user?.billings_info?.state || "",
            zip: user?.billings_info?.zip || "",
            country: user?.billings_info?.country || "",
            notes: "",
          }}
          validationSchema={validationSchema}
          onSubmit={placeholder}
        >
          <div className="w-full md:w-[60%]">
            <h3 className="text-2xl mb-4">Billing details</h3>
            <Bilinginfo />
          </div>
          <div className="w-full md:w-[40%]"></div>
        </AppForm>
      </div>
    </Checkoutlayout>
  );
}

export default CheckoutContent;
