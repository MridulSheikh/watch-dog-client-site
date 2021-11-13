import React from 'react';

const ManageCard = (props) => {
    const {brand_id, Name, email,phone,address,_id} = props.order
    const hadleShipping = () =>{
        const orders = {_id}
        fetch('https://morning-harbor-52337.herokuapp.com/orders',{
            method:"PUT",
            headers : {
                  "content-type" : "application/json"
            },
            body : JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
   }
    return (
      <tr>
        <td>{brand_id}</td>
        <td>{Name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td style={{textAlign:"center"}}>
        <button onClick={()=>props.deleteOrder(_id)} style={{borderRadius:"50%", border:"none", backgroundColor:"red"}}><i className="fas fa-times text-light"></i></button>
        {
            !props.order.status ?  <button onClick={hadleShipping} style={{borderRadius:"50%", border:"none", backgroundColor:"green", marginLeft:"20px"}}><i className="fas fa-check text-light"></i></button> : <i className="fas fa-shipping-fast text-success fs-5 ms-4"></i>
        }
        </td>
      </tr>
    );
};

export default ManageCard;