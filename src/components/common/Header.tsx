import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link, NavLink} from "react-router-dom";
import LoadingDots from "./LoadingDots";

export class Header extends React.Component<undefined,undefined>{
    render(){
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to="/" className="navbar-brand"><img src="https://d95l2cutluxyk.cloudfront.net/cem_MICRON/firm_logos/478_11.png"/></Link></li>
                    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/author">Authors</NavLink></li>
                    <li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
                    <LoadingDots interval={100} dots={20}/>
                </ul>
            </div>
        </nav>;
    }
}