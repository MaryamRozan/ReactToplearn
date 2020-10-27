import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { RegisterUser } from '../../services/userServices';

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy,setPolicy]=useState();
    const [, forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "تکمیل این فیلد الزامی می باشد",
            min: "مقدار این فیلد باید بیشتر از 5 کاراکتر باشد",
            email: "ایمیل وارد شده معتبر نمی باشد"
        },
        element: message =>
            <div style={{ color: "red" }}>{message}</div>
    }));


    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        }
        console.log(user);
        try {
            if (validator.current.allValid()) {
                const { status } = await RegisterUser(user);
                if (status === 201) {
                    toast.success("کاربر با موفقیت ایجاد شد.", {
                        position: "top-center",
                        closeOnClick: true
                    });
                    reset();
                }
            }
            else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        }

        catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-center",
                closeOnClick: true
            });
            console.log(ex);

        };
    }

    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }


    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

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
                            onChange={e=>{
                                setPolicy(e.currentTarget.checked);
                                validator.current.showMessageFor("policy");
                            }}
                            />  قوانین و مقررات سایت را میپذیرم </label>
                            {validator.current.message("policy",policy,"required")}
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