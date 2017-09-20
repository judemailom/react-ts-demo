import * as React from "react";
import * as ReactDOM from "react-dom";
import {AuthorList} from "./AuthorList";
//import {AuthorApi, OAuthor} from "../../api/AuthorApi"
import AuthorApi from "../../api/MockAuthorApi"

export class AuthorPage extends React.Component<any,any>{
    constructor(authors: any){
        super(authors);
        this.state = {
            authors: []
        };
    }

    componentDidMount(){
        var thisObj = this;
        AuthorApi.getAuthorsApi()
        .then(function(data){
            thisObj.setState({authors: JSON.parse(data)});
        });
    }

    render(){
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}