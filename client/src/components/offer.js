import React from 'react';
import {faCookieBite,faBirthdayCake,faCocktail, faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from '../style/offerstyle'
import {Groupdiv,Genralsec,Circldiv,Spanp} from '../style/offerstyle'
const Offer = () => {
    const H2style={
        color:'rgb(252,145,162)',
        fontFamily:"signika,sans-serif",
        margin:"46px 0 16px",
        fontSize:"24px",
        
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
<Spanp >

    fantastic savory and deliciuous sweet pastry
    wonderfull store, good ambience and nice place
    highly recommended for the first timer, specially the japanese cheese cakes
    the way through womans heart is to her stomach" the best store in town.
</Spanp>
<h6 style={{color:'white',textTransform:'capitalize'}}>
    We Baked With Love <FontAwesomeIcon icon={faHeart} style={{fontSize:"16px",color:"rgb(252, 145, 162)"}}/>
</h6>
<Button>
    Rate the taste
</Button>

</Genralsec>

<Genralsec>
    <Circldiv>
    <FontAwesomeIcon icon={faBirthdayCake} style={{fontSize:"36px",color:"black"}}/>
    </Circldiv>

<h5 style={H2style}>Custom Cake</h5>
<Spanp>
you can customize the cake you want, nutella, ferrero is one of the best cakes.
birthday event, party, simple gathering, nova is the right place to call
affordable with the best quality, 
highly standard specially the presentation of their cakes
</Spanp>
<h6 style={{marign:"16px 0",color:'white',textTransform:'capitalize'}}>
    We Baked With Love <FontAwesomeIcon icon={faHeart} style={{fontSize:"16px",color:"rgb(252, 145, 162)"}}/>
</h6>
<Button>
    order now
</Button>
</Genralsec>

<Genralsec>
    <Circldiv>
    <FontAwesomeIcon icon={faCocktail} style={{fontSize:"36px",color:"black"}}/>
    </Circldiv>

<h5 style={H2style}>COFFEE &JUICE</h5>
<Spanp>
fresh juice on the spot as per order of the customer, purely fresh, no perservative added.
mixed fruits, cocktail, all kind of mojito also well recommended
speciallity coffe they used for all kind of Coffee, 
the best among the rest, nova number 1.    
</Spanp>
<h6 style={{marign:"16px 0",color:'white',textTransform:'capitalize'}}>
    We Baked With Love &nbsp;<FontAwesomeIcon icon={faHeart} style={{fontSize:"16px",color:"rgb(252, 145, 162)"}}/>
</h6>
<Button>
  Visit us
</Button>
</Genralsec>

        </Groupdiv>
        </>
         );
}
 
export default Offer;