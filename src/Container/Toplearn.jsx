import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom'
import Archive from '../Components/Course/Archive';
import Course from '../Components/Course/Course';
import SingleCourse from '../Components/Course/SingleCourse';
import MainLayout from '../Components/Layouts/MainLayout';
import Account from '../Components/Login/Account';
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';
import { paginate } from '../utils/paginate';

import { addUser, clearUser } from '../actions/user';

import { decodeToken } from '../utils/decodeToken';
import { isEmpty } from 'lodash';
import Logout from '../Components/Login/logout';
import UserContext from '../Components/Context/UserContext';


const Toplearn = () => {
    const courses = useSelector(state => state.courses);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const indexCourses = paginate(courses, 1, 8);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            } else dispatch(addUser(decodedToken.payload.user));
        }
    }, []);

    
    return (
        <MainLayout>
                 <Switch>
                <Route path="/login" render={()=>isEmpty(user)?(
                    <UserContext>
                        <Login/>
                    </UserContext>
                ):(<Redirect to="/"/>)} />
                <Route
                    path="/logout"
                    render={() =>
                        isEmpty(user) ? <Redirect to="/" /> : <Logout />
                    }
                />
                <Route path="/register" render={()=>isEmpty(user)?(
                    <UserContext>
                        <Register/>
                    </UserContext>
                ):(<Redirect to="/"/>)} />
                <Route path="/archive" component={Archive} />
                <Route path="/course/:id" component={SingleCourse} />
                <Route path="/Account" component={Account} />
                <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                />
            </Switch>
        </MainLayout>
    );
}

export default Toplearn;