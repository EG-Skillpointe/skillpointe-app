import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div className="container">
                <h1>HOME PAGE!</h1>
                <Link to="/training">Training  </Link>
                <Link to="/jobsearch">Job Search  </Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default HomePage;