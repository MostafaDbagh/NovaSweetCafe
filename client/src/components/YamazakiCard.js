import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Minidiv,Button,Card,Image,Input,Cardbottom,H4,Cardbody,H6,Span,Imagediv } from '../style/cardstyle';

const YamazakiCard = (props) => {
    const {name,price,image} = props
    return ( 
       <Card >
           <div className="card-header" style={{padding:"0",marginBottom:"10px"}}>
               <Imagediv>
               <Image src={image}/>
      
               </Imagediv>
       
           </div>
           <Cardbody>
               <H4>{name} </H4>
               <div style={{width:"275px",height:"5px",padding:"0 30px",margin:"0 0 20px"}}></div>
               <Minidiv>
               <Span>{price}  <b>AED</b>  </Span>
               
               </Minidiv>
           </Cardbody>
           
           
           
      
           <div style={{display:'flex',justifyContent:'center'}}>
           <Button>Add To Card<FontAwesomeIcon icon ={faShoppingCart} style={{marginLeft:'10px'}} /></Button>
           </div>
               
           
       </Card>
     );
}
 
export default YamazakiCard ;

