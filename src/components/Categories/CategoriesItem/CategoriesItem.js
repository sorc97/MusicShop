import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const CategoriesItem = ({ title = "", value = "" }) =>
  <li className='categories-item'>
    <NavLink
      className='categories-link'
      to={`/category/${value}`}
    >
      {title}
    </NavLink>
  </li>


CategoriesItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

export default CategoriesItem