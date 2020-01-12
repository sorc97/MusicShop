import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { makeURL } from '../../lib/helpers'
import './Categories.css'

const Categories = ({
  categoriesList = []
}) =>
  <aside className='categories'>
    <ul className='categories-list'>
      {
        categoriesList.map((category, i) => 
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
  </aside>
  

Categories.propTypes = {
  categoriesItems: PropTypes.array
}

export default Categories