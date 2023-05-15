// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK6zQJg-9udHFpS2mwMx0gNP7SAu2MXx4",
  authDomain: "farmat-2d97f.firebaseapp.com",
  projectId: "farmat-2d97f",
  storageBucket: "farmat-2d97f.appspot.com",
  messagingSenderId: "118103945164",
  appId: "1:118103945164:web:b3b8a83c0c68f4264f7769",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
