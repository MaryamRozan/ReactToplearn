import {getAllCourses} from '../services/courseService';
export const getAllCourse=()=>{
    return async dispatch=>{
        const {data}=await getAllCourses();
        await dispatch({type:"INIT",payload:data.courses});
    };

};