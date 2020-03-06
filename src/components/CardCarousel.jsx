import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {AmbassadorCard, TrainingCard, JobsCard, ArticleCard } from "./index";
import school from '../assets/mockData/school.json';
import ambassador from '../assets/mockData/ambassadors';
import job from '../assets/mockData/jobs';

export const CardCarousel = (props) => {
  const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
  const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;

    let cards = [];

    switch(props.cardType) {
        case 'ambassador':
            {ambassador.ambassadors.map(ambassador => { cards.push(<AmbassadorCard ambassador={ambassador}/>)}) }
        break;

        case 'job':
            {job.jobs.map(job => { cards.push(<JobsCard job={job}/>)}) }
        break;

        case 'training':
            {school.schools.map(school => { cards.push(<TrainingCard school={school}/>)}) }
        break;

        case 'article':
            for(let i = 1; i < props.articleCards.length; i+=2) {
                cards.push (
                    <ArticleCard card1={props.articleCards[i-1]} card2={props.articleCards[i]}/>
                )
            }

            // handle odd numbes
            if(props.articleCards.length % 2 === 1) {
                cards.push(
                    <ArticleCard card1={props.articleCards[props.articleCards.length - 1]} card2={props.articleCards[0]}/>
                )
            }
            
            break;

        default:
            console.log('card type not found. Type:', props.cardType);
    }

    if (props.cardType === 'ambassador') {
        return (
            <div className="App">
                <Carousel className="ambassador-carousel"
                          arrowRight={rightArrow}
                          arrowLeft={leftArrow}
                          addArrowClickHandler infinite>
                    {cards}
                </Carousel>
            </div>
        )
    }
    else {
        return (
            <div className="App">
                <Carousel arrowRight={rightArrow}
                          arrowLeft={leftArrow}
                          addArrowClickHandler infinite>
                    {cards}
                </Carousel>
            </div>
        )
    }
};

export default CardCarousel;
