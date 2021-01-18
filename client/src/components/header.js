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
<Logodiv2 style={{height:"100px",textAlign:"center",marginBottom:"35px "}}>
        <img src={Yamazaki} alt="nova Logo" width="340px" height="110px" ></img>
        <div>
            <Descdiv>Japaness Cake  --  Cafe -- Sweets</Descdiv>
        </div>
      </Logodiv2>
      <Asidiv>
                <p>Alain-Khalifa Street</p>
                <Numberfont>03-766-8580</Numberfont>
            </Asidiv>

        </Div>
     );
}
 
export default Header;