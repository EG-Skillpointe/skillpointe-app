import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {Video} from "./index";
import homepageVideo from "../assets/videos/fscj-campus-video.mp4";
import fscjVideoTour1 from "../assets/videos/fscj-tour1.mp4";
import fscjVideoTour2 from "../assets/videos/fscj-tour2.mp4";

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
                  autoPlay={10000}
                  stopAutoPlayOnHover={true}
                  animationSpeed={1000}
                  infinite
                  dots
                  >
          <Video video={homepageVideo} type='video/mp4'/>
          <Video video={fscjVideoTour2} type='video/mp4'/>
          <Video video={fscjVideoTour1} type='video/mp4'/>
        </Carousel>
      </div>
  )
}
