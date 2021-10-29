import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    
    render() {
        return (
            // <NavLink activeClassName="active" className="list-group-item" {...this.props}>
            //     {/* 通过 children 拿到标签body的内容,通过props传递自定义内容 */}
            //   {this.props.children}
            // </NavLink>
            // 简写 因为children也在props里 而且和navlink同名
            <NavLink activeClassName="active" className="list-group-item" {...this.props}/>
        )
    }
}
