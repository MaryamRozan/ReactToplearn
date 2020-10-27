import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { LoginUser } from '../../services/userServices';

const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [,forceUpdate]=useState();
    const validator= useRef(new SimpleReactValidator({
        messages:{
            required:"تکمیل این فیلد الزامی می باشد",
            min:"مقدار این فیلد باید بیشتر از 5 کاراکتر باشد",
            email:"ایمیل وارد شده معتبر نمی باشد"
        },
        element:message=>
        <div style={{color:"red"}}>
            {message}
        </div>
    }));

    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            email, password
        };

        try {
           if(validator.current.allValid()){
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
           else{
               validator.current.showMessages();
               forceUpdate(1);
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
                            <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" 
                            name="email" value={email} onChange={e=> {
                                setEmail(e.target.value);
                                validator.current.showMessageFor("email");
                            }}/>
                            {validator.current.message("email",email,"required|email")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" placeholder="رمز عبور " aria-describedby="password"
                            name="password" value={password} onChange={e=>{
                                setPassword(e.target.value);
                                validator.current.showMessageFor("password");
                            }}/>
                            {validator.current.message("password",password,"required|min:5")}
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