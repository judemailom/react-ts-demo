import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from '../store/configureStore';
import {App} from "./App";
import {loadCourses} from '../actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);