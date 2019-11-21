import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import { makeUrlQuery } from '../lib/array-helpers'
import queryString from 'query-string'
import './stylesheets/SortItem.css'

const SortItem = ({
  query, item
}) => {
  
  const sortName = Object.keys(item)[0];
  const sortValue = Object.values(item)[0];
  let sortValueInURL = queryString.parse(query).sort;
  
  const classes = classNames(
    'sort-item-link',
    (sortValue === sortValueInURL) && 'active'
  )

  return(
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

export default SortItem;