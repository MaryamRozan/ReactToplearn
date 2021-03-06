import { isEmpty } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    const user = useSelector(state => state.user);
    return (
        <nav>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeStyle={{ color: "#2aaf27" }}> صفحه اصلی </NavLink>
                            <NavLink to="/regishter" activeStyle={{ color: "#2aaf27" }}>درباره ما </NavLink>
                            <NavLink to="/skdfj" activeStyle={{ color: "#2aaf27" }}> تماس با ما </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="clientarea">
                        {!isEmpty(user) ? (
                            <div className="loggein ">
                                <i className="zmdi zmdi-account"></i><NavLink to="/Account">{" "}{user.fullname}{" "} </NavLink>
                                /
                               {" "} <i className="zmdi"></i><NavLink to="/logOut">خروج</NavLink>
                            </div>

                        ) : (
                                <div className="signin">
                                    <i className="zmdi zmdi-account"></i>
                                    <NavLink to="/Login" activeStyle={{ color: "#2aaf27" }}> ورود </NavLink> /
                                    <NavLink to="/Register" activeStyle={{ color: "#2aaf27" }}> عضویت </NavLink>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;