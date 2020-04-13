import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import landingBackground from "../assets/images/homepage-background.jpeg";

export const IndustryCard = (props) => {
  const image = require(`../assets/images/${props.article.image}`);

  const headerStyle = {
    fontFamily: 'Roboto, serif',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '18px',
  margin: '5px 0',
  color: 'var(--dark-gray)'
  };

  const buttonStyle = {
    margin: ' 10px 5px',
    width: '45%',
    borderRadius: '15px',
  };
  const cardContainerStyle ={
    display: 'flex',
    border: '1px solid #ddd',
    textAlign: 'left',
    height: 'auto !important',
    marginBottom: '10px'
  };
  const firstChild = {
    paddingLeft: '10px',
    paddingTop: '15px',
    width: '30%',
    textAlign: 'center'
  };

  const lastChild = {
    width: '70%',
    padding: '15px',
    paddingBottom: '5px !important'

  };

  return (
      <div style={cardContainerStyle} onClick={ () =>{window.location.replace('/training/detail')}}>
        <div style={firstChild}>
          <img style={{height:'90%', width: '100%', borderRadius: '6px'}} src={image} alt="Cat"/>
        </div>

        <div style={lastChild}>
          <h5 className="job-title" style={{marginBottom: '0px'}}>{props.article.industry}</h5>
          <h3 style={headerStyle}>{props.article.headline}</h3>
          <p className="job-text">{props.article.subTitle}</p>
        <div>
          <Button className='card-button' style={buttonStyle}>Training</Button>
          <Button className='card-button' style={buttonStyle}>Jobs</Button>
        </div>

        </div>
      </div>
  )
};

export default IndustryCard;
