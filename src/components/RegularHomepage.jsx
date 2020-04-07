import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AmbassadorCard, CareerCard, Filter, FilterTab, SchoolCard, Video} from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import scrollDownButton from "../assets/images/icons8-scroll-down-100.png";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import travisVideo from '../assets/videos/Travis_Edmonds_Ambassador Video.mp4';
import Dropdown from 'react-dropdown';
import ambassadors from "../assets/mockData/ambassadors";
import school from "../assets/mockData/school";
import 'react-dropdown/style.css'
import {Button} from "react-bootstrap";
import Modal from "react-modal";
import Carousel from "react-bootstrap/Carousel";
import {VideoCarousel} from "./VideoCarousel";

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
				if (jobType === 'Welding'){
					this.props.history.push("/career/welding");
					break;
				}else {
					this.props.history.push("/career-landing");
					break;
				}

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
		console.log(ambassadors.ambassadors[0]);
		return (
				<div>
					<Modal isOpen={this.state.showPopUp} onRequestClose={this.togglePopup} contentLabel="Delete Check" style={modalStyle} >
						<h2 style={{padding:'10px', fontSize:"22px"}}>You must make selections in both dropdowns</h2>
						<button className="popup-button"  onClick={this.togglePopup}>Confirm</button>
					</Modal>

					<div className='home-landing' style={{zIndex:"0"}}>
						<div className='landing-content' style={{width: '85%'}}>
							<h1 style={{margin: '0'}}>Welcome to Skillpointe</h1>
							<p style={{margin: "30px 0px"}}>Explore skills-based career paths. Connect with schools and employers.</p>
							{/*<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
							<Dropdown onChange={(event) => this.onUserSearchDropdownChange(event)} placeholder="I am searching for..." arrowClassName='custom-dropdown-arrow' options={options1} value={this.state.userSearch}/>
							<Dropdown onChange={(event) => this.onJobTypeDropdownChange(event)} placeholder="Select one" arrowClassName='custom-dropdown-arrow' options={options2} value={this.state.jobType}/>
							<Button onClick={this.homepageSearch} style={{background:"#F8A141", border:"none", marginTop:"20px", fontSize:"18px", width:"50%"}}>
								Search
							</Button>
						</div>*/}
							<img className='scroll-down' src={scrollDownButton} alt='scrollDown'/>
						</div>
						<img className='landing-img' src={landingBackground} alt='landingBackground' style={{zIndex:"-30"}}/>
					</div>
					<FilterTab/>
					<div>
						<AmbassadorCard ambassador={ambassadors.ambassadors[0]}/>
					</div>
					<div>
						<SchoolCard school={school.schools[0]}/>
					</div>
					<div className="mission-div">
						<h3 className="mission-title">Our Mission</h3>
						<p className="mission-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Ut vel nulla sed eros placerat aliquam mattis vitae lectus.
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
						</p>
					</div>
					<div className="contact-div">
						<h3 className="contact-title">Contact Us</h3>
						<p className="contact-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Ut vel nulla sed eros placerat aliquam mattis vitae lectus.
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
						</p>
						<Button className="contact-button">CONTACT</Button>
					</div>
				</div>
		);
	}
};

export default RegularHomepage;


