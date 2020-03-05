import React from 'react';

export const ArticleCard = (props) => {

	return (
		<div className='articles-carousel'>
            <div className=''>
                <h5>{props.card1.title}</h5>
                <label className='date-label'>{props.card1.date}</label>
                <p>{props.card1.description}</p>
                <h6>Read Full Story</h6>
            </div>

            <div className=''>
                <h5>{props.card2.title}</h5>
                <label className='date-label'>{props.card2.date}</label>
                <p>{props.card2.description}</p>
                <h6>Read Full Story</h6>
            </div>
		</div>
	)
};

export default ArticleCard;
