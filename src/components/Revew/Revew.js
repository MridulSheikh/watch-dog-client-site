import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import CustomerRevew from '../CustomerRevew/CustomerRevew';

const Revew = () => {
    const {user}=useAuth()
    const [text , setText] = useState('')
    const [ratting, setRatting] = useState()
    const [isloading, setIsloading] = useState(false)
    const handleText = e =>{
       setText(e.target.value)
    }
    const submitRevew = e =>{
        setIsloading(true)
        const revew = {
            name : user.displayName,
            email : user.email,
            img : user.photoURL,
            comment : text,
            ratting: ratting
        }
        fetch('https://morning-harbor-52337.herokuapp.com/revew',{
            method : "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(revew)
        })
        .then()
        .finally(()=> setIsloading(false))
        e.preventDefault();
    }
    if(isloading){
        return <div style={{display:'flex',justifyContent:"center", alignItems:"center", height:"80vh"}}>
        <Spinner animation="border" className="m-5" />
        </div>
    }
    return (
        <>
        <Container>
        <h2 className="my-3">Give your revew or feedback</h2>
            <form onSubmit={submitRevew}>
              <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input readOnly defaultValue={user.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{outline:"#AF00A8"}} />
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input readOnly defaultValue={user.displayName} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
              <label for="exampleFormControlInput1" className="form-label my-4">give ratting :</label>
              <select value={ratting} onChange={e => setRatting(e.target.value) } className='rounded border-0 ms-3' style={{backgroundColor:"#AF00A8", color:"#fff"}} required>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </select>
             </div>
             <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Revew</label>
              <textarea onBlur={handleText} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
             </div>
             <button style={{ backgroundColor:"#AF00A8" , width:"100%", padding:"7px", border:"none",color:"#fff", borderRadius:"5px"}} >Submit</button>
            </form>
        </Container>
        <CustomerRevew></CustomerRevew>
        </>
    );
};

export default Revew;