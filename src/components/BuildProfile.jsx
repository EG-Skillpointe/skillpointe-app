import React from 'react';
import personIcon from "../assets/images/personIcon.svg";
import rightArrowShort from "../assets/images/right-arrow-short.svg";

export const BuildProfile = (props) => {

	return (
		<div className='build-profile'>
				<div className='profile-icon'>
					<img src={personIcon} alt="person icon" />
				</div>
				
				<div className="pers-arrow-header">
					Build Your Profile
					<img src={rightArrowShort} alt="right-arrow"/>
				</div>
				<p>Complete your SkillPointe Profile to apply for jobs, receive relevent content on your homepage, and improve recommended jobs and training!</p>
			</div>
	)
};

export default BuildProfile;
