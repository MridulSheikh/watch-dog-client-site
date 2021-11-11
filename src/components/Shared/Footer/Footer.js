import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import googlePlay from "../../../utilities/img/pngwing.com.png";
import paywith from "../../../utilities/img/payment-icon-5659.jpg"

const Footer = () => {
    return (
        <div style={{background:"linear-gradient(49deg, rgba(113,119,118,1) 0%, rgba(203,0,197,1) 33%)"}} className='py-5 mt-5' >
        <Container>
        <Row>
        <Col sm={1} md={6}>
          <h3 className="text-light">WATCH DOG</h3>
          <h5 className="text-light mt-3"><i className="fas fa-map-marker-alt text-light me-2"></i>Bangladesh,  Dhaka, multiplan center</h5>
          <h5 className="text-light mt-1"><i className="far fa-envelope text-light me-2"></i> Officilal site : Prince9nazir@gmail.com</h5>
          <h5  className="text-light mt-1"><i className="fas fa-phone-alt text-light me-2"></i> +0881883992408</h5>
          <img src={googlePlay} alt="" width="150px" />
        </Col>
        <Col sm={1} md={6}>
       <h3 className="text-light">Pay With</h3>
       <img src="https://designdrizzle.com/wp-content/uploads/14.-free-payment-method-gateway-icon-sets-13.png" alt="" width="390px" className="rounded" />
        </Col>
      </Row>
        </Container>
        </div>
    );
};

export default Footer;