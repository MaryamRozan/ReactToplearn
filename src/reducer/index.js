import { combineReducers } from "redux";
import { userReducer } from "./user";
import { courseReducer } from "./course";
import { coursesReducer } from "./courses";
import { loadingBarReducer } from "react-redux-loading-bar";

export const reducers=combineReducers({
    course:courseReducer,
    courses: coursesReducer,
    user: userReducer,
    loadingBar:loadingBarReducer
    
});


