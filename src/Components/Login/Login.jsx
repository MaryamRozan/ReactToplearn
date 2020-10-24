import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { LoginUser } from '../../services/userServices';

const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            email, password
        };

        try {
            const { status, data } = await LoginUser(user);
            if (status === 200) {
                toast.success('ورود موفقیت آمیز بود', {
                    position: "top-center",
                    closeOnClick: true
                });
                localStorage.setItem("token",data.token)
                history.replace("/");
            }
        }
        catch (ex) {
            toast.error('اطلاعات وارد شده صحیح نمی باشد', { position: "top-center", closeOnClick: true });
        }
    }
    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" value={email} onChange={e=> setEmail(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" placeholder="رمز عبور " aria-describedby="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                        </div>

                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                        </div>

                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default withRouter(Login);