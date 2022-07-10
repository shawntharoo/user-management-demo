// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword , signInWithPopup } from "firebase/auth";
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
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
const fprovider = new FacebookAuthProvider()

export const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, provider).then((results) => {
        const name = results.user.displayName
        const email = results.user.email
        const profilePic = results.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        navigate('/home');
    }).catch((error) => {
        console.log(error)
    })
}

export const signInWithFacebook = (navigate) => {
    signInWithPopup(auth, fprovider).then((results) => {
        const name = results.user.displayName
        const email = results.user.email
        const profilePic = results.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        navigate('/home');
    }).catch((error) => {
        console.log(error)
    })
}

export const signInWithCredential = (credential, navigate) => {
    signInWithEmailAndPassword (auth, credential.email, credential.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/home');
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error)
        });
}