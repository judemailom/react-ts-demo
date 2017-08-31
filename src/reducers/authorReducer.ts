import * as types from '../actions/types';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){
    switch(action.type){
        case types.CREATE_AUTHOR: 
            return [...state,
                (<any>Object).assign({},action.author)
            ];
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}