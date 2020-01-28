import React from 'react'
import PropTypes from 'prop-types'
import CategoriesList from '../../CategoriesList/CategoriesList'
import './Categories.css'

const Categories = ({
  categoriesList = []
}) =>
  <aside className='categories'>
    <CategoriesList categories={categoriesList} />
  </aside>

Categories.propTypes = {
  categoriesItems: PropTypes.array
}

export default Categories