import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5" style={{fontFamily:"fantasy", color:"#105AED"}}> Photo Album</h1>
        <Row className="g-0">
        <Col sm={1} md={6}>
        <Row className="g-0">
        <Col>
        <img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" width="100%" height="100%" />
        </Col>
        <Col>
        <img src="https://cdn.luxe.digital/media/2021/07/02102402/best-men-watches-junghans-meister-handaufzug-review-luxe-digital%402x.jpg" width="100%" />
        </Col>
        </Row>
        <Row>
        <Col>
        <img src="https://storage.seikowatches.com/image/2021/04/13000317740155/0/210401_Presage_Brand_Image_for_Home_Page.png" width="100%" />
        </Col>
        </Row>
        </Col>
        <Col sm={1} md={6}>
        <img src="https://cdn.vox-cdn.com/thumbor/g2lQ_rZfx1XGDMGUo16l-ZFKheY=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/66258966/vpavic_190916_3669_0318.0.jpg" width="100%" height="100%" alt="" />
        </Col>
      </Row>
        </Container>
    );
};

export default About;