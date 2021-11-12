import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link,  useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const {EmailChange,  handlePassword,  sininWithgoogle,HandleReg,error,  handlechangeName}=useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    
    const handleGoogleLogin = () => {
        sininWithgoogle()
        .then(result => {
            history.push(redirect_uri);
        })
}
    return (
        <div style={{height:"70vh",display:"flex", justifyContent:"center",alignItems:"center"}} >
        <Container>
        <Row style={{withd:'60%'}} className="bg-light mt-sm-3">
        <Col sm={1}md={8} className="d-flex justify-content-center aling-items-center">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-hand-watches-lead-1627062807.jpg" alt="" width="100%" />
        </Col>
        <Col sm={1} md={4}>
        <h2 style={{fontFamily:"sans-serif", color:"#AF00A8"}}>Registration</h2>
        <form onSubmit={HandleReg}>
         <label htmlFor="" className="d-block mt-3">Email : </label>
         <input onBlur={EmailChange} type="emali" className="d-block  w-100 p-2" required />
         <label  htmlFor="" className="d-block mt-3">name : </label>
         <input onBlur={handlechangeName} type="name" className="d-block  w-100 p-2" required />
        <label htmlFor="" className="d-block mt-3">Password :</label>
        <p className="text-danger">{error}</p>
        <input onBlur={handlePassword} type="password" className="d-block  w-100 p-2" required />
        <button className="d-block w-100 py-1 mt-2 border-0 bg-primary text-light rounded" style={{background: "linear-gradient(329deg, rgba(147,0,147,1) 0%, rgba(147,0,139,0.5858718487394958) 33%)"}}>registration now</button>
        <h5 className="text-center my-2">or</h5>
        </form>
        <button className="d-block w-100 py-1 mt-2 border-0 bg-primary text-light rounded" onClick={handleGoogleLogin}><i className="fab fa-google-plus-g me-2"></i>continue with google</button>
        <p>Allready have an account? <Link to="/login">sing in</Link> </p>
        </Col>
       </Row>
        </Container>
     </div>
    );
};

export default Registration;