import React, { Component } from 'react';
import careersImg from "../assets/images/Explore_Careers.png";
import jobsImg from "../assets/images/Find_Jobs.png";
import trainingImg from "../assets/images/Find_Training.png";
import peopleImg from "../assets/images/Find_People.png";

class MobileFooter extends Component {

    redirect = (path, state) => {
        this.props.history.push({
            pathname: path,
            state: state
        });
    }

    render() {
        return (
            <div className='mobile-footer'>
                <div className='footer-items'>
                    <div className="item" onClick={() => this.redirect("/careers")}>
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

                    <div className="item" onClick={() => this.redirect("/login")}>
                        <img src={peopleImg} alt="" width="24" height="24"></img>
                        <div>Find People</div>
                    </div>
                    
                </div>
            </div>
    )}
}

export default MobileFooter;