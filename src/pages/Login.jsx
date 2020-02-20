import React, { Component } from 'react';
import {authService} from "../services/auth.service";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        
    }
    login() {
        authService.login();
    }
    render() {
        return (
            <div>
                <h1>LOGIN PAGE!</h1>
                <button onClick={this.login}>Facebook</button>
            </div>
        )
    }
}

export default Login;
