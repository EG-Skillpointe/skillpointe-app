import React , { Component } from 'react';
import { Notification, AmbassadorHomepageCard, CardCarousel } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import ambassadorImage from "../assets/images/atlanta_technical.jpeg";


class PersonalizedHomepage extends Component {

	render() {
		const ambassadorDescription = "A welder for 20 years, meet Gavin Barnes. Find out how he got into the industry and why he would recommend welding for someone searching for a career path."

		const articleList = [
			{
				title: 'School District Receives Welding Equipment Donation',
				date: 'Monday Jan 20, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			},
			{
				title: 'Local Atlanta High School Offers Free Welding Classes to Students',
				date: 'Wesnesday March 3, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			},
			{
				title: 'YOOOOOOO e Welding Classes to Students',
				date: 'Wesnesday March 3, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			},
			{
				title: 'YOOOOASDFASfes to Students',
				date: 'Wesnesday March 3, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			}
		]

		return (
			<>
				<div className='pers-home-landing'>
					<img className='landing-img' src={landingBackground} alt='landingBackground' />

					<div className='pers-landing-content'>
						<h1>Welcome back, Ricky</h1>

						{ <Notification title='Notif Title' message='Notice on your application to Larenceville asdf asdf asdf asdf' /> }

						{ <AmbassadorHomepageCard firstname='Gavin' description={ambassadorDescription} image={ambassadorImage} /> }

						<div class='no-margin'>
							<CardCarousel cardType="article" articleCards={articleList}/>
						</div>
						
					</div>
					
				</div>
			</>
		);
	}
}

export default PersonalizedHomepage;