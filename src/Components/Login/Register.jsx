import React, { useContext, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Sugar } from 'react-preloaders';
import { toast } from 'react-toastify';
import { RegisterUser } from '../../services/userService';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { Context } from '../Context/Context';

const Register = ({ history }) => {
   const RegisterContext = useContext(Context);
   const {fullname,setFullname,email,setEmail,password,setPassword,policy,setPolicy,validator,handleRegister}=RegisterContext;


    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>
                <Helmet>
                    <title>
                        تاپلرن| ثبت نام در سایت
                    </title>
                </Helmet>
              
              

                <div className="form-layer">

                    <form onSubmit={e=>handleRegister(e)}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input type="text" className="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username"
                                name="fullname"
                                value={fullname}
                                onChange={e => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor("fullname")
                                }} />
                            {validator.current.message("fullname", fullname, "required|min:5")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address"
                                name="email"
                                value={email} onChange={e => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }} />
                            {validator.current.message("email", email, "required|email")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="password" className="form-control" placeholder="رمز عبور " aria-describedby="password"
                                name="password"
                                value={password} onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor("password");
                                }} />
                            {validator.current.message("password", password, "required|min:5")}
                        </div>

                        <div className="accept-rules">
                            <label><input type="checkbox" name="policy" value={policy}
                                onChange={e => {
                                    setPolicy(e.currentTarget.checked);
                                    validator.current.showMessageFor("policy");
                                }}
                            />  قوانین و مقررات سایت را میپذیرم </label>
                            {validator.current.message("policy", policy, "required")}
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                        </div>

                        <button className="btn btn-success"> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Register;