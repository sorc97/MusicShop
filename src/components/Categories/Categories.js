import React from 'react'
import PropTypes from 'prop-types'
import CategoriesItem from './CategoriesItem/CategoriesItem'
import './Categories.css'

const Categories = ({
  categoriesList = []
}) =>
  <aside className='categories'>
    <ul className='categories-list'>
      {
        categoriesList.map((category, i) => {
          const categoryName = Object.values(category)[0];
          const categoryValue = Object.keys(category)[0];

          return (
            <CategoriesItem
              key={i}
              title={categoryName}
              value={categoryValue} />
          )
        })
      }
    </ul>
  </aside>


Categories.propTypes = {
  categoriesItems: PropTypes.array
}

export default Categories