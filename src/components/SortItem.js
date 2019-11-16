import React from 'react'
import classNames from 'classnames'

const SortItem = ({}) => {
  const sortName = Object.keys(item)[0];
  const sortValue = Object.values(item)[0];
  
  return(
    <li 
      key={i} 
      className='sort-item'
    >
      <span
        className={(sortValue === sortValueInURL) ? 
          'sort-item-link active': 
          'sort-item-link'
        }
        onClick={e => clickHandler(e, sortValue) }
      >
        {sortName}
      </span>
    </li>
  )
}
