import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Training extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }



    render() {
        return (
            <div>
                <h1>Training PAGE!</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Training;