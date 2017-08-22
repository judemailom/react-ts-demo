/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Homepage_1 = __webpack_require__(3);
var AboutPage_1 = __webpack_require__(4);
var AuthorPage_1 = __webpack_require__(5);
var Header_1 = __webpack_require__(9);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        if (this.props.route == "about") {
            return React.createElement("div", null,
                " ",
                React.createElement(Header_1.Header, null),
                " ",
                React.createElement(AboutPage_1.About, null),
                " ");
        }
        else if (this.props.route == "author") {
            return React.createElement("div", null,
                " ",
                React.createElement(Header_1.Header, null),
                " ",
                React.createElement(AuthorPage_1.Author, null),
                " ");
        }
        return React.createElement("div", null,
            " ",
            React.createElement(Header_1.Header, null),
            " ",
            React.createElement(Homepage_1.Home, null),
            " ");
    };
    return App;
}(React.Component));
function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(React.createElement(App, { route: route }), document.getElementById("root"));
}
window.addEventListener('hashchange', render);
render();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, "Reat Typescript Demo - Micron"),
            React.createElement("p", null, "This will serve as a react style guide bla bla bla"));
    };
    return Home;
}(React.Component));
exports.Home = Home;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, "About"),
            React.createElement("p", null,
                "This application uses the ff technologies:",
                React.createElement("ul", null,
                    React.createElement("li", null, "React"),
                    React.createElement("li", null, "TypeScript"),
                    React.createElement("li", null, "React Router"),
                    React.createElement("li", null, "Webpack"),
                    React.createElement("li", null, "*Bootstrap!"))));
    };
    return About;
}(React.Component));
exports.About = About;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var AuthorList_1 = __webpack_require__(6);
var AuthorApi_1 = __webpack_require__(7);
var Author = (function (_super) {
    __extends(Author, _super);
    function Author(authors) {
        var _this = _super.call(this, authors) || this;
        _this.state = {
            authors: []
        };
        return _this;
    }
    Author.prototype.componentDidMount = function () {
        var x = new AuthorApi_1.AuthorApi();
        this.setState({ authors: x.getAllAuthors() });
    };
    Author.prototype.render = function () {
        function createAuthorRow(authors) {
            return (React.createElement("tr", { key: authors.id },
                React.createElement("td", null,
                    React.createElement("a", { href: "#" }, authors.id)),
                React.createElement("td", null,
                    authors.firstName,
                    " ",
                    authors.lastName)));
        }
        return (React.createElement("div", null,
            React.createElement("h1", null, "Authors"),
            React.createElement(AuthorList_1.AuthorList, { authors: this.state.authors })));
    };
    return Author;
}(React.Component));
exports.Author = Author;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var AuthorList = (function (_super) {
    __extends(AuthorList, _super);
    function AuthorList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorList.prototype.render = function () {
        function createAuthorRow(authors) {
            return (React.createElement("tr", { key: authors.id },
                React.createElement("td", null,
                    React.createElement("a", { href: "#" }, authors.id)),
                React.createElement("td", null,
                    authors.firstName,
                    " ",
                    authors.lastName)));
        }
        return (React.createElement("div", null,
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Name"))),
                React.createElement("tbody", null, this.props.authors.map(createAuthorRow, this)))));
    };
    return AuthorList;
}(React.Component));
exports.AuthorList = AuthorList;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//This file is mocking a web API by hitting hard coded data.
var MockApi_1 = __webpack_require__(8);
exports.OAuthor = MockApi_1.OAuthor;
var AuthorApi = (function () {
    function AuthorApi() {
    }
    AuthorApi.prototype.getAllAuthors = function () {
        var mock = new MockApi_1.MockApi();
        return JSON.parse(JSON.stringify(mock.authors)); //_clone(authors); 
    };
    AuthorApi.prototype.getAuthorById = function (id) {
        //var x = Authors;
        var mock = new MockApi_1.MockApi();
        return JSON.parse(JSON.stringify(mock.authors[0])); //_clone(author);
    };
    AuthorApi.prototype.saveAuthor = function (author) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        // if (author.id) {
        // 	var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
        // 	authors.splice(existingAuthorIndex, 1, author);
        // } else {
        // 	//Just simulating creation here.
        // 	//The server would generate ids for new authors in a real app.
        // 	//Cloning so copy returned is passed by value rather than by reference.
        // 	author.id = _generateId(author);
        // 	authors.push(author);
        // }
        return ""; //_clone(author);
    };
    AuthorApi.prototype.deleteAuthor = function (id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        //_.remove(authors, { id: id});
    };
    return AuthorApi;
}());
exports.AuthorApi = AuthorApi;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OAuthor = (function () {
    function OAuthor() {
    }
    return OAuthor;
}());
exports.OAuthor = OAuthor;
var MockApi = (function () {
    function MockApi() {
        this.authors =
            [
                {
                    id: 'cory-house',
                    firstName: 'Cory',
                    lastName: 'House'
                },
                {
                    id: 'scott-allen',
                    firstName: 'Scott',
                    lastName: 'Allen'
                },
                {
                    id: 'dan-wahlin',
                    firstName: 'Dan',
                    lastName: 'Wahlin'
                }
            ];
    }
    ;
    return MockApi;
}());
exports.MockApi = MockApi;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return React.createElement("nav", { className: "navbar navbar-default" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("ul", { className: "nav navbar-nav" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#", className: "navbar-brand" },
                            React.createElement("img", { src: "https://d95l2cutluxyk.cloudfront.net/cem_MICRON/firm_logos/478_11.png" }))),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "Home")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#about" }, "About")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#author" }, "Authors")))));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map