// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMS7nKBc8xr2BzwPzXW4beham1XupYySk",
    authDomain: "usermanagement-34bcd.firebaseapp.com",
    projectId: "usermanagement-34bcd",
    storageBucket: "usermanagement-34bcd.appspot.com",
    messagingSenderId: "920196352179",
    appId: "1:920196352179:web:34fbf9f1592536e28308c6",
    measurementId: "G-Y25GBFNBL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 const auth = getAuth(app);
 export default auth
