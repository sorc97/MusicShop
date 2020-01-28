import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  makeURL,
  firstLetterToUpperCase
} from '../../lib/helpers'

const wrapperStyle = {
  margin: 0,
  fontWeight: 'normal'
}

const CategoryLink = ({
  className = "",
  category = ""
}) =>
  <h3 style={wrapperStyle}>
    <Link
      className={className}
      to={`/category/${makeURL(category)}`}
    >
      {firstLetterToUpperCase(category)}
    </Link>
  </h3>
CategoryLink.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string
}

export default CategoryLink
