import React from 'react';

export const ArticleCard = (props) => {
  return (

      <div className="career-card-container col-sm-6 col-xs-6 col-md-6" style={{margin:'auto', padding:'10px 8px 10px 10px'}}>
        <div className="card-body" style={{padding:'5px 5px 10px 5px', boxShadow:'0px 0px 7px rgba(0, 0, 0, 0.3)', backgroundColor:'#FFFFFF'}} >
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
};

export default ArticleCard;
