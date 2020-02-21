import React, { Component } from 'react';
import {SignIn, SignUp} from "../components";

import { Link } from "react-router-dom";

import {authService} from "../services/auth.service";
 

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signInToggle: true
        };
    }

    componentDidMount() {
        
    }

    toggleSignIn = () => {
        this.setState({
            signInToggle: !this.state.signInToggle
        })
    }

    login(type) {
        console.log('login clicked with type:', type)

        switch(type) {
            case 1: // do Regular login
                console.log(`doing type ${type} login...`);
            break;
            case 2: // do Google login
                console.log(`doing type ${type} login...`);
            break;
            case 3: // do Facebook login
                console.log(`doing type ${type} login...`);
            break;
            default: console.log('login type not found. Type:', type);
        }
        
        // let res = authService.login();
        console.log('login finished.');
    }

    logout() {
        console.log('logout clicked 1')
        authService.logout();
    }


    render() {
        const googleButton = 
            <button className="tp-login-button goog" onClick={() => this.login(2)}>
                <div className="tp-login-contents">
                    <div>
                        <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g>
                        </svg>
                    </div>
                    <span className="tp-login-span">Continue with Google</span>
                </div>
            </button>

        const facebookButton = 
            <button className="tp-login-button fb" onClick={() => this.login(3)}>
                <div className="tp-login-contents">
                <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png" alt="" width="24" height="24"></img>
                    <span className="tp-login-span fb-span">Continue with Facebook</span>
                </div>
            </button>




        return (
            <div className="login-container container">
                <h1>LOGIN PAGE!</h1>
                <Link to="/">Home</Link>
                <button onClick={this.login}>Facebook</button>
                <button onClick={this.logout}>logout</button>

                {
                    this.state.signInToggle
                    ? <SignIn toggle={this.toggleSignIn} login={this.login}/> 
                    : <SignUp toggle={this.toggleSignIn} login={this.login}/>
                }

                <label>OR</label>
                { googleButton }
                { facebookButton }
                
            </div>
        );
    }
}

export default Login;
