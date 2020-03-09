import React , { Component } from 'react';
import { Notification, AmbassadorHomepageCardV2, CardCarousel, BuildProfile, CareerPathways, CareerCompass, SimpleCard, CompareCareers } from "../components";
import weldingBackground from "../assets/images/welding.jpeg";
import ambassadorImage from "../assets/images/atlanta_technical.jpeg";
import wrenchIcon from "../assets/images/wrench.svg";
import supervisorIcon from "../assets/images/supervisor_account.svg";
import careers from '../assets/mockData/careers.json';




class PersonalizedHomepage extends Component {

	render() {
		const ambassadorDescription = "A defining trait for Travis Edmunds is curiosity. He likes to understand how things work and reach beyond his comfort zone."

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
				title: 'How to Get Financial Aid for Welding Programs',
				date: 'Monday Jan 20, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			},
			{
				title: 'Requirements for Applying to Welding Trade School',
				date: 'Wesnesday March 3, 2020',
				description: 'Lorem ipsum dolor sit amet ornarne pretium plavearat ut platea, putus.',
				link: 'asdf'
			}
		]

		return (
			<>
				<div className='pers-home-landing'>

					<div className='pers-landing-content'>
						<h1>Welcome back, Ricky</h1>

						<Notification title='Notif Title' message='Notice on your application to Larenceville asdf asdf asdf asdf' />

						<CareerCompass/>

						<CompareCareers career1={careers['plumbing']} career2={careers['carpentry']}/>

						<div className='pers-simple-cards'>
							<SimpleCard image={wrenchIcon} message='Training Opportunities in Your Area'/>
							<SimpleCard image={supervisorIcon} message='Join Relevant Discussion Groups'/>
						</div>
						
						{/* <AmbassadorHomepageCardV2 industry="Welding" firstname='Travis' description={ambassadorDescription} image={ambassadorImage} /> */}

						<div style={{marginBottom:"12px", height:"37px", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center",background: "#DADADA", borderRadius: "6px"}}>
                    		<h6 style={{padding:"0", margin:"0", fontSize:"20px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Articles For You</b></h6>
                    	</div>

						<div class='no-margin'>
							<CardCarousel cardType="article" articleCards={articleList}/>
						</div>

						<CareerPathways/>

						<BuildProfile/>

					</div>
					<img className='landing-img' src={weldingBackground} alt='landingBackground' />
				</div>
			</>
		);
	}
}

export default PersonalizedHomepage;