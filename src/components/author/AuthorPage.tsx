import * as React from "react";
import * as ReactDOM from "react-dom";
import {AuthorList} from "./AuthorList";
import {AuthorApi, OAuthor} from "../../api/AuthorApi"

export class AuthorPage extends React.Component<any,any>{
    constructor(authors: any){
        super(authors);
        this.state = {
            authors: []
        };
    }

    componentDidMount(){
        var x:AuthorApi = new AuthorApi();
        this.setState({authors: x.getAllAuthors()});
    }

    render(){
        function createAuthorRow(authors:any){
            return (
                <tr key={authors.id}> 
                    <td><a href="#">{authors.id}</a></td>
                    <td>{authors.firstName} {authors.lastName}</td>
                </tr>
            );
        }
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}