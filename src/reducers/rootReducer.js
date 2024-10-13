
//combine the reducers

import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

// combine

const rootReducer =  combineReducers ({
    todos : todoReducer,
    user : userReducer,
});

export default rootReducer;