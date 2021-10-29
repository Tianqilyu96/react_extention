//引入lazy函数
//懒加载就是不一次性加载所有路由组件，只有要用的时候才加载
import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//不用import引入
// import Home from "./pages/Home";
// import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

//懒加载 用lazy函数引入路由组件
//NO {}!!! else will cause error
const Home = lazy(() => 
  import("./pages/Home"));
const About = lazy(() => 
  import("./pages/About"));

export default class Demo2 extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about/a/b">About</MyNavLink>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  {/* lazyload component要放在Suspense组件里， suspense需要配置一个fallback默认组件 */}
                <Suspense fallback={<h1>loading...</h1>}>
                  <Switch>
                    <Route exact path="/about/a/b" component={About} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/about" />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
