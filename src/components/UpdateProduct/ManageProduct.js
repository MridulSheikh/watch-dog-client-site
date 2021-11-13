import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageProductCard from './ManageProductCard';

const ManageProduct = () => {
    const [product  , setProuduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProuduct(data))
    },[product])
    const deletProduct = id =>{
        const proced = window.confirm("Are you sure to DELETE this product")
        console.log(id)
        if(proced){
            fetch(`http://localhost:5000/product/${id}`,{
                method: 'DELETE',
              })
              .then(res => res.json())
              .then( data =>{
               const reamaining = product.filter(product => product._id !== id);
              setProuduct(reamaining)
              })
        }
      }
    return (
        <Container>
            <div className="text-center my-5">
             <h1 style={{fontFamily:"fantasy"}}>Manage your all product</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
              {
                  product.map(pro => <ManageProductCard 
                      key = {pro._id}
                      product = {pro}
                      deletProduct = {deletProduct}
                    />)
              }
            </Row>
        </Container>
    );
};

export default ManageProduct;