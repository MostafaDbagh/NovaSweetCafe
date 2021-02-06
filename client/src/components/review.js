import React,{useState,useEffect} from "react";
import Sushi from '../imagesC/sushi2.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Wrapperdiv} from '../style/review'
import {Commondiv} from '../style/navbarstyle'

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
      <Commondiv>
   <div style={{background:`url(${Sushi})`,width:'100%',margin:'24px auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
 <div style={{width:'100%',hieght:'50px',position:'relative',top:'25px'}}>
 <h2 style={{textAlign:"center",margin:"2px 0",letterSpacing:'2px' , fontWeight:'bold',fontSize:'34px',   color: "rgb(255,243,220)",fontFamily:"lobster,sans-serif"}}>Customers Say About Us</h2>
 </div>
  
   <Wrapperdiv style={{margin:"32px auto",width:"90%",background:`rgba(255,255,255,0.7)`,borderRadius:"10px",color:"black"}}>
        
    
     
    
    <div style={{textAlign:"center",margin:"10px 0"}}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"32px",marginBottom:"4px",color:"black"}}/>
        </div>
    <Slider {...settings}  >
    {review.map(item => (
      <div key={item.id} >
        
     
        <h2 style={{textAlign:"center",padding:"12px",fontFamily:'signika,sans-serif',color: "rgb(252, 145, 162)"}}>{item.name}</h2>
        <p style={{
            margin:"0px auto",fontFamily:"signika, sans-serif",padding:"20px",fontWeight:"700",width:"70%",height:'84%',color:"black"}}>{item.review}</p>
      </div>
    ))}
   
    </Slider>
    </Wrapperdiv>
   </div>
   
    </Commondiv>
  );
}