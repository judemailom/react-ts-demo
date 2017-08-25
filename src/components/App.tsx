import * as React from "react";
import * as ReactDOM from "react-dom";

import {HomePage} from "./home/Homepage";
import {AboutPage} from "./about/AboutPage";
import {Header} from "./common/Header";
import {AuthorPage} from "./author/AuthorPage";
import {BrowserRouter, Route} from "react-router-dom";

export class App extends React.Component<any,any>{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/author" component={AuthorPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
