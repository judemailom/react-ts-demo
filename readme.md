# Scope
## Basic typescript react (syntax, structure, etc)
## Basic routing
    - react-router
    - https://github.com/ReactTraining/react-router
    - basic routing with Router components
## PropTypes
    - set expectation of necessary properties to pass (sort of call signature for components)
    - prop validation not ran on production environment
    - in typescript: interface, structural subtyping https://www.typescriptlang.org/docs/handbook/interfaces.html (not exactly prop validation, but this one is preferred over prop validation since it is not being ran in production)
    - https://stackoverflow.com/a/37233777
## Controller Views
    - top level react component that passes properties to child components 
    - smart vs dumb components (container vs presentation, stateful vs stateless, controller view vs view)
    - "When you notice that some components don’t use the props they receive but merely forward them down and you have to rewire all those intermediate components any time the children need more data, it’s a good time to introduce some container components. This way you can get the data and the behavior props to the leaf components without burdening the unrelated components in the middle of the tree."
## Container component
    - CoursesPage.tsx
    - constructor - init state, bind callbacks
    - child functions - called by render
    - render - usually should call child components
    - redux connect with mapStateToProps, mapDispatchToProps functions
## Action Creator
    - events happening in the app
    - function returning a plain object describing the event
    - ``` createCourse(course) { return {type: CREATE_COURSE, course: course} }``` params should be serializable
    - actions are being dispatched and affects data in the store
## Store
    - conceptually, central client-side database
    - one immutable store (only action trigger changes, reducers update state) => reducer(state,action) returns a new state
    - immutability - to change state, you have to return a new object instead of modifying the object
    - ```function(params:string){return x;} where x is int -- is the same with -- (params:string):int => {}```
    - one store multiple reducer
## Reducer
    - function that handles data changes
    - takes state and an action and returns a new state
## React-redux
    - Provider component ```<Provider store={this.props.store}> <App/> </Provider>``` allows the app to access the store across the application
    - connect function ```export default connect(mapStateToProps,mapDispatchToProps) (CoursesPage);``` accepts states and actions you want to expose from the store

# Compiling
- run webpack-dev-server --progress on command line
- open http://localhost:8089

# Questions/Notes
- state
- rendering
- promise (async calls)
- App.tsx container is master? - QUINO
- why some components have their own index.ts? - QUINO
- main.tsx is index - QUINO
- index.ts purpose? - QUINO
- what are routes and reducers?
- react is controller view
- React Life Cycle exists! could occcur on server/client side(?)

# Glossary
- Props
    - immutable arbitrary inputs that each component accepts
    - pure means function/class does not change any param sent to it, react components should be pure wrt props
- State - mutable inputs that are passed through components
- Action - type of change that will happen
- Reducer - pure functions that generates changes by creating modified copies of the state (state + action)
- Spread operator (```...```) - creates a shallow copy of a class
- Component - presentation, data-agnostic, usually written as functional state components
- Container - wraps components, passes data, connect()
- Store - global state of the app
- Promise - an object representing the eventual completion or failure of an asynchronous operation.