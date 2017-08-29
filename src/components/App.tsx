import * as React from "react";
import * as ReactDOM from "react-dom";

import {Header} from "./common/Header";
import {HomePage} from "./home/Homepage";
import {AboutPage} from "./about/AboutPage";
import {AuthorPage} from "./author/AuthorPage";
import {default as CoursesPage} from "./course/CoursesPage";
import {BrowserRouter, Route} from "react-router-dom";

export class App extends React.Component<any,any>{
    render(){
        return(
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/author" component={AuthorPage}/>
                        <Route path="/courses" component={CoursesPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
