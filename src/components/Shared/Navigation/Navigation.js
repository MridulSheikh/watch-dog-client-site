import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, Logout,photoURL} = useAuth()
  console.log(user)
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
          {
            !user.email ?  <Nav.Link as={NavLink} to="/Registration">
            <button  style={{border:"2px solid #64D801" , backgroundColor:"#64D80100", padding:"5px 10px", borderRadius:"30px",color:"#fff"}} className="reg-b-t-n">Registration</button>
            </Nav.Link> : <Nav.Link as={NavLink} to="/Dashboard">
            <button  style={{border:"2px solid #64D801" , backgroundColor:"#64D80100", padding:"5px 10px", borderRadius:"30px",color:"#fff"}} className="reg-b-t-n">Dashboard</button>
            </Nav.Link>
          }
          <div className="d-flex justify-content-center aling-items-center my-1 mx-3">
          {
            user.photoURL ? <Link to="/manageAccount"> <img src={user.photoURL} alt="" width='45px' height="45px" style={{borderRadius:"50%"}} /></Link> : user.email && <Link  to="/manageAccount"> <i className="fas fa-user-circle fs-1 unperson text-danger" style={{borderRadius:"50%"}}></i> </Link>
          }
          </div>
          <div className="text-center">
          {
            user.email ? <button onClick={Logout}  style={{border:"none", backgroundColor:"#D80178",width:"90px", padding:"7px 20px", borderRadius:"30px",color:"#fff"}} className="mt-2">singout</button> :  <Nav.Link as={NavLink} to="/login">
            <button  style={{border:"none", backgroundColor:"#D80178", padding:"7px 20px", borderRadius:"30px",color:"#fff"}}>login</button>
            </Nav.Link>
          }
          </div>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;