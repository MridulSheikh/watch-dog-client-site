import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Navbar  sticky="top" collapseOnSelect expand="lg" style={{background: "linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)"}} variant="dark">
        <Container>
        <Navbar.Brand href="#home"><h2 style={{fontFamily:"initial",marginTop:"5%"}}>WATCH DOG</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-md-5">
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/pay">Pay</Nav.Link>
            <Nav.Link as={NavLink} to="/My orders">My orders</Nav.Link>
            <Nav.Link as={NavLink} to="/Revew">Revew</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;