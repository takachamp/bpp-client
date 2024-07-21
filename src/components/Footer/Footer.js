import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <ul className='footer-links'>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;