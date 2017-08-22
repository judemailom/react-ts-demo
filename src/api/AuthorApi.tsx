//This file is mocking a web API by hitting hard coded data.
import {MockApi, OAuthor} from "./MockApi";
import * as _ from "lodash";

export class AuthorApi{
    getAllAuthors(){
		var mock: MockApi = new MockApi();
		return JSON.parse(JSON.stringify(mock.authors));//_clone(authors); 
	}

	getAuthorById(id:string){
		var mock: MockApi = new MockApi();
		return JSON.parse(JSON.stringify(mock.authors[0]));//_clone(author);
	}
	
	saveAuthor(author: OAuthor){
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		// if (author.id) {
		// 	var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
		// 	authors.splice(existingAuthorIndex, 1, author);
		// } else {
		// 	//Just simulating creation here.
		// 	//The server would generate ids for new authors in a real app.
		// 	//Cloning so copy returned is passed by value rather than by reference.
		// 	author.id = _generateId(author);
		// 	authors.push(author);
		// }

		return "";//_clone(author);
	}

	deleteAuthor(id:string){
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		//_.remove(authors, { id: id});
	}

}

export {OAuthor}