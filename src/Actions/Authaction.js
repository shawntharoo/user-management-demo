import { USER_SESSION } from '../Constants/Constants';

export const signIn = (userData) => (dispatch, getState) =>  {
    dispatch({
        type: USER_SESSION,
        payload: null
    })
}

export const currentUserSession = () => (dispatch, getState) => {
        dispatch({
            type: USER_SESSION,
            payload: null
        })
}

export const signOut = () => (dispatch, getState) => {
    try {
         dispatch({
            type: USER_SESSION,
            payload: true
        })
    } catch (error) {
        console.log('error signing out: ', error);
        dispatch({
            type: USER_SESSION,
            payload: false
        })
    }
}



