import * as React from "react";
import * as ReactDOM from "react-dom";
import {AuthorApi} from "../../api/AuthorApi"

export class Author extends React.Component<any,any>{
    constructor(authors: Author){
        super(authors);
        this.state = {
            authors: []
        };
    }

    componentWillMount(){
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
}