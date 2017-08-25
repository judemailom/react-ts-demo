import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Router} from 'react-router';
import {App} from "./App";


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);