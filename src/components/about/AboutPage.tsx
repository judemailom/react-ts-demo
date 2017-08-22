import * as React from "react";
import * as ReactDOM from "react-dom";

export class About extends React.Component<undefined,undefined>{
    render(){
        return <div className="jumbotron">
                    <h1>About</h1>
                    <p>
                        This application uses the ff technologies:
                        <ul>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>React Router</li>
                            <li>Webpack</li>
                            <li>*Bootstrap!</li>
                        </ul>
                    </p>
                </div>;
    }
}