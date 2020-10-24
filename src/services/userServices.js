import http from './httpservice';
import config from './config.json';

export const RegisterUser=user=>{
   return http.post(`${config.localapi}/api/register`,JSON.stringify(user));
};

export const LoginUser = user => {
   return http.post(`${config.localapi}/api/login`, JSON.stringify(user));
};