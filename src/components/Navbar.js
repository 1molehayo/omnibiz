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
    <Navbar className="nav" color="light" fixed="true" light expand="lg">
      <div className="container">
        <NavbarBrand href="/">
          <img src={logo} className="logo img-fluid" alt="omnibiz" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Solutions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink className="nav-link" to="/business">
                    Business website
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/business">
                    Online store
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/business">
                    Business listing
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/business">
                    Business scan
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className="nav-link" to="/page">
                Reach and Partners
              </NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/request">
                Request for demo
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link signup" to="/signup">
                Get Started
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};
