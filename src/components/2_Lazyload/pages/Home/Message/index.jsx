import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";
import {Button} from "antd";
import "antd/dist/antd.css"

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "message001" },
      { id: "02", title: "message002" },
      { id: "03", title: "message003" },
    ],
  };

  //编程式路由-params参数
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };



  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((el) => {
            return (
              <li key={el.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${el.id}/${el.title}`}>
                  {el.title}</Link>
                  &nbsp;
                  <Button type="primary" onClick={() => this.pushShow(el.id, el.title)}>
                    Push
                  </Button>
                  &nbsp;
                  <Button type="default" onClick={() => this.replaceShow(el.id, el.title)}>
                    Replace
                  </Button>
                
                {/* 向路由组件传递search参数 类似于AJAX中的query */}
                {/* <Link to={`/home/message/detail/?id=${el.id}&title=${el.title}`}>
                  {el.title}
                </Link> */}
                {/* 向路由组件传递state参数--不会在地址栏中出现 */}
                {/*history 是 stack结构*/}
                {/* replace 替换历史记录-不同于push，倒不回去 */}

                {/* <Link
                  replace
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: el.id, title: el.title },
                  }}
                >
                  {el.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数-detail可以收到 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state参数无需接受 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
