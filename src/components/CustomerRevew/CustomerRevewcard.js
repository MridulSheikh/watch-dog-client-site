import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const CustomerRevewcard = (props) => {
    const {name,email, comment,img,ratting} = props.revew
    return (
        <Col className="text-center">
        <Card className="py-4 border-0 rounded shadow-sm" style={{maxHeight:"430px", overflow:"hidden"}}>
        <div className="text-center" >
        {
            !img? <img src="https://assets.webiconspng.com/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png" width="100px" style={{borderRadius:"50%"}} />  : <img src={img} width="100px" style={{borderRadius:"50%"}} />
        }
        </div>
          <Card.Body>
            <Rating
                    initialRating={ratting}
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                    readonly></Rating>
            <h5 style={{color:"#D80178"}} className="mt-3">{name}</h5>
            <Card.Title>{email}</Card.Title>
            <Card.Text className='mt-3' >
             {comment}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CustomerRevewcard;