import React , { Component } from 'react';
import { Notification, AmbassadorHomepageCard } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import ambassadorImage from "../assets/images/atlanta_technical.jpeg";


class PersonalizedHomepage extends Component {

	render() {
		const ambassadorDescription = "A welder for 20 years, meet Gavin Barnes. Find out how he got into the industry and why he would recommend welding for someone searching for a career path."


		return (
			<>
				<div className='pers-home-landing'>
					<img className='landing-img' src={landingBackground} alt='landingBackground' />

					<div className='pers-landing-content'>
						<h1>Welcome back, Ricky</h1>

						{ <Notification title='Notif Title' message='Notice on your application to Larenceville asdf asdf asdf asdf' /> }

						{ <AmbassadorHomepageCard firstname='Gavin' description={ambassadorDescription} image={ambassadorImage} /> }
					</div>
					
				</div>
			</>
		);
	}
}

export default PersonalizedHomepage;