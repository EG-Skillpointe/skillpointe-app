import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AmbassadorCard, JobsCard} from "../components";



class JobSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }



    render() {
        return (
            <div>
                <h1>JobSearch PAGE!</h1>
                {/*<AmbassadorCard>Hello</AmbassadorCard>*/}
                <JobsCard/>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default JobSearch;
