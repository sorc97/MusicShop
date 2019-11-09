import React from 'react'
import PropTypes from 'prop-types'
import './stylesheets/Categories.css'

const Categories = ({
  categoriesItems = [], onClick = () => {}
}) =>
  <aside className='categories'>
    <ul className='categories-list'>
      {
        categoriesItems.map((categiry, i) =>
          <li key={i} 
            onClick={onClick} 
            className='categories-item'
          >
            {categiry}
          </li>
        )
      }
    </ul>
  </aside>

Categories.propTypes = {
  categoriesItems: PropTypes.array,
  onClick: PropTypes.func
}

export default Categories