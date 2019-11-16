import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import './stylesheets/SortItem.css'

const SortItem = ({
  match, item, sortValueInURL
}) => {
  
  const sortName = Object.keys(item)[0];
  const sortValue = Object.values(item)[0];
  
  const classes = classNames(
    'sort-item-link',
    (sortValue === sortValueInURL) && 'active'
  )

  return(
    <li className='sort-item'>
      <Link 
        className={classes}
        to={`${match.url}?sort=${sortValue}`}
      >
        {sortName}
      </Link>
    </li>
  )
}

export default SortItem;