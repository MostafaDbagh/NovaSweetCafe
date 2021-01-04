import React,{useState,useEffect} from "react";
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
   
    <Wrapperdiv style={{margin:"32px auto",width:"90%",background:`url(${bg})`,borderRadius:"10px"}}>
        <div></div>
    <h2 style={{textAlign:"center",margin:"32px 0",letterSpacing:'2px',   color: "rgb(252, 145, 162)",fontFamily:"lobster,sans-serif"}}>Customer's Say About Us</h2>
     
    
    <div style={{textAlign:"center",margin:"10px 0"}}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"32px",marginBottom:"10px",color:"black"}}/>
        </div>
    <Slider {...settings} style={{width:"90%",margin:"0 auto",position:"relative"}}>
    {review.map(item => (
      <div key={item.id} style={{position:"relative",height:"900px",width:"80%",}}>
        
     
        <h2 style={{textAlign:"center",padding:"12px",fontFamily:'signika,sans-serif',color: "rgb(252, 145, 162)"}}>{item.name}</h2>
        <p style={{
            margin:"30px auto",fontFamily:"signika, sans-serif",padding:"20px",fontWeight:"700",width:"65%",color:"white"}}>{item.review}</p>
      </div>
    ))}
   
    </Slider>
    </Wrapperdiv>
    </>
  );
}