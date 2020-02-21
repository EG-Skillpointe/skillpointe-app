import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {authService} from "../services/auth.service";
 

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        
    }

    login() {
        console.log('login clicked 1')
        let res = authService.login();
        console.log('ASDF ', res)
    }

    logout() {
        console.log('logout clicked 1')
        authService.logout();
    }


    render() {
        return (
            <div>
                <h1>LOGIN PAGE!</h1>
                <Link to="/">Home</Link>
                <button onClick={this.login}>Facebook</button>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Login;
