import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageCard from './ManageCard';

const ManageAllorders = () => {
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[order])
    const deleteOrder = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
          method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
             console.log(data)
            const reamaining = order.filter(order => order._id !== id);
            setOrder(reamaining)
        })
      }
      
    return (
        <div>
        <Table striped bordered hover variant="danger">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th>manage</th>
          </tr>
        </thead>
        <tbody>
         {
             order.map(or => <ManageCard 
                key = {or._id}
                order = {or}
                deleteOrder ={deleteOrder}
                />)
         }
        </tbody>
      </Table>
        </div>
    );
};

export default ManageAllorders;