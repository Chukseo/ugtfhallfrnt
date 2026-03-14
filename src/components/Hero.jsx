import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section text-white">
      {/* Navbar inside Hero */}
      <div className="nav-wrapper">
        <Navbar expand="lg" className="hero-navbar">
          <Container>
            <Navbar.Brand href="#">Safe Haven</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/home">HOME</Nav.Link>
                <Nav.Link href="/halls">HALLS</Nav.Link>
                <Nav.Link href="/admin">ADMIN</Nav.Link>
                {/* ✅ Updated Book Hall button */}
                <Button
                  className="btn-blue ms-3"
                  href="https://safehaven-30228073381.us-west2.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK HALL
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Hero Content */}
      <div className="hero-overlay text-center">
        <h1 className="fw-bold mb-3">
          Find your perfect venue, book with confidence
        </h1>
        <p className="lead mb-4">
          Browse elegant halls, check availability instantly, and pay securely
          via PayPal, Stripe, or Paystack.
        </p>
        <button className="btn btn-purple">GET STARTED</button>
      </div>
    </section>
  );
};

export default Hero;