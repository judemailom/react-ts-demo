Scope:
- Basic typescript react (syntax, structure, etc)
- Basic routing (no frameworks)
- PropTypes
    - set expectation of necessary properties to pass (sort of call signature for components)
    - prop validation not ran on production environment
    - in typescript: interface, structural subtyping https://www.typescriptlang.org/docs/handbook/interfaces.html (not exactly prop validation, but this one is preferred over prop validation since it is not being ran in production)
    - https://stackoverflow.com/a/37233777
- Controller Views
    - top level react component that passes properties to child components 
    - smart vs dumb components (container vs presentation, stateful vs stateless, controller view vs view)
    - "When you notice that some components don’t use the props they receive but merely forward them down and you have to rewire all those intermediate components any time the children need more data, it’s a good time to introduce some container components. This way you can get the data and the behavior props to the leaf components without burdening the unrelated components in the middle of the tree."
- Composition +

Compiling:
- run webpack-dev-server --progress on command line
- open http://localhost:8080/index.html

Questions/Notes:
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
- props - immutable ; state - mutable