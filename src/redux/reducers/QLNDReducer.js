// rxr

import { USER_LOGIN } from "../../util/setting";

//lấy lên từ local storage
let userLocal = null;

if(localStorage.getItem(USER_LOGIN)){
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: userLocal
}

export const QLNDReducer = (state = initialState, action) => {
  switch (action.type) {
   
  case "LOGIN":
    state.userLogin = action.userLogin;

    return {...state}
  default:
    return {...state}
  }
}
