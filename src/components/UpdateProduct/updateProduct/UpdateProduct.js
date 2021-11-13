import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const {name,img,Style,body_type,Dial_Color,Case_Shape,Clasp_Type,Display_Methods,Warranty_Time,price} = product
    const [pname , setPname] =useState('');
    const [style , setStyle] =useState('');
    const [body , setBody] =useState('');
    const [color , setColor] =useState('');
    const [shape , setShape] =useState('');
    const [clasp , setClasp] =useState('');
    const [display , setDisplay] =useState('');
    const [warenty , setWarenty] =useState('');
    const [uprice , setUprice] =useState();
    const [photo , setPhoto] =useState('');
    useEffect(()=>{
        fetch(`https://morning-harbor-52337.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const handlename = e =>{
        setPname(e.target.value)
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
        setUprice(e.target.value)
    }
    const handleimg = e =>{
        setPhoto(e.target.value)
    }
    const handlecolor = e =>{
        setColor(e.target.value)
    }
    const handleUpdateProduct = () =>{

    }
    return (
        <Container className="d-flex justify-content-center aling-items-center mt-5">
           <div className="w-50">
           <img src="https://jcua.org/wp-content/uploads/2016/10/page_under_construction.jpg" width="100%" />
           <h1 className="text center mb-5">update your product</h1>
           <div className="my-3">
    <form onSubmit={handleUpdateProduct}>
         <label for="exampleFormControlInput1" className="form-label"> image url :</label> 
        <img src={img} width="100%" height="300px" style={{display:"block", marginBottom:"20px"}} />
        <input defaultValue={img} onBlur={handleimg} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label">Product Name :</label>
        <input defaultValue={name} onBlur={handlename} type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter product name" required />
        <label for="exampleFormControlInput1" className="form-label">style :</label>
        <input defaultValue={Style} onBlur={handleStyle} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label">body type :</label>
        <input defaultValue={body_type} onBlur={handleBody} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> CaseShape :</label>
        <input defaultValue={Case_Shape} onBlur={handleshape} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Clasp Type :</label>
        <input defaultValue={Clasp_Type} onBlur={handleClasp} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Display Methods :</label>
        <input defaultValue={Display_Methods} onBlur={handleDisplay} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> Warranty Time :</label>
        <input defaultValue={Warranty_Time} onBlur={handleWarenty} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> price :</label>
        <input defaultValue={price} onBlur={handlePrice} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <label for="exampleFormControlInput1" className="form-label"> color :</label>
        <input defaultValue={Dial_Color} onBlur={handlecolor} type="text" className="form-control mb-3" id="exampleFormControlInput1" required  />
        <button style={{width:"100%", border:"none", color:"#fff", backgroundColor:"#AF00A8", padding:"5px 0px", borderRadius:"5px"}}>update product</button>
    </form>
          </div>
           </div>
        </Container>
    );
};

export default UpdateProduct;