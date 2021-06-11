const redux = require('redux');

// FunctionReducer
// current state and the acction to do
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }

    return state;
};

// Data Store
const store = redux.createStore(counterReducer);

// Subscriber
// it does not receive any parameter
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(counterSubscriber);

//Dispatch
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'decrement'
})