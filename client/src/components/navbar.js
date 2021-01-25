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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{width:"90%",margin:"0 auto"}}>
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
              <NavLink >  COLD BEVERAGES   </NavLink>
              </Link>
            
            </NavItem>
            <NavItem>
             <Link style={{ textDecoration: "none", }} to="/hot_beverages">  <NavLink >HOT BEVERAGES </NavLink></Link>    
            </NavItem>
            <NavItem>
            
              <Link style={{ textDecoration: "none", }}  to="/others">
              <NavLink >   OTHERS </NavLink></Link>       
            </NavItem>
          
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;