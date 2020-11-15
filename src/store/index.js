import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllCourse } from "../action/courses";
import {reducers} from '../reducer'

export const store=createStore(reducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())
    );

    store.dispatch(getAllCourse());