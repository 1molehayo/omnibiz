import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="nav" color="light" fixed="true" light expand="md">
      <div className="container">
        <NavbarBrand href="/">
          <img src={logo} className="logo img-fluid" alt="omnibiz" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Solutions
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Dropdown1</DropdownItem>
                <DropdownItem>Dropdown2</DropdownItem>
                <DropdownItem>Dropdown3</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className="nav-link" to="/page">
                Partners
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};
