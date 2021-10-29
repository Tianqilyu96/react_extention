import React, { Component } from "react";

export default class Demo extends Component {
  state = { sum: 0 };
  increment = () => {
    let { sum } = this.state;
    sum++;
    //后边的callback会在render完之后调用，这个state就是最新的
    this.setState({ sum }, () => {
      console.log(this.state.sum);
    });
    //因为setstate异步所以这里的state还是之前的
    console.log(this.state.sum);
  };

  incrementTwo = () => {
    //函数式setState，可接受state，props
    this.setState((state, props) => {
      //return 一个state obj
      return { sum: state.sum + 2 };
    });
  };

  render() {
    return (
      <div>
        <h2>Sum is:{this.state.sum}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.incrementTwo}>+2</button>
      </div>
    );
  }
}
