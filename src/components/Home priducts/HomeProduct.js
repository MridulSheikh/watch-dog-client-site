import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const HomeProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const sliceProduct = product.slice(0,6)
    return (
        <Container>
        <h1 style={{fontFamily:'fantasy'}} className="text-center mt-5 pt-4">our best for you</h1>
        <Row xs={1} md={3} className="g-4 mt-5">
        {
            sliceProduct.map(pro => <ProductCard
                product={pro}
                ></ProductCard>)
        }
        </Row>
        </Container>
    );
};

export default HomeProduct;