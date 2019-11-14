import React from 'react';
import './stylesheets/Footer.css'

const Footer = ({logo}) =>
  <footer className='footer'>
    <div className='container'>
      <h1 className='logo'>
        {logo}
      </h1>
    </div>
  </footer>

export default Footer;