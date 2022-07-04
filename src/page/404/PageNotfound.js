import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../utilities/img/PngItem_2550608.png"
const PageNotfound = () => {
    return (
        <div className="d-flex justify-content-center  aling-items-center py-5">
        <div className="text-center">
        <img src={img} alt="" width="60%" />
        <Link to="/home" style={{textDecoration:"none"}}>
        <button style={{display:"block", padding:"7px 20px", border:"none", background:'linear-gradient(329deg, rgba(71,0,93,0.8547794117647058) 0%, rgba(147,0,147,1) 33%)',color:"#fff", borderRadius:"5px",marginLeft:"150px",marginTop:"20px"}} >Back to home</button>
        </Link>
        </div>
        </div>
    );
};

export default PageNotfound;