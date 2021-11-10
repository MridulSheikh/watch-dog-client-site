import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreCard from '../../components/explore card/ExploreCard';
import "./Explore.css"
const Explore = () => {
    const [product, setProduct]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="mt-3">
        <Container className="exploreBanner">
          <h1 className="text-warning">There are <span style={{color:"#D80178"}}>{product.length} </span> type of <br/> Watches avalable in  <br/> our website</h1>
        </Container>
        <Container className="mt-4">
        <Row xs={1} md={3} className="g-4">
        {
            product.map(pro => <ExploreCard
                product = {pro}
                ></ExploreCard>)
        }
        </Row>
        </Container>
     </div>
    );
};

export default Explore;