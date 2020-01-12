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
        categoriesList.map((category, i) => 
          <CategoriesItem category={category} key={i}/>
        )
      }
    </ul>
  </aside>
  

Categories.propTypes = {
  categoriesItems: PropTypes.array
}

export default Categories