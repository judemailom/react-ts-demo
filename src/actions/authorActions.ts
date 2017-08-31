import * as types from './types';
import AuthorApi from '../api/MockAuthorApi';

export function createAuthor(author){
    return {type: types.CREATE_AUTHOR, author:author};
}

export function loadAuthorsSuccess(authors){
    return{type: types.LOAD_AUTHORS_SUCCESS, authors:authors};
}

export function loadAuthors(){
    return function(dispatch){
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            console.log(error);
        });
    }
}
