import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../utilities/img/businessman-checking-time.jpg";
import img2 from "../../utilities/img/wepik-20211010-17729.png";
import img3 from "../../utilities/img/wepik-20211010-17522.png";
const Banner = () => {
    return (
        <Carousel className="w-100">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption  style={{borderRadius:"10px",padding:"5px 5px", marginTop:"-100px"}}>
      <h3 style={{fontFamily:"cursive", color:"#fff"}}>OMEGA WATCHES</h3>
      <p>Among luxury goods, one of the vital steps in any marketing strategy is to portray exclusivity. For buyers of luxury products, belonging to an exclusive group is integral especially if the product is being purchased as a status symbol.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height="60%"
    />
    <Carousel.Caption>
      <h3>PENAROSA WATCHES</h3>
      <p>Brands like Penarosa do not have a long heritage or vast networks of celebrities to use. However, Penarosa watches win when it comes to defining and targeting their market.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height="60%"
    />
    <Carousel.Caption>
      <h3>ROLEX WATCHES</h3>
      <p>Luxury buyers expect a unique experience when shopping – and offering this is further testament to the prestige of the brand. Audemars Piguet gets this right by providing an engaging and interactive experience to site visitors.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;