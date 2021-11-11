import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const {name,img,price,_id} = props.product
    return (
        <Col>
      <Card style={{cursor:"pointer"}}>
        <Card.Img variant="top" src={img} height="300px" />
        <Card.Body>
          <Card.Title>$ {price} USD </Card.Title>
          <Card.Text>
           {name}
          </Card.Text>
          <Link to = {`/details/${_id}`}>
          <button style={{width:"100%",padding:"7px 0px",border:"none",background:'linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)',color:'#fff', borderRadius:"3px"}}>See now</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ProductCard;