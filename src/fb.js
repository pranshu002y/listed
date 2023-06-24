

// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyChWbUSZRa4pfLP5u5pcP-mdAHJhHp7c7Y",
    authDomain: "listed-6c73f.firebaseapp.com",
    projectId: "listed-6c73f",
  // Add other Firebase configuration values here
};

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
