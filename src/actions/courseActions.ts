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
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            console.log(error);
        });
    }
}
