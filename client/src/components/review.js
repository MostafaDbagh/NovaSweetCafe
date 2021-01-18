import React,{useState,useEffect} from "react";
import Sushi from '../imagesC/sushi2.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Wrapperdiv} from '../style/review'
import bg from '../images/bg.jpg'

export default function SimpleSlider() {
  const [review,setReview] = useState([])
  useEffect(()=>{
    fetch("./review.json")
    .then(res =>res.json())
    .then(data => setReview(data))
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <>
   <div style={{background:`url(${Sushi})`,width:'90%',height:'580px',margin:'24px auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
   
   <h2 style={{textAlign:"center",margin:"32px 0",letterSpacing:'2px' ,   color: "rgb(252, 145, 162)",fontFamily:"lobster,sans-serif"}}>What Customers Say About Us</h2>
   <Wrapperdiv style={{margin:"32px auto",width:"90%",height:"60%",background:`rgba(255,255,255,0.7)`,borderRadius:"10px",color:"black"}}>
        
    
     
    
    <div style={{textAlign:"center",margin:"10px 0"}}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"32px",marginBottom:"4px",color:"black"}}/>
        </div>
    <Slider {...settings}  >
    {review.map(item => (
      <div key={item.id} >
        
     
        <h2 style={{textAlign:"center",padding:"12px",fontFamily:'signika,sans-serif',color: "rgb(252, 145, 162)"}}>{item.name}</h2>
        <p style={{
            margin:"8px auto",fontFamily:"signika, sans-serif",padding:"20px",fontWeight:"700",width:"70%",height:'75%',color:"black"}}>{item.review}</p>
      </div>
    ))}
   
    </Slider>
    </Wrapperdiv>
   </div>
   
    </>
  );
}