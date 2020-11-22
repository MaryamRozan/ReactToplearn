import http from './httpservice';
import config from './config.json';

export const RegisterUser=user=>{
   return http.post(`${config.localapi}/api/register`,JSON.stringify(user));
};

export const loginUser = user => {
   return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};

