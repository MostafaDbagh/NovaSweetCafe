import React from 'react';
import {Div,Asidiv,Numberfont,Descdiv} from './../style/headerstyle'
import Nova from './../images/Nova.png'
const Header = () => {
    return ( 

        <Div>
            <Asidiv>
                <p>Dubai-Century Mall</p>
                <Numberfont>04-309-8507</Numberfont>
            </Asidiv>
<div style={{height:"100px",textAlign:"center",marginBottom:"35px "}}>
        <img src={Nova} alt="nova Logo" width="340px" height="110px" ></img>
        <div>
            <Descdiv>Japaness Cake  --  Cafe -- Sweets</Descdiv>
        </div>
      </div>
      <Asidiv>
                <p>Alain-Khalifa Street</p>
                <Numberfont>03-766-8580</Numberfont>
            </Asidiv>

        </Div>
     );
}
 
export default Header;