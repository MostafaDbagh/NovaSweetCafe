import React from 'react';
import {faCookieBite,faBirthdayCake,faCocktail} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Groupdiv,Genralsec,Circldiv} from '../style/offerstyle'
const Offer = () => {
    const H2style={
        color:'rgb(252,145,162)',
        fontFamily:"signika,sans-serif",
        marginTop:"48px",
        fontSize:"24px",
        fontStyle:"italic",
        textTransform:"capitalize"
    }
    return ( 
        <>
        <h2 style={{textAlign:"center",margin:"32px 0",letterSpacing:'2px' ,   color: "rgb(252, 145, 162)",fontFamily:"lobster,sans-serif"}}>What We Can Offer</h2>

        <Groupdiv>
<Genralsec>
    <Circldiv>

    
<FontAwesomeIcon icon={faCookieBite} style={{fontSize:"36px",color:"black"}}/>
</Circldiv>
<h5 style={H2style}>sweets & savories</h5>
</Genralsec>


<Genralsec>
    <Circldiv>
    <FontAwesomeIcon icon={faBirthdayCake} style={{fontSize:"36px",color:"black"}}/>
    </Circldiv>

<h5 style={H2style}>Custom Cake</h5>
</Genralsec>
 
<Genralsec>
    <Circldiv>
    <FontAwesomeIcon icon={faCocktail} style={{fontSize:"36px",color:"black"}}/>
    </Circldiv>

<h5 style={H2style}>Juice & Coffee</h5>

</Genralsec>
        </Groupdiv>
        </>
         );
}
 
export default Offer;