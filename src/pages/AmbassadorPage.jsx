import React, { Component } from 'react';
import {AmbassadorCard, MobileFooter, TopNavbarBlue} from "../components";
import ambassadors from '../assets/mockData/ambassadors';
import HamburgerModal from "../components/HamburgerModal";


class AmbassadorPage extends Component {

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
          {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

          {/*main contents of page*/}
          <TopNavbarBlue openModal={this.openModal} />
          <div>
            <h1 className="career-title">Explore by Industry</h1>
            <p className="career-card-text">
              Beginning your search? Select one of the industries below to hear from an industry ambassador, explore training, and view jobs.
            </p>
          </div>
          <div className="row" style={{margin:'0', paddingBottom:'20px'}}>
            {ambassadors.ambassadors.map(ambassador => { return <div style={{padding:"10px", margin:"5px"}}> <AmbassadorCard ambassador={ambassador}/> </div>})}
          </div>

          <MobileFooter history={this.props.history}/>
        </div>
    )
  }
}

export default AmbassadorPage;
