import * as types from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
    switch(action.type){
        case types.CREATE_COURSE: 
            return [...state,
                (<any>Object).assign({},action.courses)
            ];
        case types.LOAD_COURSE_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS: 
            return [...state,
                (<any>Object).assign({},action.courses)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id),
                (<any>Object).assign({},action.courses)
            ];
        default:
            return state;
    }
}