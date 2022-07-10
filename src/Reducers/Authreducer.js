const authReducer =  (state = {}, action) => {
    switch (action.type) {
     case 'USER_SESSION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

   export default authReducer