import React, { Component } from "react";
import styles from "./XClassComp.module.css";

export default class Xcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Counter App</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
      </div>
    );
  }
}


/* 

  return (
    <div styles='display:flex; background-color: blue'>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className={styles.btn} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
*/