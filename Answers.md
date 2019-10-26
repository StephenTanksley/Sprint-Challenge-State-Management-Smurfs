1. What problem does the context API help solve?

    The context API is designed to solve the problem of prop drilling in deeply nested components. It allows a component to sidestep the normal fashion of passing props down through a complex chain of components (some of which might not even need that data) to the components down the chain which do require it.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Objects which describe what type of `action` has taken place and allow the reducer to respond appropriately. The action also has an optional `payload` which could be attached if some transformation of the payload is also required.

    Reducers: `reducers` are based on the switch statement structure in JS. It allows us to construct a finite state machine to describe what actions should be undertaken when our application shifts from one state to another.

    Store: `Store` is known as the single source of truth in a redux app because the `store` houses the application's overarching state. The flow of data is unidirectional and flows from the store to the UI. The only way to update the UI is to update the `store`.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state: overarching state which covers the entire application. If data is used in multiple places throughout the application and its various components, application state might be called for.

    Component state: state localized to a component and perhaps just its child components. It might be overkill to use application state if all we're doing is hosting the results of a form and then using it in one place. Component state feels like a better match for that use case.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk allows us to return a function instead of an action inside our action creators. It also gives access to the dispatch method. This lets us decouple Redux from a synchronous workflow so we can use it for things like API calls by creating finite state machines that we can easily control.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I prefer Redux, personally. The notion of having a single place to go for state makes it simple for me. Setting it up takes more work, admittedly, but being able to have my state and dispatch controlled in a single place is infinitely preferable to having disconnected state that I need to go hunting for. 