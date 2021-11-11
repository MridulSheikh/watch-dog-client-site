import React from 'react';
import { Card, Col } from 'react-bootstrap';
const ExploreCard = (props) => {
    const {name,Style,body_type,Dial_Color,Case_Shape,Clasp_Type,Display_Methods,price,img} = props.product
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} height="300px"/>
        <Card.Body>
          <Card.Title style={{color:"#D80178"}}> <h3>$ {price} USD</h3></Card.Title>
          <Card.Text>
            <p>Display : {Display_Methods}</p>
            <p>Color : {Dial_Color}</p>
            <p>Body Type : {body_type}</p>
          </Card.Text>
          <Card.Text>
           {name}
          </Card.Text>
          <button style={{backgroundColor: "#D80178", border:"none", padding:"7px",width:"100%",color:"#fff",borderRadius:"5px"}}>Details</button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ExploreCard;