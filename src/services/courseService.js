import http from './httpservice';
import config from './config.json';


export const getAllCourses=()=>{
    return http.get(`${config.toplearnapi}/api/courses`);
};
export const getCourse = courseId => {
    return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};
