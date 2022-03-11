import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreCard from '../../components/explore card/ExploreCard';
import Footer from '../../components/Shared/Footer/Footer';
import Navigation from '../../components/Shared/Navigation/Navigation';
import "./Explore.css"
const Explore = () => {
    const [product, setProduct]=useState([])
    useEffect(()=>{
        fetch("https://morning-harbor-52337.herokuapp.com/product")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <>
        <Navigation />
        <div className="mt-3">
        <Container className="exploreBanner">
          <h1 className="text-warning">There are <span style={{color:"#D80178"}}>{product.length} </span> type of <br/> Watches avalable in  <br/> our website</h1>
        </Container>
        <Container className="mt-4">
        <Row xs={1} md={3} className="g-4">
        {
            product.map(pro => <ExploreCard
                key = {pro._id}
                product = {pro}
                ></ExploreCard>)
        }
        </Row>
        </Container>
     </div>
     <Footer />
     </>
    );
};

export default Explore;