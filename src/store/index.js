import {createSlice, configureStore} from '@reduxjs/toolkit';

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
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

// For single slice
// const store = configureStore({
//     reducer: counterSlice.reducer
// });

// For multiple slices
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;