import React, { useState, useEffect } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {Video} from "./index";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";
import travisVideo from "../assets/videos/Travis_Edmonds_Ambassador Video.mp4";

export  const VideoCarousel = props => {
  // const leftArrow = <button className="carousel-button "><span className="carousel-arrows carousel-arrow-left">prev</span></button>;
  // const rightArrow = <button className="carousel-button"><span className="carousel-arrows carousel-arrow-right">next</span></button>;
  const [value, setValue] = useState(0);

  const handleChange = value => {
    setValue(value);
    var carouselItems = document.getElementsByClassName("BrainhubCarouselItem")
    for(var i = 0; i < carouselItems.length; i++){
      if(!carouselItems[i].classList.contains("BrainhubCarouselItem--active")){
        // Pausing the video element
        carouselItems[i].childNodes[0].childNodes[0].pause();
      }
    }
  }

  return (
      <div className="App">
        <Carousel 
                  // arrowRight={rightArrow}
                  // arrowLeft={leftArrow}
                  slidesPerPage={1}
                  // addArrowClickHandler
                  autoPlay={5000}
                  value={value}
                  onChange={handleChange}
                  stopAutoPlayOnHover={true}
                  animationSpeed={1000}
                  infinite
                  dots
                  >
          <Video video={homepageVideo} type='video/mp4'/>
          <Video video={travisVideo} type='video/mp4'/>
          <Video video={homepageVideo} type='video/mp4'/>
          <Video  video={travisVideo} type='video/mp4'/>
        </Carousel>
      </div>
  )
}
