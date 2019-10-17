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
              <NavLink
                className="nav-link"
                exact
                to="https://www.omnibiz.com/index.html"
              >
                Home
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="active">
                Solutions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink className="nav-link" to="/">
                    Business website
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="https://www.omnibiz.com/online-store.html"
                  >
                    Online store
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="https://www.omnibiz.com/business-listing.html"
                  >
                    Business listing
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    to="https://www.omnibiz.com/business-scan.html"
                  >
                    Business scan
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink
                className="nav-link"
                to="https://www.omnibiz.com/reachandpartners.html"
              >
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
              <NavLink
                className="nav-link signup"
                to="https://omnibiz.com/registerbusiness/"
              >
                Get Started
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};
