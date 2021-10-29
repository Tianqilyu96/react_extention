import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return <div>AASDNWUD
        <button onClick={()=>{this.props.history.goBack()}}>GO Back</button>
    </div>;
  }
}

//使普通组件拥有router组件的props
export default withRouter(Header);
