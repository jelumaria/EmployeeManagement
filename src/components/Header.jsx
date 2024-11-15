import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="bg-success position-fixed w-100" style={{ paddingTop: '5px', marginTop: '0' }}>
      <Container>
        <Navbar.Brand style={{ color: 'white' }} className="fs-5 fw-bolder">
          Employee Management
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
