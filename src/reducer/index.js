import { userReducer } from "react";
import { combineReducers } from "redux";
import { courseReducer } from "./course";
import { coursesReducer } from "./courses";

export const reducers=combineReducers({
    course:courseReducer,
    courses: coursesReducer,
    user:userReducer
})