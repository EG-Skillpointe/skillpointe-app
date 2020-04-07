import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {Video} from "./index";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import travisVideo from "../assets/videos/Travis_Edmonds_Ambassador Video.mp4";

export  const VideoCarousel = props => {
  // const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
  // const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;

  return (
      <div className="App">
        <Carousel 
                  // arrowRight={rightArrow}
                  // arrowLeft={leftArrow}
                  slidesPerPage={1}
                  // addArrowClickHandler
                  infinite>
          <Video video={homepageVideo} type='video/mp4'/>
          <Video video={travisVideo} type='video/mp4'/>
          <Video video={homepageVideo} type='video/mp4'/>
          <Video video={travisVideo} type='video/mp4'/>
        </Carousel>
      </div>
  )
}
