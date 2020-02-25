import React from 'react';
import{ Grid, Row,  Col } from 'react-bootstrap';
import {CareerCard} from "./index";

const CardRow = (props) => {
  return (
     <div>
       <Row className="show-grid">
         <Col md={6}>
          <CareerCard/>
         </Col>
         <Col md={6}>
          <CareerCard/>
         </Col>
       </Row>
     </div>
  );
};

export default CardRow;
