import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col className="d-flex align-items-center">
            {/* <BsBootstrap size={30} className="me-2" /> */}
            <span>© 2024 Hamro Gadget, Inc, Lalitpur,Nepal | All rights reserved</span>
          </Col>

          <Col className="text-end">
            <a href="https://twitter.com" className="text-dark me-4">
              <FaTwitter size={40} />
            </a>
            <a href="https://instagram.com" className="text-dark me-4">
              <FaInstagram size={40} />
            </a>
            <a href="https://facebook.com" className="text-dark">
              <FaFacebookF size={40} />
            </a>
          </Col>
        </Row>
          <form className="d-flex" role="search">
        <input type="text" placeholder="Search" />
        <button onClick={(()=>alert("Processing request..."))} className='bg-primary'>Search</button>
      </form>
      </Container>
    </footer>
  );
};

export default Footer;
