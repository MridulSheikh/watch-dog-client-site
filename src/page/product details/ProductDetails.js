import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import Navigation from '../../components/Shared/Navigation/Navigation';

const ProductDetails = () => {
    const { ProductId } = useParams();
    console.log(useParams)
    const [product, setProduct]=useState([]);
    useEffect(()=>{
        fetch(`https://morning-harbor-52337.herokuapp.com/product/${ProductId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return ( 
        <>
        <Navigation />
        <Container className="mt-md-5">
        <Row>
        <Col sm={1} md={6} className="d-flex aling-items-center">
        <img src={product.img} alt="" width="90%" />
        </Col>
        <Col sm={1} md={6} className="mt-3">
        <h3>{product.name}</h3>
        <h5 className="mt-3">Style : {product.Style}</h5>
        <h5 className="mt-3">body type : {product.body_type}</h5>
        <h5 className="mt-3">color : {product.Dial_Color}</h5>
        <h5 className="mt-3">Case Shape : {product.Case_Shape}</h5>
        <h5 className="mt-3">Clasp Type : {product.Clasp_Type}</h5>
        <h5 className="mt-3">Display Methods : {product.Display_Methods}</h5>
        <h5 className="mt-3">Warranty Time : {product.Warranty_Time}</h5>
        <h3 className="mt-3" style={{color:"#D80178"}}>$ {product.price} only</h3>
        <Link to={`/shipping/${ProductId}`}>
        <button style={{width:"100%", padding:"7px 0px", marginTop:"10px", color:"#fff", border:'none', borderRadius:'5px',background: "linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)"}}>Procced to shipping Now</button>
        </Link>
        </Col>
        </Row>
        </Container>
        <Footer />
        </>
    );
};

export default ProductDetails;