import React, { Component, Fragment } from 'react'

export default class Demo4 extends Component {
    render() {
        return (
            // fragment可以替代div最终页面中不会显示
            //也可以使用<></>
            <Fragment>
                <input type='text'/>
                <input type='text'/>
            </Fragment>
        )
    }
}
