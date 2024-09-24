// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: for custom styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">Contact Us: <a href="tel:+919655504999" className="text-light">+91 96555 04999</a></p>
        <p className="mb-0">Email: <a href="mailto:info@nakshatratravels.com" className="text-light">info@nakshatratravelspalani.com</a></p>
        <p className="mb-0">&copy; {new Date().getFullYear()} Nakshatra Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
