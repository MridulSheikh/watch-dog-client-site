import { DeleteRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderCard from './OrderCard';

const MyOrder = () => {
    const {user} = useAuth()
    const [orders, setOrders]=useState([]);
    useEffect(()=>{
        fetch("https://morning-harbor-52337.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    const filteremail = orders.filter(or => or.email === user.email)
    const cancelOrder = id =>{
        const proced = window.confirm("Are you sure cancel this order")
        if(proced){
            fetch(`https://morning-harbor-52337.herokuapp.com/orders/${id}`,{
                method : "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                   const reamaining = orders.filter(order => order._id !== id);
                   setOrders(reamaining)
              })
        }
      }
    return (
        <Container>
        <h1 className="text-center m-5" style={{color:"#AF00A8"}}>You have been orders {filteremail.length} Watches</h1>
        <h5 className="text-center mb-5">you can manage your order from here</h5>
        <Row xs={1} md={3} className="g-4">
        {
            filteremail.map(order => <OrderCard
                key={order._id}
                order= {order}
                cancelOrder={cancelOrder}
                ></OrderCard>)
        }
    </Row>
        </Container>
    );
};

export default MyOrder;