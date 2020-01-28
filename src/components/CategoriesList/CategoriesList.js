import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { makeURL } from '../../lib/helpers'

const CategoriesList = ({ categories = [] }) =>
  <ul className='categories-list'>
    {
      categories.map((category, i) =>
        <li key={i}
          className='categories-item'
        >
          <NavLink
            className='categories-link'
            to={`/category/${makeURL(category)}`}
          >
            {category}
          </NavLink>
        </li>
      )
    }
  </ul>

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesList