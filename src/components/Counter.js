import React, {Component} from 'react';

import classes from './Counter.module.css';
import {connect} from 'react-redux'; // It's automatically makes a subscription to the Store for this component

// Redux in class base component
class Counter extends Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type:'increment'}),
    decrement: () => dispatch({type:'decrement'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
