import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProductCard = (props) => {
    const {name,Style,body_type,Dial_Color,Case_Shape,Clasp_Type,Display_Methods,Warranty_Time,price,img,  _id} = props.product
 
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} height="300px"/>
          <Card.Body>
            <Card.Title style={{color:"#D80178"}}> <h3>$ {price} USD</h3></Card.Title>
            <Card.Text>
              <p>Display : {Display_Methods}</p>
              <p>Color : {Dial_Color}</p>
              <p>Body Type : {body_type}</p>
              <p>style : {Style}</p>
              <p>Shape : {Case_Shape}</p>
              <p>clasp type: {Clasp_Type}</p>
              <p>Warrenty time : {Warranty_Time}</p>
            </Card.Text>
            <Card.Text>
             {name}
            </Card.Text>
            <Link to = {`/Dashboard/updateOne/${_id}`}>
            <button style={{backgroundColor: "green", border:"none", padding:"7px",width:"100%",color:"#fff",borderRadius:"5px"}}>Update now</button>
            </Link>
            <button onClick={()=>props.deletProduct(_id)} style={{backgroundColor: "red", border:"none", padding:"7px",width:"100%",color:"#fff",borderRadius:"5px",marginTop:"10px"}}>Delete now</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ManageProductCard;