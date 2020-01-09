import React from 'react';
import PropTypes from 'prop-types'
import './stylesheets/Footer.css'

const Footer = ({ logo = '' }) =>
  <footer className='footer'>
    <div className='container'>
      <h1 className='logo'>
        {logo}
      </h1>
    </div>
  </footer>

Footer.propTypes = {
  logo: PropTypes.string
}

export default Footer;