import React from 'react';
import rightArrow from "../assets/images/small-right-arrow.svg";
export const Calendar = (props) => {
  return (
      <div className="calendar-container" >
        <div className="calendar-title">Upcoming Events + Conferences</div>
        <div className="calendar-row">
            <div>
              <div style={{padding:'0 16px 0 23px'}}>
                <h6 className='calendar-date'>JUN</h6>
              </div>
              <h6 className="calendar-range">June</h6>
              <h6 className="calendar-range">2nd-6th</h6>
            </div>
            <div style={{position:"relative"}}>
              <h5 className="calendar-text">Qualification of Welding Procedures Conference</h5>
              <h6><small className="calendar-location">Atlanta, Georgia</small></h6>
              <img className="calendar-arrow" src={rightArrow} alt=""/>
            </div>
        </div>
        <div className="calendar-row">
          <div>
            <div style={{padding:'0 16px 0 23px'}}>
              <h6 className='calendar-date'>AUG</h6>
            </div>
            <h6 className="calendar-range">August</h6>
            <h6 className="calendar-range">10-13th</h6>
          </div>
          <div style={{position:"relative"}}>
            <h5 className="calendar-text">Aluminum Conference - Back to Basics </h5>
            <h6><small className="calendar-location"> Cleveland, Ohio</small></h6>
            <img className="calendar-arrow" src={rightArrow} alt=""/>
          </div>
        </div>
      </div>
  )
};

export default Calendar;
