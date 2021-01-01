import React from 'react';
import {Navbarh,Unorderlist,List,Anchor} from '../style/navbarstyle'
const Navbar = () => {
    return ( 
        <Navbarh>

<Unorderlist>

    <List><Anchor href="#" className="active">Home</Anchor></List>
    <List><Anchor href="#">Menu</Anchor></List>
    <List><Anchor href="#">Rate</Anchor></List>
    <List><Anchor href="#">About</Anchor></List>
    <List><Anchor href="#">Contact</Anchor></List>
</Unorderlist>
        </Navbarh>
     );
}
 
export default Navbar;
