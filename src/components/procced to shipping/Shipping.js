import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Shipping = () => {
    const [product, setProduct] = useState([])
    const {ProductId} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${ProductId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
     //form
     const { register, handleSubmit, reset} = useForm();
     const onSubmit = data =>{
        axios.post("http://localhost:5000/Orders",data)
        .then(res =>{
          if(res.data.insertedId){
           alert("you order has been added")
           reset()
        }
        })
      } 
    return (
        <Container className="mt-5" style={{backgroundColor:"#fff"}} >
        <Row className="g-3">
        <Col sm={1} md={5}>
        <Card className="border-0">
        <Card.Img variant="top" src={product.img} height="350px" />
        <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
       your brand id : {product._id}
      </Card.Text>
    </Card.Body>
  </Card>
        </Col>
        <Col sm={1} md={4} style={{backgroundColor:"#fff"}} className="mt-5 pt-md-3">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}} {...register("brand_id")} placeholder="please copy past brand Id" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input  style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}} {...register("Name", { required: true, maxLength: 60 })} placeholder="name" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}} {...register("email", { required: true, maxLength: 60 })} placeholder="your email" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input  style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}}{...register("phone", { required: true})} placeholder="phone number" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input  style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}} {...register("address")} placeholder="address" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input  style={{outline:"none", borderBottom:"2px solid #D80178", borderTop:"0px", borderLeft:"0px",borderRight:"0px"}} type="submit"  className='d-block w-100 mt-3 py-1 border-0  rounded text-light' style={{background: "linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)"}} />
          </form>
        </Col>
        <Col sm={1} md={3}>
        <img src="https://images.squarespace-cdn.com/content/v1/5ff6c5336c885a268148bdcc/1624632109531-NEIJMJHT6NWVYWYF7QW2/WSC_15.jpg" width="100%" className="mt-5 pt-4" />
        </Col>
      </Row>
        </Container>
    );
};

export default Shipping;