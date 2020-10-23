import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.post["Content-Type"]="application/json";

axios.interceptors.response.use(null,error=>{
    const expectederror=error.response && error.response.status>=400 && error.response.status<500;
    if(!expectederror){
        toast.error('مشکلی در سمت سرور پیش آمده است',{
            position:"bottom-center",
            closeOnClick:true
        });
    }
    return Promise.reject(error);
});

export default{
    get: axios.get,
    post:axios.post,
    put: axios.put,
    delete: axios.delete
};