import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {HomePageArticleCard, CareerCard, Filter, FilterTab, SchoolCard, Video} from "../components";
import landingBackground from "../assets/images/homepage-background.jpeg";
import scrollDownButton from "../assets/images/scroll-down-button.png";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import travisVideo from '../assets/videos/Travis_Edmonds_Ambassador Video.mp4';
import Dropdown from 'react-dropdown';
import ambassadors from "../assets/mockData/ambassadors";
import school from "../assets/mockData/school";
import homepage_articles from "../assets/mockData/homepage_articles";
import 'react-dropdown/style.css'
import {Button} from "react-bootstrap";
import Modal from "react-modal";
import Carousel from "react-bootstrap/Carousel";
import {VideoCarousel} from "./VideoCarousel";
import IndustryCard from "./IndustryCard";

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
			showPopup: false,
			filteredArticles: homepage_articles.articles
		};
		//creates a reference for your element to use
		this.myDivToFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	doFilter = (cond) => {
		let filtered = [];
		if(cond === 'all'){
			filtered = homepage_articles.articles;
		} else {
			filtered = this.state.filteredArticles.filter(obj => obj.industry.toLowerCase()=== cond);
		}
		this.setState({filteredArticles: filtered})
	};

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

	scrollDown = () => {
		if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
	};


	render() {
		const card = this.state.filteredArticles.map((article, index) => {
			return index % 2 ? (<div><IndustryCard key ={index} article={article}/></div>) :  (<div><HomePageArticleCard key={index} article={article}/></div>)
		});
		return (
				<div>
					<Modal isOpen={this.state.showPopUp} onRequestClose={this.togglePopup} contentLabel="Delete Check" style={modalStyle} >
						<h2 style={{padding:'10px', fontSize:"22px"}}>You must make selections in both dropdowns</h2>
						<button className="popup-button"  onClick={this.togglePopup}>Confirm</button>
					</Modal>

					<div className='home-landing' style={{zIndex:"0"}}>
						<div className='landing-content' style={{width: '85%'}}>
							<h1 style={{margin: '0'}}>Welcome to Skillpointe</h1>
							<p style={{margin: "30px 0px"}}>Skills-based professionals build things for us, care for us and make our lives better.<br/><br/>At SkillPointe, we celebrate skills-based professionals and value their contributions.</p>
							{/*<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
							<Dropdown onChange={(event) => this.onUserSearchDropdownChange(event)} placeholder="I am searching for..." arrowClassName='custom-dropdown-arrow' options={options1} value={this.state.userSearch}/>
							<Dropdown onChange={(event) => this.onJobTypeDropdownChange(event)} placeholder="Select one" arrowClassName='custom-dropdown-arrow' options={options2} value={this.state.jobType}/>
							<Button onClick={this.homepageSearch} style={{background:"#F8A141", border:"none", marginTop:"20px", fontSize:"18px", width:"50%"}}>
								Search
							</Button>
						</div>*/}
							<img className='scroll-down' src={scrollDownButton} onClick={this.scrollDown} alt='scrollDown'/>
						</div>
						<img className='landing-img' src={landingBackground} alt='landingBackground' style={{zIndex:"-30"}}/>
					</div>
					<div ref={this.myDivToFocus}>
						<FilterTab filter={this.doFilter}/>
						{card}
					</div>
					<div className="mission-div">
						<h3 className="mission-title">Our Mission</h3>
						<p className="mission-p"> There has never been a greater need for skills-based professionals. Whether you’re a job seeker, skills-based trainer or employer, learn how you can be a part of this powerful, innovative movement.
						</p>
					</div>
					<div className="contact-div">
						<h3 className="contact-title">Tell us what you think</h3>
						<p className="contact-p" style={{textAlign: "center"}}> We'd love to hear from you about how we can continually make the experience better!
						</p>
						<Button className="contact-button">Feedback</Button>
					</div>
				</div>
		);
	}
};

export default RegularHomepage;


