const {createStore} = require('redux');

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
const store = createStore(counterReducer);

export default store;