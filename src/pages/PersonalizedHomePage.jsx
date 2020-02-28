import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  CardCarousel,
  MobileFooter,
  TopNavbar,
  TopNavbarBlue,
  Video,
  Footer,
  TopNavbarWhite,
  ArticleCard,
  VerticalJobCard
} from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import rightArrow from "../assets/images/right-arrow.svg";
import HamburgerModal from "../components/HamburgerModal";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import job from "../assets/mockData/jobs"


class PersonalizedHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    console.log('opening modal');
    this.setState({showModal: true},() => {
      console.log(`showModal status: ${this.state.showModal}`)
    });
  };

  closeModal = () => {
    console.log('closing modal');
    this.setState({showModal: false}, () => {
      console.log(`showModal status: ${this.state.showModal}`)
    });
  };

  render() {
    const modalOpened = this.state.showModal;

    return (
        <div className='home-page'>
          {/*conditionally rendered modal*/}
          {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

          {/*main contents of page*/}
          <TopNavbarBlue history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>

          <div className='home-landing'>
            <div className='landing-content'>
              <h1>Welcome Back Ricky</h1>
            </div>
            <img className='landing-img' src={landingBackground} alt='landingBackground' />
          </div>
          <div>
            <div className="home-arrow-header">
              Training in Your Area
            </div>
            <CardCarousel cardType="training"/>
          </div>
          <div>Recommended Article</div>
          <div className="row" style={{margin:'0', padding:'10px 10px 20px 10px'}}>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
          </div>

          <div className='home-about'>
            <h1 style={{fontSize:"28px", fontWeight:"700", margin:"30px 0"}}>Featured Video</h1>
            <Video video={homepageVideo} type='video/mp4'/>
            <p align="left">
              A welder for 20 years, meet Gavin Barnes. Find out how he got into the industry and why he would recommend welding for someone searching for a career path.
            </p>
          </div>

          <div>
            <div className="home-arrow-header">
              Find Jobs
            </div>
            <div>
              <VerticalJobCard job={job.jobs[0]}/>
            </div>

          </div>
          <div className='home-landing'>
            <div className='landing-content'>
              <h1>Discussion</h1>
            </div>
            <img className='landing-img' src={landingBackground} alt='landingBackground' />
          </div>
          <MobileFooter history={this.props.history}/>
          <Footer mobileFooterPresent/>
        </div>
    )
  }
}

export default PersonalizedHomePage;
