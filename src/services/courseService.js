import http from './httpservice';
import config from './config.json';


export const getAllCourses=()=>{
    return http.get(`${config.toplearnapi}/api/courses`);
};