import * as React from "react";
import * as ReactDOM from "react-dom";

export class AuthorList extends React.Component<any,any>{
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
}