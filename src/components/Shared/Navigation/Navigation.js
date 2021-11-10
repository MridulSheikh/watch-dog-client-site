import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar  sticky="top" collapseOnSelect expand="lg" style={{background: "linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)"}} variant="dark">
        <Container>
        <Navbar.Brand as={NavLink} to="/Home" href="#home"><h2 style={{fontFamily:"initial",marginTop:"5%"}}>WATCH DOG</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-md-5">
          
          </Nav>
          <Nav.Link as={NavLink} to="/explore" className="text-light" eventKey={2} href="#memes">
           Explore more
          </Nav.Link>
          <Nav>
            <Nav.Link as={NavLink} to="/Registration">
            <button  style={{border:"2px solid #64D801" , backgroundColor:"#64D80100", padding:"5px 10px", borderRadius:"30px",color:"#fff"}} className="reg-b-t-n">Registration</button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
            <button  style={{border:"none", backgroundColor:"#D80178", padding:"7px 20px", borderRadius:"30px",color:"#fff"}}>login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;