import * as types from '../actions/types';

export default function courseReducer(state = [], action){
    switch(action.type){
        case types.CREATE_COURSE: 
            return [...state,
                (<any>Object).assign({},action.course)
            ];
        default:
            return state;
    }
}