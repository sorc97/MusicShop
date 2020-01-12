import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const CategoriesItem = ({ category = {} }) => {
  const categoryName = Object.values(category)[0];
  const categoryValue = Object.keys(category)[0];

  return (
    <li
      className='categories-item'
    >
      <NavLink
        className='categories-link'
        to={`/category/${categoryValue}`}
      >
        {categoryName}
      </NavLink>
    </li>
  )
}

CategoriesItem.propTypes = {
  category: PropTypes.object
}

export default CategoriesItem