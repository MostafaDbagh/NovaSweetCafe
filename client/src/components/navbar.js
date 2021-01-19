import React, { useState } from 'react';
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
        <NavbarBrand href="/" style={{fontFamily:"lobster,sans-serif",color:"rgb(255,243,191)"}}>Yamazaki</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/components/">SUSHI</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="">SWEET BUNS</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="">SOUP</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="">CAKES</NavLink>
            </NavItem>
        
         
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                BEVERAGE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">       HOT BEVERAGES </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">  COLD BEVERAGES </NavLink>
                </DropdownItem>
                <DropdownItem divider />
              
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">       OTHERS </NavLink>
            </NavItem>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;