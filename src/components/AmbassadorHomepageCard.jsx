import React from 'react';

export const AmbassadorHomepageCard = (props) => {

	return (
		<div className="career-ambassador-card container">
			<div className="content">
				<h6>Career Ambassadors</h6>
				<h5 className="card-title" style={{lineHeight:"18px"}}>Meet, {props.firstname}.</h5>
				<p>{props.description}</p>
			</div>
			<div className="card-media-block">
				<img className='custom-media' src={props.image} alt=""/>
			</div>
		</div>
	)
};

export default AmbassadorHomepageCard;
