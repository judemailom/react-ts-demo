import * as types from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
    switch(action.type){
        case types.CREATE_COURSE: 
            return [...state,
                (<any>Object).assign({},action.course)
            ];
        case types.LOAD_COURSE_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}