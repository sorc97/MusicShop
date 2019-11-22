import React from 'react'
import { NavLink } from 'react-router-dom'
import SortItem from './SortItem'
import { withRouter } from 'react-router-dom'
import { removeFromUrlQuery } from '../lib/array-helpers'
import './stylesheets/Sort.css'

const Sort = ({
  sortList, 
  location
}) => {

  let query = location.search;

  return (
    <div className='sort'>
      <ul className='sort-list'>
        {
          sortList.map((item, i) => 
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

export default withRouter(Sort);