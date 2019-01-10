import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {


  increment = () => {
    increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };

  increment5 = () => {
    increment = () => {
    this.props.dispatch({
      type: 'Increment5'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  decrement10 = () => {
    this.props.dispatch({
      type: 'Decrement10'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };


  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.decrement10}>-10</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.increment5}>+5</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
return {
  count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
