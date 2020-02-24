import React from 'react';

export const TrainingCard = (props) => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap"/>
                </div>
                <div className="card-body">
                  <h6>School</h6>
                  <h4 className="card-title">Georgia Tech</h4>
                  <p className="card-text">Atlanta, Georgia.</p>
                  <button className="card-button">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default TrainingCard;
