import React, { Component } from 'react';
import {
  MobileFooter,
    TopNavbarBlue,
    Footer,
    WeldingAmbassadorCard, Certification,
    JobInfoCards, Compare,
    JobOpeningsCard,
    WeldingSchools,
    FinancialSupport,
    CareerCompass, Calendar,
    PopularCareers,
    CareerPathways,
    Skill,CardCarousel
} from "../components";

import HamburgerModal from "../components/HamburgerModal";
import landingBackground from "../assets/images/landing-background.jpeg";

class CareerDetailPage extends Component {

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
            <div className='welding-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>

                <div className="welding-container">
                    <div className='welding-landing-content'>
                        <h1 style={{color:"white"}}>Welding</h1>
                        <p style={{marginTop:"10px", color:"white"}}>
                            Welders join things together with metals. Detail-oriented and skilled in manual dexterity, welders perform an number
                            of roles within various industries.
                        </p>
                    </div>

                    <WeldingAmbassadorCard/>
                    
                    <JobInfoCards/>

                    <JobOpeningsCard/>

                    <WeldingSchools/>

                    <FinancialSupport/>

                    <PopularCareers/>

                    <CareerPathways/>

                    <Skill/>
                   <div style={{marginBottom:"12px", height:"37px", display:"flex", justifyContent:"center", alignItems:"center",background: "#DADADA", borderRadius: "6px"}}>
                    <h6 style={{padding:"0", margin:"0", fontSize:"20px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Articles</b></h6>
                    </div>
                  <div className="no-margin orange-arrows">
                    <CardCarousel cardType="article" articleCards={articleList}/>
                  </div>


                    <Calendar/>

                    <CareerCompass/>

                    <Certification/>
                    
                    <Compare/>

                    {/*<img className='landing-img' src={landingBackground} alt='landingBackground' />*/}
                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default CareerDetailPage;
