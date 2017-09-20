import * as types from './types';
import courseApi from '../api/MockCourseApi';

export function createCourse(course){
    return {type: types.CREATE_COURSE, course:course};
}

export function loadCoursesSuccess(courses){
    return{type: types.LOAD_COURSE_SUCCESS, courses:courses};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getCoursesApi()
        .then(function(data){
            dispatch(loadCoursesSuccess(JSON.parse(data)));
            //console.log("load authors:" + data);
        }).catch(error => {
            console.log(error)});
        // return courseApi.getAllCourses().then(courses => {
        //     dispatch(loadCoursesSuccess(courses));
        // }).catch(error => {
        //     console.log(error);
        // });
    }
}
