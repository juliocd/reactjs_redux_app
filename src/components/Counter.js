import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'; // It's automatically makes a subscription to the Store for this component

// Redux in functional component
const Counter = () => {
  const dispatch = useDispatch();
  // This hook allow us to select an specific value into the estate object returned from the Store
  const counter = useSelector(state => state.counter)

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type:'increment'});
  };

  const decrementHandler = () => {
    dispatch({type:'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
