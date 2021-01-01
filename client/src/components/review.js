import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div style={{border:"1px solid red" ,marginBottom:"32px"}}>
    <h2>Customer's Say About Us</h2>
    <div style={{textAlign:"center",margin:"10px 0"}}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"32px",marginBottom:"10px"}}/>
        </div>
    <Slider {...settings} style={{width:"90%",margin:"0 auto",position:"relative"}}>
    {review.map(item => (
      <div key={item.id} style={{position:"relative",height:"800px",width:"80%",}}>
        
     
        <h2 style={{textAlign:"center",padding:"12px"}}>{item.name}</h2>
        <p style={{margin:"10px auto",fontFamily:"Roboto, sans-serif",fontWeight:"700"}}>{item.review}</p>
      </div>
    ))}
   
    </Slider>
    </div>
  );
}