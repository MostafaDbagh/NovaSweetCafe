import React from 'react';
import b1 from './../imagesC/b.png'
import b2 from './../imagesC/b2.png'
import b3 from './../imagesC/b3.jpg'
import b4 from './../imagesC/b.png'
import {Contentdiv,Wrapper,Clipdiv,Rectanglediv,Shape,Flexdiv,Div1,Span,Titlediv,Button} from '../style/contentstyle'
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Commondiv} from '../style/navbarstyle'

const Content = () => {
    return (  
        <Commondiv>
 <Contentdiv>
     <Wrapper></Wrapper>
     <Shape>
     <Rectanglediv>
<h3 style={{textAlign:"center",margin:0,lineHeight:'50px'}}>Yamazaki  Bakery</h3>
          </Rectanglediv>
     <Clipdiv>
          <h4 style={{position:"absolute",left:"24%"}}> Sweets & savories</h4>
          </Clipdiv>

          </Shape>
          <Titlediv>
          <h3>Start Your Day With The Best Cup Of Coffee</h3>
          <p>we make our Product with love.</p><FontAwesomeIcon icon={faHeart} style={{fontSize:"48px", color:"rgb(252, 145, 162)"}}/><br/><br/><br/>
          <Button>Discover Us</Button>
          </Titlediv>
      
          </Contentdiv>

          <Flexdiv >
<Div1>
    
  
    <img src={b1} style={{width:"100%",height:"100%",objectFit:'cover'}}/>
    <Span >STORY</Span>
</Div1>
<Div1>
<img src={b2} style={{width:"100%",height:"100%",objectFit:'cover'}}/>
    <Span >INTERIOR</Span>
</Div1>
<Div1>
<img src={b3} style={{width:"100%",height:"100%",objectFit:'cover'}}/>
    <Span >MENU</Span>
</Div1>
<Div1>
<img src={b4} style={{width:"100%",height:"100%",objectFit:'cover'}}/>
    <Span >ORDER</Span>
</Div1>
          </Flexdiv>
       
        </Commondiv>
       
    );
}
 
export default Content;