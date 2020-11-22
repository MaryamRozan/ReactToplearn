import React, { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { withRouter } from "react-router";
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { addUser } from '../../actions/user';
import { loginUser, RegisterUser } from '../../services/userService';
import { decodeToken } from '../../utils/decodeToken';
import { errorMessage, successMessage } from '../../utils/messages';
import { Context } from "./Context";


 
const UserContext=({children,history})=>{
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
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


    const dispatch = useDispatch();

    const handleRegister = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        }
        console.log(user);
        try {
            if (validator.current.allValid()) {
                dispatch(showLoading())
                const { status } = await RegisterUser(user);
                if (status === 201) {
                   successMessage("کابر با موفقیت ایجاد شد");
                   dispatch(hideLoading()); 
                   history.push("/login");
                }
            }
            else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        }

        catch (ex) {
            dispatch(hideLoading());
           errorMessage("مشکلی پیش آمده");
            console.log(ex);

        };
    }

    const handleLogin = async event => {
        event.preventDefault();
        const user = { email, password };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success("ورود موفقیت آمیز بود.", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    dispatch(hideLoading());
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(decodeToken(data.token).payload.user));
                    history.replace("/");
                    resetStates();
                }
            } else {
                validator.current.showMessages();

                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            dispatch(hideLoading());
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
        }
    };


    const resetStates = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }

    return(
        <Context.Provider value={{
            fullname,
            setFullname,
            email,
            setEmail,
            password,
            setPassword,
            policy,
            setPolicy,
            validator,
            handleRegister,
            handleLogin
        }

        }>
            {children}
        </Context.Provider>
    )
}
export default withRouter(UserContext);