import React, { Component } from 'react';
import careersImg from "../assets/images/Explore_Careers.png";
import jobsImg from "../assets/images/Find_Jobs.png";
import trainingImg from "../assets/images/Find_Training.png";
import peopleImg from "../assets/images/Find_People.png";

class MobileFooter extends Component {

    footerSticky = {};
    mobileFooterHeight = 62;

    constructor(props) {
        super(props);

        this.state = {
            scrollTouched: false,
            scrollPos: window.pageYOffset,
            bottom: 0
        }
    }

    redirect = (path, state) => {
        this.props.history.push({
            pathname: path,
            state: state
        });
    };

    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll);
        this.footerSticky = document.getElementById("mobile-footer-sticky");
        this.mobileFooterHeight = document.getElementById("mobile-footer").offsetHeight;
    }
    
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        let maxScroll = (this.footerSticky.offsetTop - window.innerHeight);
        let newBottom = this.state.bottom;
        let scrollDifference = window.pageYOffset - this.state.scrollPos

        if(this.state.scrollTouched && window.pageYOffset > 100) {
            if(window.pageYOffset > (maxScroll - this.mobileFooterHeight)) { // bottom of footer - stick
                if(this.state.bottom < 0) {
                    newBottom = this.state.bottom + scrollDifference;
                    if(newBottom > 0) { newBottom = 0 }
                }
            } else if(window.pageYOffset > this.state.scrollPos) { // scroll down...
                if(this.state.bottom > -this.mobileFooterHeight) {
                    newBottom = (this.state.bottom - scrollDifference)
                    if(newBottom < -this.mobileFooterHeight) { 
                        newBottom = -this.mobileFooterHeight;
                    } else if(newBottom > 0) {
                        newBottom = 0;
                    }
                }
            } else { // scroll up
                if(this.state.bottom < 0) {
                    newBottom = this.state.bottom - scrollDifference;
                    if(newBottom > 0) { newBottom = 0 }
                }
            }
        }
    
        this.setState({
          scrollPos: window.pageYOffset,
          scrollTouched: true,
          bottom: newBottom
        });
    };

    render() {
        return (
            <div className='mobile-footer' id='mobile-footer' style={{bottom: this.state.bottom }}>
                <div className='footer-items'>
                    <div className="item" onClick={() => this.redirect("/career-landing")}>
                        <img src={careersImg} alt="" width="24" height="24"></img>
                        <div>Explore Careers</div>
                    </div>

                    <div className="item" onClick={() => this.redirect("/jobsearch")}>
                        <img src={jobsImg} alt="" width="24" height="24"></img>
                        <div>Find Jobs</div>
                    </div>

                    <div className="item" onClick={() => this.redirect("/training")}>
                        <img src={trainingImg} alt="" width="24" height="24"></img>
                        <div>Find Training</div>
                    </div>

                    <div className="item">
                        <img src={peopleImg} alt="" width="24" height="24"></img>
                        <div>Find People</div>
                    </div>
                    
                </div>
            </div>
    )}
}

export default MobileFooter;
