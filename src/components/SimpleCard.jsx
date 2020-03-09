import React from 'react';

export const SimpleCard = (props) => {
	return (
		<div className="simple-card" >
			<img src={props.image} alt="simple-card-img"/>
			<h6><b>{props.message}</b></h6>
	</div>
	)
};

export default SimpleCard;
