import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
const [Navigate, setNavigate] = useState("Navigation")
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md" className="Nav_main" >
        <NavbarBrand className={Navigate} href="/">NIKHIL MANE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{color:"white"}}>
          <Nav className="ml-auto" navbar >
            <NavItem  >
              <NavLink className={Navigate} href="/components/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={Navigate} href="/components/">EDUCATION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={Navigate} href="/components/">WORK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={Navigate} href="https://drive.google.com/file/d/19okJlcitzUx3xelmWDiAD_OFUvxcLp9b/view?usp=sharing" target="_blank">RESUME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={Navigate} href="/components/">CONTACT ME</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;