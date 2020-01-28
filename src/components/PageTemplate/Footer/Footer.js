import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ logo = '' }) =>
  <footer className='footer'>
    <div className='container'>
      <Link to='/' className='logo'>
        {logo}
      </Link>
    </div>
  </footer>

Footer.propTypes = {
  logo: PropTypes.string
}

export default Footer