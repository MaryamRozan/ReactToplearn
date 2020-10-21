import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Archive from '../Components/Course/Archive';
import Course from '../Components/Course/Course';
import Single from '../Components/Course/Single';
import MainLayout from '../Components/Layout/MainLayout';
import Account from '../Components/Login/Account';
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';


const Toplearn = (props) => {
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Course} />
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