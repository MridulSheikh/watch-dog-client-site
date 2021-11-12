import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyOrder from '../../components/myorder/MyOrder';
import Pay from '../../components/pay/Pay';
import Revew from '../../components/Revew/Revew';
const ShowDashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
        <Navbar variant="dark"  expand="lg" style={{backgroundColor:"#AF00A8"}} sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fs-1">
          <Link to={`${url}`} style={{textDecoration:"none", color:"#fff"}}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light ms-md-5">
              <Nav.Link className="ms-md-3 fs-5" as={Link} to={`${url}/pay`}>pay</Nav.Link>
              <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/myorder`}>my order</Nav.Link>
              <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/revew`}>revew</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <div>
        <Switch>
        <Route exact path={path}>
        <MyOrder></MyOrder>
        </Route>
        <Route  path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
        <Route path={`${path}/myorder`}>
        <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/revew`}>
        <Revew></Revew>
        </Route>
        </Switch>
        </div>
        </div>
    );
};

export default ShowDashboard;