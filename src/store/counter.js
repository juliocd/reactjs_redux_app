import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
// Redux toolkit: Allows to manipulate the state object directly, because it detects that type of
// actions and uses an internal package called immer to clone the state object, this way it is 
// traslated internally as unmutable code
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
             // retrieve multiple arguments by the payload
            console.log(action.payload.amount, action.payload.arg2, action.payload.arg3)
            state.counter = state.counter + action.payload.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;