import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Video } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {Button} from "react-bootstrap";
import Modal from "react-modal";

const options1 = [
	'A Career Path', 'Training', 'Financial Aid', 'People', 'Jobs'
];

const options2 = [
	'Welding', 'Nursing', 'Carpentry', 'Plumbing', 'Human Services'
];

const modalStyle = {
	content : {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		zIndex: "900 !important",
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		opacity: "1",
		marginRight: '-40%',
		transform: 'translate(-50%, -50%)'
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

	onUserSearchDropdownChange = (event) => {

		switch(event.value) {
			case "A Career Path":
				this.setState({userSearch: 'A Career Path'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Training":
				this.setState({userSearch: 'Training'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Financial Aid":
				this.setState({userSearch: 'Financial Aid'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "People":
				this.setState({userSearch: 'People'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			case "Jobs":
				this.setState({userSearch: 'Jobs'}, () =>{
					console.log(`userSearch: ${this.state.userSearch}`)
				});
				break;

			default: console.log('userSearch not found. Type:', event.value);
		}
	};

	onJobTypeDropdownChange = (event) => {

		switch(event.value) {
			case "Welding":
				this.setState({jobType: 'Welding'}, () =>{
					console.log(`userSearch: ${this.state.jobType}`)
				});
				break;

			case "Nursing":
				this.setState({jobType: 'Nursing'}, () =>{
					console.log(`userSearch: ${this.state.jobType}`)
				});
				break;

			case "Carpentry":
				this.setState({jobType: 'Carpentry'}, () =>{
					console.log(`userSearch: ${this.state.jobType}`)
				});
				break;

			case "Plumbing":
				this.setState({jobType: 'Plumbing'}, () =>{
					console.log(`userSearch: ${this.state.jobType}`)
				});
				break;

			case "Human Services":
				this.setState({jobType: 'Human Services'}, () =>{
					console.log(`userSearch: ${this.state.jobType}`)
				});
				break;

			default: console.log('jobType not found. Type:', event.value);
		}
	};

	homepageSearch = () => {
		let userSearch = this.state.userSearch;
		let jobType = this.state.jobType;

		// if userSearch or jobType dropdown is not selected, show pop up
		if (!userSearch || !jobType) {
			this.setState({
				showPopUp: !this.state.showPopUp
			});
			return;
		}

		switch(userSearch) {
			case 'A Career Path':
				// career
				this.props.history.push("/career-landing");
				break;

			case 'Training':
				// training
				this.props.history.push("/training/search");
				break;

			case 'Financial Aid':
				// job
				this.props.history.push("/training/finance");
				break;

			case 'People':
				// people
				this.props.history.push("/peoplesearch");
				break;

			case 'Jobs':
				// jobs
				this.props.history.push("/jobsearch");
				break;

			default:
				// default
				break;
		}

		console.log('search finished.');
	};

	togglePopup = () => {
		this.setState({
			showPopUp: !this.state.showPopUp
		});
	};

	render() {
		return (
			<div>
				<Modal isOpen={this.state.showPopUp} onRequestClose={this.togglePopup} contentLabel="Delete Check" style={modalStyle} >
					<h2 style={{padding:'10px', fontSize:"22px"}}>You must make selections in both dropdowns</h2>
					<button className="popup-button"  onClick={this.togglePopup}>Confirm</button>
				</Modal>

				<div className='home-landing' style={{zIndex:"0"}}>
					<div className='landing-content'>
						<h1>Get Excited About Your Future</h1>
						<p>SkillPointe is a movement celebrating skills-based professionals and their contributions.</p>
						<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
							<Dropdown onChange={(event) => this.onUserSearchDropdownChange(event)} placeholder="I am searching for..." arrowClassName='custom-dropdown-arrow' options={options1} value={this.state.userSearch}/>
							<Dropdown onChange={(event) => this.onJobTypeDropdownChange(event)} placeholder="Select one" arrowClassName='custom-dropdown-arrow' options={options2} value={this.state.jobType}/>
							<Button onClick={this.homepageSearch} style={{background:"#F8A141", border:"none", marginTop:"20px", fontSize:"18px", width:"50%"}}>
								Search
							</Button>
						</div>
					</div>
					<img className='landing-img' src={landingBackground} alt='landingBackground' style={{zIndex:"-30"}}/>
				</div>

				<div className='home-about' style={{zIndex:"0"}}>
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


