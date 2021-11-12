import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Admintable from './Admintable';

const MakeAdmin = () => {
    const [user, setUser] = useState([])
    const [search , setSearch] = useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUser(data))
    },[user])
    const handlesearch = e =>{
        setSearch(e.target.value)
    }
    const filter = user.filter(user => user.email === search)
    return (
        <Container className="mt-5">
        <div>
        <div class="mb-3">
        <input onChange={handlesearch} type="text" class="form-control" id="exampleFormControlInput1" placeholder="search by email" />
         </div>
        </div>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
              user.map(user => <Admintable 
                key= {user._id}
                user={user}
                />)
          }
        </tbody>
      </Table>
        </Container>
    );
};

export default MakeAdmin;