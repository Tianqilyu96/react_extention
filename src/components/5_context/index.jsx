import React, { Component } from "react";

//创建context对象
const MyContext = React.createContext();

//利用context逐层传递state-祖先与后代之间的通信
export default class A extends Component {
  state = { name: "This is A state" };

  render() {
    return (
      <div>
        <h2>This is A</h2>
        <h2>My state is: {this.state.name}</h2>
        {/* 用provider包裹子组件 传递state写在value里，可以是object*/}
        <MyContext.Provider value={this.state.name}>
          <B />
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h2>This is B</h2>
        {/* B收不到因为没声明 */}
        <h2>State A={">"}B:{this.context}</h2>
        <C />
      </div>
    );
  }
}

class C extends Component {

    //声明接收context
    static contextType =  MyContext
  render() {
    return (
      <div>
        <h2>This is C</h2>
        <h2>
          State A={">"}B={">"}C:{this.context}
        </h2>
      </div>
    );
  }
}

function D(){
    return (
        <div>This is D, state:
            {/* 这种方式class和function都可以用 */}
            {/* 用Consumer包裹一个函数，这个函数可以接收到value-state，return显示内容 */}
            <MyContext.Consumer>
                {value=> `Lalala${value}`}
            </MyContext.Consumer>
        </div>
    )
}