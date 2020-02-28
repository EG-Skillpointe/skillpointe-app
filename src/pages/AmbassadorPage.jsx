import React, { Component } from 'react';
import {AmbassadorCard, MobileFooter, TopNavbarBlue, FilterTab, TopNavbarWhite, Footer} from "../components";
import ambassadors from '../assets/mockData/ambassadors';
import HamburgerModal from "../components/HamburgerModal";
import {object} from "prop-types";


class AmbassadorPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      filteredAmbassadors: ambassadors.ambassadors
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


  doFilter = (cond) => {
    let filtered = [];
    if(cond === 'popular'){
      filtered = ambassadors.ambassadors;
    } else {
      filtered = ambassadors.ambassadors.filter(obj => obj.industry === cond);
    }
    this.setState({filteredAmbassadors: filtered})
 };

  render() {
    const modalOpened = this.state.showModal;

    return (
        <div className='home-page'>
          {/*conditionally rendered modal*/}
          {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

          {/*main contents of page*/}
          <TopNavbarWhite openModal={this.openModal} />
          <FilterTab filter={this.doFilter}/>
          <div className="row" style={{margin:'0', paddingBottom:'20px', backgroundColor:'#ededed'}}>
            {this.state.filteredAmbassadors.map(ambassador => { return <div className="ambassador-card-div"> <AmbassadorCard ambassador={ambassador} isPage={true}/> </div>})}
          </div>
       <MobileFooter history={this.props.history}/>
       <Footer mobileFooterPresent/>
        </div>
    )
  }
}

export default AmbassadorPage;
