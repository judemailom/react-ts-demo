import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Router} from 'react-router';
import {App} from "./App";
import {history} from './../utilities/History'


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);