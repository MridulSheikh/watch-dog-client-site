import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import "./Home.css";
import watch from '../../utilities/img/wtch.jpg'
import HomeProduct from '../../components/Home priducts/HomeProduct';
const Home = () => {
    return (
        <>
        <Container className="mt-md-5">
        <Row>
        <Col md={6} sm={12}>
        <Banner></Banner>
        </Col>
        <Col md={6} sm={12}>
         <div className="silider-intro">
         <h2 style={{color: "rgba(219, 91, 0, 0.39)",fontFamily: "'Dancing Script', cursive",fontWeight:"700"}}>Here is a look at top brands that implement stunning luxury watch website design to differentiate their brands from the competition.</h2>
         <Link to="/product" className="text-decoration-none">
        <div style={{backgroundImage:`linear-gradient(329deg, rgba(0,0,0,0.38699229691876746) 0%, rgba(0,0,0,0.5858718487394958) 33%),url(${watch})`, height:"30vh",backgroundPosition:"center",backgroundRepeat:"no-repeat", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h2 style={{fontWeight:"bold", color:"#fff"}}>EXPLORE WATCHES</h2>
        </div>
         </Link>
        </div>
        </Col>
      </Row>
        </Container>
        <HomeProduct></HomeProduct>
   </>
    );
};

export default Home;