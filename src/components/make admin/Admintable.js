import { stringify } from '@firebase/util';
import React from 'react';

const Admintable = (props) => {
    const {email, displayName} = props.user
    const handleUser = () =>{
        const user = {email}
        fetch('https://morning-harbor-52337.herokuapp.com/user/admin',{
            method:"PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <tr>
        <td>{displayName}</td>
        <td>{email}</td>
        <td style={{textAlign:"center"}}>
        {
            !props.user.role ? <button onClick={handleUser} style={{color:"#FFF", borderRadius:"5px", border:"none", backgroundColor:"#AF00A8"}}>Make admin</button> : <i className="fas fa-user-shield fs-5 text-warning"></i>
        }
        </td>
      </tr>
    );
};

export default Admintable;