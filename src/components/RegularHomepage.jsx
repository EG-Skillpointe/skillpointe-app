import React from 'react';
import { Link } from "react-router-dom";
import { Video } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import downArrow from "../assets/images/arrow_down.svg";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options1 = [
	'A Career Path', 'Training', 'Financial Aide', 'People', 'Jobs'
];

const options2 = [
	'Welding', 'Nursing', 'Carpentry', 'Plumbing', 'Human Services'
];

export const RegularHomepage = (props) => {
	return (
		<>
			<div className='home-landing'>
				<div className='landing-content'>
					<h1>Get Excited About Your Future</h1>
					<p>SkillPointe is a movement celebrating skills-based professionals and their contributions.</p>
					<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
						<Dropdown placeholder="I am searching for..." arrowClassName='custom-dropdown-arrow' options={options1} />
						<Dropdown placeholder="Select one" arrowClassName='custom-dropdown-arrow' options={options2} />
						<Link to=''><button className='orange-button' style={{borderRadius:"5px", width:"170px", height:"20px"}}>Search</button></Link>
					</div>
				</div>
				<img className='landing-img' src={landingBackground} alt='landingBackground' />
			</div>

			<div className='home-about'>
				<h1 style={{fontSize:"28px", fontWeight:"700", margin:"30px 0"}}>About SkillPointe</h1>
				<Video video={homepageVideo} type='video/mp4'/>
				<p align="left">
					SkillPointe is championing a movement for skills-based workers.<br></br> <br></br>Skills-based professionals build things for us, care for us, and make our lives better. Despite their importance, these workers have been undervalued, and the shortage of skills-based labor continues to grow. Given the critical roles these professionals play in construction, healthcare, energy, manufacturing, and other fields, we created an online destination built explicitly for them.<br></br> <br></br>More than a simple job board, Skillpointe is a platform working to change the perception surrounding skills-based work. Within SkillPointe, job seekers can explore training opportunities, professionals can connect with potential employers, trainers can promote their programs, and students can explore career paths.<br></br> <br></br>We welcome you to join the SkillPointe movement.
				</p>
				<Link to='./login'><button className='orange-button' style={{borderRadius:"5px"}}>Join the Movement</button></Link>
			</div>

			{/*<div style={{display:"inline-block", backgroundColor:"#DADADA", height:"auto"}}>*/}
			{/*	<div className="home-arrow-header">*/}
			{/*		Explore Careers*/}
			{/*		<Link to="/career-landing">*/}
			{/*			<img src={rightArrow} alt="right-arrow"/>*/}
			{/*		</Link>*/}
			{/*	</div>*/}

			{/*	<div className="row" style={{margin:'0', padding:"0 20px 20px"}}>*/}
			{/*		{industries.industries.map(industry => { return <Link to={{*/}
			{/*			pathname:'./career/welding',*/}
			{/*			aboutProps:{*/}
			{/*				name: industry.name*/}
			{/*			}}}><CareerCard industry={industry}/></Link>})}*/}
			{/*	</div>*/}

			{/*	<FindJobs/>*/}

			{/*	<WeldingSchools smallVersion={true}/>*/}
			{/*</div>*/}

			{/*<div>*/}
			{/*	<div className="home-arrow-header">*/}
			{/*		Explore Careers*/}
			{/*		<Link to="/career-landing">*/}
			{/*			<img src={rightArrow} alt="right-arrow"/>*/}
			{/*		</Link>*/}
			{/*	</div>*/}
			{/*	<CardCarousel cardType="ambassador"/>*/}
			{/*</div>*/}

			{/*<div>*/}
			{/*	<div className="home-arrow-header">*/}
			{/*		Find Jobs*/}
			{/*		<Link to="/jobsearch">*/}
			{/*			<img src={rightArrow} alt="right-arrow"/>*/}
			{/*		</Link>*/}
			{/*	</div>*/}
			{/*	<CardCarousel cardType="job"/>*/}
			{/*</div>*/}

			{/*<div>*/}
			{/*	<div className="home-arrow-header">*/}
			{/*		Find Training*/}
			{/*		<Link to="/training">*/}
			{/*			<img src={rightArrow} alt="right-arrow"/>*/}
			{/*		</Link>*/}
			{/*	</div>*/}
			{/*	<CardCarousel cardType="training"/>*/}
			{/*</div>*/}


		</>
	);
};

export default RegularHomepage;


