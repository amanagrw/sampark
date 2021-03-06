import {SIGNUP,LOGIN,LOGOUT} from "../actions/types";

const initialState={
  user:{},
  token:"",
  loggedIn:false,
};


export default (state = initialState , action) => {
  switch (action.type) {
    case SIGNUP:
      return{
        token: action.payload.token,
        user: action.payload.user,
        loggedIn: true,
      };
    case LOGIN:
      return{
        token: action.payload.token,
        user:action.payload.user,
        loggedIn: true,
      };

     case LOGOUT:
       return{
         token:"",
         loggedIn:false,
         user:[]
      };
    default:
      return state;
  }
};