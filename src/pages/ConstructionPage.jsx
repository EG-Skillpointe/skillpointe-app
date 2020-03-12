import React, { Component } from 'react';
import logo from "../assets/images/skillpointelogo_blue.png";

class ConstructionPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}
	
	handleWindowSizeChange = () => {
		if(window.innerWidth < 500) {
			window.location.replace('/')
		}
	};

    render() {
        return (
            <div className='construction-page'>
                    <img className="construction-image" src={logo}></img>
                    <h1 className="construction-header">This website was optimized for mobile.</h1>
                    <p className="construction-subtitle">Please visit this website on a mobile device to experience Skillpointe.</p>
            </div>
        )
    }
}

export default ConstructionPage;
