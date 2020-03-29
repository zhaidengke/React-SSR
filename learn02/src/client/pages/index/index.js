// /src/client/pages/index/index.js
// index 组件

import React from 'react';

// 组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('一起来玩 react ssr 呀。')
    }

    render() {
        return (
            <h1 onClick={this.handleClick}>click here !</h1>
        )
    }
}