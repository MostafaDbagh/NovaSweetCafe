import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,

  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Commondiv} from '../style/navbarstyle'
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Commondiv>
      <Navbar color="dark" dark  expand="md">
        <NavbarBrand href="/" style={{fontFamily:"lobster,sans-serif",color:"rgb(255,243,191)"}}>Yamazaki Menu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
            <Link style={{ textDecoration: "none", }} to ="/sushi">
            <NavLink >SUSHI</NavLink>
            </Link>
           
            </NavItem>
            <NavItem>
           <Link style={{ textDecoration: "none", }}  to="/sweet_buns">
           <NavLink >
             SWEET BUNS</NavLink>
             </Link>
            </NavItem>
      
            <NavItem>
          
              <Link style={{ textDecoration: "none", }} to="/soup"> 
               <NavLink >SOUP  </NavLink>
               </Link>
            
            </NavItem>

            <NavItem>
          
              <Link style={{ textDecoration: "none", }} to ="/cakes">
              <NavLink >
                CAKES
                </NavLink>
                </Link>
            
            </NavItem>
            <NavItem>
         
              <Link style={{ textDecoration: "none", }} to="/cold_beverages">
              <NavLink >  C-BEVERAGES   </NavLink>
              </Link>
            
            </NavItem>
            <NavItem>
             <Link style={{ textDecoration: "none", }} to="/hot_beverages">  <NavLink >H-BEVERAGES </NavLink></Link>    
            </NavItem>
            <NavItem>
            
              <Link style={{ textDecoration: "none", }}  to="/others">
              <NavLink >   OTHERS </NavLink></Link>       
            </NavItem>
          
          </Nav>
          
        </Collapse>
      </Navbar>
      </Commondiv>
  );
}

export default Example;