import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const {name,Display_Methods,Warranty_Time,img,price} = props.product
    return (
        <Col>
      <Card style={{cursor:"pointer"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>$ {price} USD </Card.Title>
          <Card.Text>
           {name}
          </Card.Text>
          <Link>
          <button style={{width:"100%",padding:"7px 0px",border:"none",background:'linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)',color:'#fff', borderRadius:"3px"}}>See now</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ProductCard;