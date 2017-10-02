import * as types from './types';
import courseApi from '../api/MockCourseApi';

export function createCourse(course){
    return {type: types.CREATE_COURSE, course:course};
}

export function loadCoursesSuccess(courses){
    return{type: types.LOAD_COURSE_SUCCESS, courses:courses};
}

export function updateCourseSuccess(courses){
    return{type: types.UPDATE_COURSE_SUCCESS, courses:courses};
}

export function createCourseSuccess(courses){
    return{type: types.CREATE_COURSE_SUCCESS, courses:courses};
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

export function saveCourse(course){
    return function(dispatch, getState){
        return courseApi.saveCourse(course).then(savedCourse =>{
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    }
}
