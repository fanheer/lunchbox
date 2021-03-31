import React, { Component } from 'react'
import './index.less'

export default class test extends Component {
    render() {
        return (
          <div className="test-container">
            <div className="container">
              <div className="div">我是一个div</div>
              <div className="div">我是一个很多字div</div>
              <div className="div">我是一个更多字而且第三个div</div>
            </div>
          </div>
        );
    }
}
