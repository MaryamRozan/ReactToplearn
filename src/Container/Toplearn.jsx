import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Archive from '../Components/Course/Archive';
import Course from '../Components/Course/Course';
import Single from '../Components/Course/Single';
import MainLayout from '../Components/Layout/MainLayout';
import Account from '../Components/Login/Account';
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';
import { paginate } from '../utils/paginate';


const Toplearn = () => {
    const courses = useSelector(state => state.courses);
    const courseindex=paginate(courses,1,8);
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" render={()=><Course courses={courseindex} />}/>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register}/>
                <Route path="/Archive" component={Archive}/>
                <Route path="/Account" component={Account}/>
                <Route path="/Single" component={Single}/>
            </Switch>
        </MainLayout>
    );
}

export default Toplearn;