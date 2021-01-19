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
            <NavLink href="https://github.com/reactstrap/reactstrap">SWEET BUNS</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">SOUP</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">CAKES</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">  COLD BEVERAGES </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">       HOT BEVERAGES </NavLink>
            </NavItem>
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