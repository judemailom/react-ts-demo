import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from '../store/configureStore';
import {App} from "./App";
import {loadCourses} from '../actions/courseActions';
import {loadAuthors} from '../actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);