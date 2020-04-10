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
    Skill,CardCarousel, DropdownMenu
} from "../components";
import HamburgerModal from "../components/HamburgerModal";
import articleList from "../assets/mockData/articles.json";

class CareerDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            career: [
              {
                id: 0,
                title: 'Healthcare',
                selected: false,
                key: 'career'
              },
              {
                id: 1,
                title: 'Energy',
                selected: false,
                key: 'career'
              },
              {
                id: 2,
                title: 'Transportation',
                selected: false,
                key: 'career'
              }

          ]
        };
    }
    toggleSelected = (id, key) => {
      let temp = JSON.parse(JSON.stringify(this.state[key]))
      temp[id].selected = !temp[id].selected;
      this.setState({
        [key]: temp
      })
    };

    resetThenSet = (id, key) => {
      let temp = JSON.parse(JSON.stringify(this.state[key]))
      temp.forEach(item => item.selected = false);
      temp[id].selected = true;
      this.setState({
        [key]: temp
      })
    };

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
      ];
      
      return (
        <div className='welding-page'>
            {/*conditionally rendered modal*/}
            {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

            {/*main contents of page*/}
            <TopNavbarBlue history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>

            <div className="welding-container">
                <div className='welding-landing-content'>
                    <h1 style={{color:"white"}}>Welding</h1>
                </div>

                <WeldingAmbassadorCard/>
                
                <JobInfoCards/>

                <WeldingSchools/>

                <FinancialSupport/>

                <JobOpeningsCard/>

                {/* <PopularCareers/> */}

                {/* <CareerPathways/> */}

                <Skill/>
                <div style={{marginBottom:"12px", height:"37px", display:"flex", justifyContent:"center", alignItems:"center",background: "#DADADA", borderRadius: "6px"}}>
                <h6 style={{padding:"0", margin:"0", fontSize:"20px", lineHeight:"16px", width:"85%", color:"#2D426B"}}><b>Articles</b></h6>
                </div>
              <div className="no-margin orange-arrows">
                <CardCarousel cardType="article" articleCards={articleList}/>
              </div>


                <Calendar/>

                <CareerCompass/>

                {/* <Certification/> */}
                
                <Compare/>


                {/*<img className='landing-img' src={landingBackground} alt='landingBackground' />*/}
            </div>
            <div className="dd-container">
              <h5 className="dd-title">Explore Other Careers:</h5>
              <div className="wrapper" style={{width:"100%"}}>
                <DropdownMenu
                    title="Select One"
                    list={this.state.career}
                    resetThenSet={this.resetThenSet}
                />
              </div>
            </div>
            <MobileFooter history={this.props.history}/>
            <Footer mobileFooterPresent />
        </div>
      )
    }
}

export default CareerDetailPage;
