import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ExploreCard = (props) => {
    const {name,Style,body_type,Dial_Color,_id,Display_Methods,price,img} = props.product
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
          <Link to = {`/details/${_id}`}>
          <button style={{backgroundColor: "#D80178", border:"none", padding:"7px",width:"100%",color:"#fff",borderRadius:"5px"}}>Details</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ExploreCard;