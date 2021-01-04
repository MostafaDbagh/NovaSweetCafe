import React from 'react';
import {Contentdiv,Wrapper,Clipdiv,Rectanglediv,Shape,Flexdiv,Div1,Span,Titlediv,Button} from '../style/contentstyle'
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colorFor } from 'react-social-icons/dist/networks';
const Content = () => {
    return (  
        <div>
 <Contentdiv>
     <Wrapper></Wrapper>
     <Shape>
     <Rectanglediv>
<h3 style={{textAlign:"center"}}>Nova  Cafe</h3>
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

          <Flexdiv>
<Div1>
    <Span>STORY</Span>
</Div1>
<Div1>
<Span>MENU</Span>
</Div1>
<Div1>
<Span>INTERIOR</Span>
</Div1>
<Div1>
<Span>ORDER</Span>
</Div1>
          </Flexdiv>
       
        </div>
       
    );
}
 
export default Content;