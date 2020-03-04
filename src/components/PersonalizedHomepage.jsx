import React , { Component } from 'react';
import { Notification } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";


class PersonalizedHomepage extends Component {

	render() {
		return (
			<>
				<div className='pers-home-landing'>
					<img className='landing-img' src={landingBackground} alt='landingBackground' />

					<div className='pers-landing-content'>
						<h1>Welcome back, Ricky</h1>

						{ <Notification title='Notif Title' message='Notice on your application to Larenceville asdf asdf asdf asdf' /> }
					</div>
					
				</div>
			</>
		);
	}
}

export default PersonalizedHomepage;