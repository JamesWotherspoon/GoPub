import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import {
  Button, Container, Nav, Navbar, NavbarBrand, NavItem,
} from 'react-bootstrap';
import { GoThreeBars } from 'react-icons/go';

export default function Navbars() {
  return (
    <Navbar className="bg-dark text-light position-fixed w-100 top-0">
      <Container className="d-flex justify-content-between">
        <NavbarBrand className="text-light">
          GoPub.io
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Button variant="secondary" className="rounded mx-3 btn-sm">
              Become a partner pub
            </Button>
          </NavItem>
          <NavItem>
            <GoThreeBars className="h-100" />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>

  );
}
