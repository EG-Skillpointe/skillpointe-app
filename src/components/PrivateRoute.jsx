/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';

class PrivateRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuth: null
        };
    }
    
    checkAuth() {
        authService.isAuthenticated().then((val) => {
            this.setState({
                isAuth: val
            });
        });
    }

    //TODO: find a better way to do this
    UNSAFE_componentWillReceiveProps() {
        this.checkAuth();
    }

    componentDidMount() {
        if(this.state.isAuth !== null) {
            this.checkAuth();
        }
    }

    render() {
        const {component: Component, ...rest} = this.props;

        if(this.state.isAuth === null) {
            this.checkAuth();
            return null;
        } else {
            return (
                <Route {...rest} render={props => (
                    this.state.isAuth
                    ? ( <Component {...props} /> ) 
                    : ( <Redirect to={{pathname: '/login', state: {from: props.location }}}/> )
                )}/>
            );
        }
    }
}

export default PrivateRoute;