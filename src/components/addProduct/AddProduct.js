import { padding } from '@mui/system';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const AddProduct = () => {
    const [name , setName] =useState('');
    const [style , setStyle] =useState('');
    const [body , setBody] =useState('');
    const [color , setColor] =useState('');
    const [shape , setShape] =useState('');
    const [clasp , setClasp] =useState('');
    const [display , setDisplay] =useState('');
    const [warenty , setWarenty] =useState('');
    const [price , setPrice] =useState();
    const [img , setImg] =useState('');
    const handlename = e =>{
        setName(e.target.value)
    }
    const handleStyle = e => {
        setStyle(e.target.value)
    }
    const handleBody = e =>{
        setBody(e.target.value)
    }
    const handleshape = e =>{
        setShape(e.target.value)
    }
    const handleClasp = e =>{
        setClasp(e.target.value)
    }
    const handleDisplay  = e =>{
        setDisplay (e.target.value)
    }
    const handleWarenty  = e =>{
        setWarenty(e.target.value)
    }
    const handlePrice = e =>{
        setPrice(e.target.value)
    }
    const handleimg = e =>{
        setImg(e.target.value)
    }
    const handlecolor = e =>{
        setColor(e.target.value)
    }
    const handleaddProduct = () =>{
        const product = {
            name : name,
            Style :style,
            body_type : body,
            Dial_Color : color,
            Case_Shape : shape,
            Clasp_Type : clasp,
            Display_Methods : display,
            Warranty_Time : warenty,
            price : price,
            img : img
        }
        fetch('http://localhost:5000/product',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then()
    
    }
    return (
        <Container className="d-flex justify-content-center aling-items-center mt-5">
           <div className="w-50">
           <h1 className="text center mb-5">Add your products</h1>
           <div className="my-3">
        <form onSubmit={handleaddProduct}>
        <label for="exampleFormControlInput1" className="form-label">Product Name :</label>
        <input onBlur={handlename} type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter product name" required />
        <label for="exampleFormControlInput1" className="form-label">style :</label>
        <input onBlur={handleStyle} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label">body type :</label>
        <input onBlur={handleBody} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> CaseShape :</label>
        <input onBlur={handleshape} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Clasp Type :</label>
        <input onBlur={handleClasp} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Display Methods :</label>
        <input onBlur={handleDisplay} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Warranty Time :</label>
        <input onBlur={handleWarenty} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> price :</label>
        <input onBlur={handlePrice} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> color :</label>
        <input onBlur={handlecolor} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> image url :</label>
        <img src={img} width="100%" style={{display:"block", marginBottom:"20px"}} />
        <input onBlur={handleimg} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <button style={{width:"100%", border:"none", color:"#fff", backgroundColor:"#AF00A8", padding:"5px 0px", borderRadius:"5px"}}>Add product</button>
        </form>
          </div>
           </div>
        </Container>
    );
};

export default AddProduct;