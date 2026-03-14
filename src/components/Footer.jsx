import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li><a href="Home" className="footer-link">Help Center</a></li>
              <li><a href="Home" className="footer-link">Cover</a></li>
              <li><a href="Home" className="footer-link">Anti discrimination</a></li>
              <li><a href="Home" className="footer-link">Cancel bookings</a></li>
              <li><a href="Home" className="footer-link">Report Neighborhood concern</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-bold">Hosting</h5>
            <ul className="list-unstyled">
              <li><a href="Home" className="footer-link">Safehaven your choice</a></li>
              <li><a href="Home" className="footer-link">Rentals for hosts</a></li>
              <li><a href="Home" className="footer-link">Professional search</a></li>
              <li><a href="Home" className="footer-link">Community forum</a></li>
            </ul>
          </div>

          {/* Safehaven */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-bold">Safehaven</h5>
            <ul className="list-unstyled">
              <li><a href="Home" className="footer-link">Newsroom</a></li>
              <li><a href="Home" className="footer-link">New features</a></li>
              <li><a href="Home" className="footer-link">Events</a></li>
              <li><a href="Home" className="footer-link">Investors</a></li>
            </ul>
          </div>

          {/* Meet the professionals */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-bold">Meet the professionals</h5>
            <ul className="list-unstyled">
              <li><a href="Home" className="footer-link">Halls</a></li>
              <li><a href="Home" className="footer-link">Vacation</a></li>
              <li><a href="Home" className="footer-link">Luxury</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="d-flex justify-content-end mb-3">
          <a href="Home" className="social-icon"><FaFacebookF /></a>
          <a href="Home" className="social-icon"><FaTwitter /></a>
          <a href="Home" className="social-icon"><FaLinkedinIn /></a>
        </div>

        {/* Copyright */}
        <div className="text-center border-top pt-3">
          <small>© 2026 SafeHaven. All rights reserved. Powered by UGTF.</small>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .footer-link {
            color: #333;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
            transition: color 0.3s ease;
          }
          .footer-link:hover {
            color: #000;
          }
          .social-icon {
            color: #333;
            font-size: 1.2rem;
            margin-left: 15px;
            transition: color 0.3s ease;
          }
          .social-icon:hover {
            color: #000;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;