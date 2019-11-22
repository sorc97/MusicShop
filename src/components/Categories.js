import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, } from 'react-router-dom'
import './stylesheets/Categories.css'

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
              to={`/category/${category.toLowerCase()}`}
            >
              {category}
            </NavLink>
          </li>
        )
      }
    </ul>
  </aside>
  

Categories.propTypes = {
  categoriesItems: PropTypes.array,
  fetchData: PropTypes.func
}

export default Categories