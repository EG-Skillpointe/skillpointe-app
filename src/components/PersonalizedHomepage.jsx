import React , { Component } from 'react';
import { Notification, CardCarousel, BuildProfile, CareerPathways, CareerCompass, SimpleCard, CompareCareers } from "../components";
import weldingBackground from "../assets/images/welding.jpeg";
import wrenchIcon from "../assets/images/wrench.svg";
import supervisorIcon from "../assets/images/supervisor_account.svg";
import careers from '../assets/mockData/careers.json';
import articleList from '../assets/mockData/articles.json';


class PersonalizedHomepage extends Component {


	render() {

		return (
			<>
				<div className='pers-home-landing'>

					<div className='pers-landing-content'>
						<h1>Welcome Back, Ricky</h1>

						<Notification title='Notification' message='Notice on your application to Lawernceville asdf asdf asdf asdf' />

						<CareerCompass/>

						<CompareCareers career1={careers['plumbing']} career2={careers['carpentry']} />

						<div className='pers-simple-cards'>
							<SimpleCard image={wrenchIcon} message='Training Opportunities in Your Area'/>
							<SimpleCard image={supervisorIcon} message='Join Relevant Discussion Groups Near You'/>
						</div>
						
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
