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
import AddProduct from '../../components/addProduct/AddProduct';
import AdminRoute from '../../components/adminroute/AdminRoute';
import MakeAdmin from '../../components/make admin/MakeAdmin';
import ManageAllorders from '../../components/manage all orders/ManageAllorders';
import MyOrder from '../../components/myorder/MyOrder';
import Pay from '../../components/pay/Pay';
import Revew from '../../components/Revew/Revew';
import ManageProduct from '../../components/UpdateProduct/ManageProduct';
import UpdateProduct from '../../components/UpdateProduct/updateProduct/UpdateProduct';
import useAuth from '../../hooks/useAuth';
const ShowDashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth()
    return (
        <div>
        <Navbar variant="dark"  expand="lg" style={{backgroundColor:"#AF00A8"}} className='py-3' sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light ms-md-5">
              <Nav.Link className="ms-md-3 fs-5" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="ms-md-3 fs-5" as={Link} to={`${url}/pay`}>pay</Nav.Link>
              <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/myorder`}>my order</Nav.Link>
              <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/revew`}>revew</Nav.Link>
              {
                admin &&    <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/manageOrder`}>manage all orders</Nav.Link>
              }
              {
                admin &&     <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/addproduct`}>Add products</Nav.Link>
              }
              {
                admin &&      <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
              }
              {
                admin &&       <Nav.Link className="ms-md-3  fs-5" as={Link} to={`${url}/updateProduct`}>manage product</Nav.Link>
              }
             
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
        <AdminRoute path={`${path}/manageOrder`}>
        <ManageAllorders></ManageAllorders>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
       <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/updateProduct`}>
       <ManageProduct></ManageProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/updateOne/:id`}>
       <UpdateProduct></UpdateProduct>
        </AdminRoute>
        </Switch>
        </div>
        </div>
    );
};

export default ShowDashboard;