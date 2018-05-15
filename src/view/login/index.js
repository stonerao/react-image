import React, { Component } from 'react';
import '../../styles/login.scss'
class App extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            title: "啦啦啦啦我们画画吧"
        }

    }
    getPassword(path) {
        console.log(this)
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="login">
                <div className="login-b"></div>
                <div className="login-img"></div>
                <div className="login-center position-center">
                    <h1 className="login-title">{this.state.title}</h1>
                    <ul className="login-list">
                        <li>
                            <input type="text" placeholder="账号" />
                        </li>
                        <li>
                            <input type="password" placeholder="密码" />
                        </li>
                        <li>
                            <button className="login-submit">确认</button>
                        </li>
                        <li className="login-link">
                            <span onClick={() => { this.getPassword("/getPassword") }}>忘记密码</span>
                            <span onClick={() => { this.getPassword("/reg") }}>注册</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;