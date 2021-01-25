import React from 'react';
import {Div,Asidiv,Numberfont,Descdiv,Logodiv2} from './../style/headerstyle'
import Yamazaki from './../images/yamazaki.png'
const Header = () => {
    return ( 

        <Div>
            <Asidiv>
                <p>Dubai-Century Mall</p>
                <Numberfont>04-309-8507</Numberfont>
            </Asidiv>
<Logodiv2 >
        <img src={Yamazaki} alt="nova Logo" width="330px" height="110px" style={{margin:"0 auto"}} ></img>
        <Descdiv>
            <div style={{width:"100%",fontSize:"16px",letterSpacing:"1px"}}>PASTERY CAKE  --  SUSHI -- RAMEN & MORE</div>
        </Descdiv>
      </Logodiv2>
      <Asidiv>
                <p>Alain-Khalifa Street</p>
                <Numberfont>03-766-8580</Numberfont>
            </Asidiv>

        </Div>
     );
}
 
export default Header;