import React from 'react';
import { Container } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <Container>
           <div>
           <div className="mb-3">
       <label for="exampleFormControlInput1" className="form-label">Email address</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
     </div>
           </div>
        </Container>
    );
};

export default AddProduct;