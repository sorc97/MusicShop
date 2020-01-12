import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { makeUrlQuery } from '../../../../lib/helpers'
import './SortItem.css'

const SortItem = ({
  query = "", item = {}
}) => {

  const sortName = Object.keys(item)[0];
  const sortValue = Object.values(item)[0];
  let sortValueInURL = queryString.parse(query).sort;

  const classes = classNames(
    'sort-item-link',
    (sortValue === sortValueInURL) && 'active'
  )

  return (
    <li className='sort-item'>
      <Link
        className={classes}
        to={makeUrlQuery('sort', sortValue, query)}
      >
        {sortName}
      </Link>
    </li>
  )
}

SortItem.propTypes = {
  query: PropTypes.string,
  item: PropTypes.object
}

export default SortItem;