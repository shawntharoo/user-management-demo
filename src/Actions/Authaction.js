import { USER_SESSION } from '../Constants/Constants';
import auth from '../Constants/Firebase';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider()
const fprovider = new FacebookAuthProvider()

export const signInWithCredential = (credential, navigate) => (dispatch, getState) => {
    console.log(credential)
    signInWithEmailAndPassword(auth, credential.Username, credential.Password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({
                type: USER_SESSION,
                payload: user
            })
            navigate('/home')
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error)
            dispatch({
                type: USER_SESSION,
                payload: error
            })
        });
}

export const signInWithGoogle = (navigate) => (dispatch, getState) =>{
    signInWithPopup(auth, provider).then((results) => {
        const name = results.user.displayName
        const email = results.user.email
        const profilePic = results.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        dispatch({
            type: USER_SESSION,
            payload: results.user
        })
        navigate('/home')
    }).catch((error) => {
        dispatch({
            type: USER_SESSION,
            payload: error
        })
    })
}

export const signInWithFacebook = (navigate) => (dispatch, getState) =>{
    signInWithPopup(auth, fprovider).then((results) => {
        const name = results.user.displayName
        const email = results.user.email
        const profilePic = results.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        dispatch({
            type: USER_SESSION,
            payload: results.user
        })
        navigate('/home')
    }).catch((error) => {
        dispatch({
            type: USER_SESSION,
            payload: error
        })
    })
}

export const currentUserSession = () => (dispatch, getState) => {
    dispatch({
        type: USER_SESSION,
        payload: null
    })
}

export const signOut = (navigate) => (dispatch, getState) => {
    auth.signOut().then(() => {
        dispatch({
            type: USER_SESSION,
            payload: true
        })
        navigate('/login')
    }).catch((error) => {
        dispatch({
            type: USER_SESSION,
            payload: false
        })
    })
}



