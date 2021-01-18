import React from 'react';
import {Footerdiv,SmallFooterdiv,Footercon,Footerpara,Anchor} from '../style/footerstyle'
import {SocialIcon} from 'react-social-icons'
import Yamazaki from './../images/yamazaki.png'
import socialIcon from 'react-social-icons/dist/social-icon';
const Footer = () => {
    
    return ( <>
    <Footercon>
        <Footerdiv>
<SmallFooterdiv>
<img src={Yamazaki} alt="nova logo" width="260px" height="220px"/>
<ul style={{padding:"0",position:'relative'}}>
    <SocialIcon network="twitter"  />
    <SocialIcon network="instagram"/>
    <SocialIcon network="snapchat"/>
</ul>
</SmallFooterdiv>

<SmallFooterdiv>
<h4 style={{fontFamily:'lobster,sans-serif'}}>Dubai Nova Sweets and Cafe</h4>
<span style={{fontSize:"12px",fontFamily:'Signika,sans-serif'}}>Century MAll ,Entrance Gate #1 </span>
<span style={{fontSize:"2.4rem",color:"rgb(252,145,162)",padding:"20.16px 33.6px",textAlign:"center"}}>04-309-8507</span>
<h4 style={{fontFamily:"Lobster"}}>Opening Hours</h4>
<span style={{fontSize:"12px",padding:"0.6em 1em",textAlign:"center",fontFamily:'Signika,sans-serif'}}>Daily 10:00 AM to 11 PM</span>
<p style={{fontSize:"17px",color:"rgb(252,145,162",letterSpacing:"3px",margin:"12px 0",padding:"10px 16px"}}>WHATSAPP <span>058-605-7772</span></p>
</SmallFooterdiv>
<SmallFooterdiv>
<h4 style={{fontFamily:'lobster,sans-serif'}}>AlAin Nova Sweets and Cafe</h4>
<span style={{fontSize:"12px",fontFamily:'Signika,sans-serif'}}>Khalifa Str </span>
<span style={{fontSize:"2.4rem",color:"rgb(252,145,162)",padding:"20.16px 33.6px",textAlign:"center"}}>04-309-8507</span>
<h4 style={{fontFamily:"Lobster"}}>Opening Hours</h4>
<span style={{fontSize:"12px",padding:"0.6em 1em",textAlign:"center",fontFamily:'Signika,sans-serif'}}>Daily 10:00 AM to 11 PM</span>
<p style={{fontSize:"17px",color:"rgb(252,145,162",letterSpacing:"3px",margin:"12px 0 0",padding:"10px 16px"}}>WHATSAPP <span>058-605-7772</span></p>
</SmallFooterdiv>
</Footerdiv>

<Footerpara>
    <span style={{fontSize:"15px",fontFamily:"Signika,sans-serif"}}>
        <Anchor href="#" style>NOVA 2021  </Anchor>
        ALL RIGHTS RESERVED<br/>
         designed By &nbsp;<b style={{color:"rgb(251,145,163)"}}>Mostafa Dbagh</b> </span>
    
    
</Footerpara>


</Footercon>
     </>
     );
}
 
export default Footer;