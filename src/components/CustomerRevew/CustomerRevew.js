import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomerRevewcard from './CustomerRevewcard';

const CustomerRevew = () => {
    const [revews, setRevews] = useState([])
    useEffect(()=>{
        fetch('https://morning-harbor-52337.herokuapp.com/revew')
        .then(res => res.json())
        .then(data => setRevews(data))
    },[revews])
    return (
        <Container>
        <Row xs={1} md={3} className="g-4 mt-5">
        {
          revews.map(rev => <CustomerRevewcard
                key={rev._id}
                revew = {rev}
                />)
        }
        </Row>
        </Container>
    );
};

export default CustomerRevew;