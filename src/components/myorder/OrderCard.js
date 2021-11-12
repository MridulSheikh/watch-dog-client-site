import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const OrderCard = (props) =>{
    const {brand_id,_id}=props.order
    const [product , setProduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const fillterProduct = product.filter(pro => pro._id === brand_id)
   
    return (
        <>
        {
            fillterProduct.map(fl => 
                <Col key={fl._id}>
                <Card>
                  <Card.Img variant="top" src={fl.img} height="300px" />
                  <Card.Body>
                    <Card.Title>{fl.name}</Card.Title>
                    <Card.Text>
                    {
                      props.order.status ? <p><span className="text-success my-3">on away....<i className="fas fa-biking"></i></span></p> : <p><span className="text-warning my-3">panding....</span></p>
                    }
                      <Button onClick={() => props.cancelOrder(_id)} variant="danger" className="w-100 py-7">cancel order</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
                )
        }
        </>
    );
};

export default OrderCard;