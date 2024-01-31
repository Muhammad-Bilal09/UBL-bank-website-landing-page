// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkgrYtI1I283TslKHhSjtrTp5IeqcWCls",
  authDomain: "ubl-84eaa.firebaseapp.com",
  projectId: "ubl-84eaa",
  storageBucket: "ubl-84eaa.appspot.com",
  messagingSenderId: "639123464863",
  appId: "1:639123464863:web:5ae7636b4dbfb3787eb8aa",
  measurementId: "G-V0S43JCE0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const firestore = getFirestore(app);
export {auth,analytics,firestore}