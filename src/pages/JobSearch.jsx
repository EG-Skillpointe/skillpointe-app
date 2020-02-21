import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AmbassadorCard} from "../components";


class JobSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }



    render() {
        return (
            <div>
                <h1>JobSearch PAGE!</h1>
                <AmbassadorCard>Hello</AmbassadorCard>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default JobSearch;
