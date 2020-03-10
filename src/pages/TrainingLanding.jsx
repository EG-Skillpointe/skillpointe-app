import React, { Component } from 'react';
import {CareerCard, MobileFooter, TopNavbarBlue, Footer, HamburgerModal, CardCarousel} from "../components";
import landingBackground from "../assets/images/Training-landing-image.png";
import industries from '../assets/mockData/industries';
import { Link}  from 'react-router-dom'
import articleList from "../assets/mockData/articles";

class TrainingLanding extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
        <div className='home-page training-page'>
          {/*conditionally rendered modal*/}
          {modalOpened ? (<HamburgerModal pageType="career-landing" history={this.props.history} closeModal={this.closeModal} />) : (null)}

          {/*main contents of page*/}
          <TopNavbarBlue openModal={this.openModal} absolute transparent/>

          <div className='home-landing' >
            <div className='landing-content' style={{width:'90%', padding:'10px'}}>
              <h1 style={{marginBottom:'20px', fontSize:"36px"}}>Find Training</h1>
              <p style={{margin:"30px 0px", fontSize:'18px'}}>Search trade schools, vocational, and technical colleges or explore financial aid options.</p>
              <div className="button-container">
                <button className='training-button' style={{marginRight:'15px'}} onClick={ () =>{window.location.replace('/training/search')}}>Find Schools</button>
                <button className='training-button' onClick={() => {window.location.replace('/training/finance')}}> Find Financial Aid</button>
              </div>
            </div>
            <img className='training-landing-img' src={landingBackground} alt='landingBackground' />
          </div>
          <div className="carousel-header">
            <h6 className="carousel-title"><b>Additional Resources</b></h6>
          </div>
          <div className="no-margin orange-arrows">
            <CardCarousel cardType="article" articleCards={articleList}/>
          </div>
          <div className="discussion-container">
            <h5 className="discussion-header">Join a Discussion Group</h5>
            <p className="discussion-text">Hear from professionals, connect with other students, and ask questions.</p>
            <button className='discussion-button'>Explore Groups</button>
          </div>
          <MobileFooter history={this.props.history}/>
          <Footer mobileFooterPresent/>
        </div>
    )
  }
}

export default TrainingLanding;
