import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AmbassadorCard, CardCarousel} from '../components'



class Careers extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }



    render() {
        return (
            <div>
                <h1>Careers PAGE!</h1>
                <CardCarousel/>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Careers;
