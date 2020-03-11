import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Video, Popup } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import downArrow from "../assets/images/arrow_down.svg";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {Button} from "react-bootstrap";
import {authService} from "../services/auth.service";
import Modal from "react-modal";

const options1 = [
	'A Career Path', 'Training', 'Financial Aide', 'People', 'Jobs'
];

const options2 = [
	'Welding', 'Nursing', 'Carpentry', 'Plumbing', 'Human Services'
];

const defaultStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-40%',
		transform             : 'translate(-50%, -50%)',
	}
};

class RegularHomepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			userSearch: null,
			jobType: null,
			showPopup: false
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	onReasonForJoiningFormChange = (event) => {
		console.log(event);

		switch(event.value) {
			case "A Career Path":
				console.log(`doing type ${event.value} login...`);
				this.setState({userSearch: 'Career'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Training":
				console.log(`doing type ${event.value} login...`);
				this.setState({userSearch: 'Training'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Financial Aide":
				console.log(`doing type ${event.value} login...`);
				this.setState({userSearch: 'Financial Aide'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "People":
				console.log(`doing type ${event.value} login...`);
				this.setState({userSearch: 'People'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Jobs":
				console.log(`doing type ${event.value} login...`);
				this.setState({userSearch: 'Jobs'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			default: console.log('userType not found. Type:', event.value);
		}
	};

	homepageSearch = () => {
		let userSearch = this.state.userSearch;
		let jobType = this.state.jobType;

		if (!userSearch || !jobType) {
			console.log('neither userSearch or jobType selected');
			this.setState({
				showPopUp: !this.state.showPopUp
			});
		}

		switch(userSearch) {
			case 'Career':
				// career
				console.log(`searching ${userSearch}`);
				this.props.history.push("/career-landing");
				break;

			case 'Training':
				// training
				console.log(`searching ${userSearch}`);
				this.props.history.push("/training");
				break;

			case 'Financial Aide':
				// job
				console.log(`searching ${userSearch}`);
				this.props.history.push("/");
				break;

			case 'People':
				// people
				console.log(`searching ${userSearch}`);
				this.props.history.push("/");
				break;

			case 'Jobs':
				// jobs
				console.log(`searching ${userSearch}`);
				this.props.history.push("/");
				break;

			case null:
				// nothing
				console.log(`userSearch is empty`);
				break;

			default:
				// default
				console.log(`${userSearch} not found`);
				break;
		}

		console.log('search finished.');
	};

	togglePopup = () => {
		this.setState({
			showPopUp: !this.state.showPopUp
		});
	};

	onAllow = () => {
		localStorage.setItem('location', 'Atlanta, GA');
		this.setState({showPopUp: !this.state.showPopUp})
	};

	render() {
		return (
			<div>
				<Modal isOpen={this.state.showPopUp} onRequestClose={this.togglePopup}
					   contentLabel="Delete Check"
					   style={defaultStyles}>
					<h2 style={{padding:'10px'}}>SkillPointe would like to use your current location?</h2>
					<button className="popup-button"  onClick={this.togglePopup}>Don't Allow</button>
					<button className="popup-button"  onClick={this.onAllow}>Allow</button>
				</Modal>

				<div className='home-landing'>
					<div className='landing-content'>
						<h1>Get Excited About Your Future</h1>
						<p>SkillPointe is a movement celebrating skills-based professionals and their contributions.</p>
						<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
							<Dropdown onChange={(event) => this.onReasonForJoiningFormChange(event)} placeholder="I am searching for..." arrowClassName='custom-dropdown-arrow' options={options1} value={this.state.userSearch}/>
							<Dropdown placeholder="Select one" arrowClassName='custom-dropdown-arrow' options={options2} />
							<Button onClick={this.homepageSearch} style={{background:"#F8A141", border:"none", marginTop:"20px", fontSize:"18px", width:"50%"}}>
								Search
							</Button>
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
			</div>
		);
	}
};

export default RegularHomepage;


