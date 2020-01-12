import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { 
  makeURL, 
  firstLetterToUpperCase 
} from '../../lib/helpers'

const CategoryLink = ({ 
  className = "",
  category = ""
}) =>
  <Link
    className={className}
    to={`/category/${makeURL(category)}`}
  >
    {firstLetterToUpperCase(category)}
  </Link>

CategoryLink.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string
}

export default CategoryLink
