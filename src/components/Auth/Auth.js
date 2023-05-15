import React, { useState } from "react";
import { AppForm, FormInput, FormBtn } from "../shared/from";
import * as Yup from "yup";
// import firebase from "firebase";
// import { auth, db } from "../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { toast } from "react-toastify";
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("email address"),
  password: Yup.string().required().label("Password"),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [succes, setsucces] = useState(false);

  const handlesubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((result) => {
        setsucces(true);
        setTimeout(() => {
          setsucces(false);
        }, [1000]);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    values.email = "";
    values.password = "";
    // if (isLogin) login(values.email, values.password);
    // else singUp(values.email, values.password);
  };

  // const loginWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth.signInWithPopup(provider).then((userCredential) => {
  //     addtouserdatabase(userCredential.user);
  //   });
  // };

  // const singUp = (email, password) => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       addtouserdatabase(userCredential.user);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       console.log(error.message);
  //     });
  // };

  // const login = (email, password) => {
  //   auth.signInWithEmailAndPassword(email, password).catch((error) => {
  //     alert(error.message);
  //     console.log(error.message);
  //   });
  // };

  // const addtouserdatabase = async (user) => {
  //   const { uid, displayName, photoURL, email } = user;
  //   const userref = await db.collection("users").doc(uid).get();
  //   if (!userref.exists) {
  //     db.collection("users").doc(uid).set({
  //       uid,
  //       name: displayName,
  //       email,
  //       image: photoURL,
  //     });
  //   }
  // };

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[400px]  bg-gray-200 rounded-sm">
        <div className="flex items-center justify-center gap-8 py-5 border-b border-b-gray-300 mx-6">
          <h1
            className={`${
              isLogin ? "text-gray-700" : "text-gray-400"
            } cursor-pointer text-xl font-bold uppercase`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </h1>
          <h1
            className={`${
              !isLogin ? "text-gray-700" : "text-gray-400"
            } cursor-pointer text-xl font-bold uppercase`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </h1>
        </div>
        <div className="mt-6 mx-6">
          <h1 className="capitalize text-gray-600 mb-5">
            {isLogin ? "Log In To Your Account" : "Create a new account"}
          </h1>
          <AppForm
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handlesubmit}
          >
            <FormInput name="email" placeholder="username or email address" />
            <FormInput name="password" placeholder="password" type="password" />

            <FormBtn
              title={`${isLogin ? "Login" : "Register"}`}
              onClick={handlesubmit}
            />
            {succes && (
              <div className="bg-sky-400 text-white rounded-sm px-4 py-3 mt-3">
                acount created successfully
              </div>
            )}
          </AppForm>
          <div className="pb-10">
            <p className="text-center mt-5">Or</p>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button
                // onClick={loginWithGoogle}
                className="bg-[#DB4437] text-white px-5 py-2 rounded-md"
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
