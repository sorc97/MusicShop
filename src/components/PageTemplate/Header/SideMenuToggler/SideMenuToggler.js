import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './SideMenuToggler.css'

const SideMenuToggler = ({ handleClick = f => f }) =>
  <button
    onClick={handleClick}
    className='menu-toggler'
  >
    <FontAwesomeIcon icon={faBars} />
  </button>

SideMenuToggler.propTypes = {
  handleClick: PropTypes.func
}

export default SideMenuToggler
