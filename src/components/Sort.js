import React from 'react'
import { NavLink } from 'react-router-dom'
import SortItem from './SortItem'
import { removeFromUrlQuery } from '../lib/array-helpers'
import './stylesheets/Sort.css'

const Sort = ({
  sort, 
  location
}) => {

  let query = location.search;
  // let sortValueInURL = queryString.parse(query).sort;

  return (
    <div className='sort'>
      <ul className='sort-list'>
        {
          sort.map((item, i) => 
            <SortItem 
              key={i}
              item={item} 
              query={query}
            />
          )
        }
      </ul>
      <span>
        {
          (query.includes('sort')) &&
            <NavLink 
              className='sort-remove' 
              to={removeFromUrlQuery('sort', query)}
            >
              &times;
            </NavLink>
        }
      </span>
    </div>
  )
}

export default Sort;