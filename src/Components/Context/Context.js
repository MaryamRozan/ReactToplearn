import { createContext } from "react";

export const Context=createContext({
    fullname:"",
    setFullname:()=>{},
    email:"",
    setEmail:()=>{},
    password:"",
    setPassword:()=>{},
    policy:"",
    setPolicy:()=>{},
    forceUpdate:"",
    validator:"",
    handleRegister:()=>{},
    handleLogin:()=>{}

});