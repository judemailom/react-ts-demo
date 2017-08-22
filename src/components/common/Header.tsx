import * as React from "react";
import * as ReactDOM from "react-dom";

export class Header extends React.Component<undefined,undefined>{
    render(){
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#" className="navbar-brand">
                            <img src="https://d95l2cutluxyk.cloudfront.net/cem_MICRON/firm_logos/478_11.png"/>
                        </a>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#author">Authors</a></li>
                </ul>
            </div>
        </nav>;
    }
}