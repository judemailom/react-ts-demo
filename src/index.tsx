import * as React from "react";
import * as ReactDOM from "react-dom";

import {Home} from "./components/Homepage";
import {About} from "./components/about/AboutPage";
import {Author} from "./components/author/AuthorPage";
import {Header} from "./components/common/Header";

class App extends React.Component<any,any>{
    render(){
        if(this.props.route == "about"){
            return <div> <Header/> <About/> </div>;
        }
        else if(this.props.route == "author"){
            return <div> <Header/> <Author/> </div>;
        }
        return <div> <Header/> <Home/> </div>;
    }
}


function render(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(
        <App route={route}/>,
        document.getElementById("root")
    );    
}

window.addEventListener('hashchange',render);
render();