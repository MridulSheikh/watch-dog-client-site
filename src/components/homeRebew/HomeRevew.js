import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RevewCard from './RevewCard';

const HomeRevew = () => {
    const [revews, setRevews] = useState([])
    useEffect(()=>{
        fetch('https://morning-harbor-52337.herokuapp.com/revew')
        .then(res => res.json())
        .then(data => setRevews(data))
    },[])
    const slicing = revews.slice(0,3)
    return (
        <Container className="mt-5 pt-md-5">
        <h1 className="mb-5 text-center" style={{fontFamily:"cursive"}}>our Customer revews</h1>
        <Row xs={1} md={3} className="g-4 mt-5">
        {
           slicing.map(rev => <RevewCard
                key={rev._id}
                revew = {rev}
                />)
        }
        </Row>
        </Container>
    );
};

export default HomeRevew;