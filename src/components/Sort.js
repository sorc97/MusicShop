import React from 'react'
import { NavLink } from 'react-router-dom'
import queryString from 'query-string'
import SortItem from './SortItem'
import './stylesheets/Sort.css'

const Sort = ({
  sort, 
  router: {match, location}
}) => {

  let query = location.search;
  let sortValueInURL = queryString.parse(query).sort;
  
  return (
    <div className='sort'>
      <ul className='sort-list'>
        {
          sort.map((item, i) => 
            <SortItem 
              key={i}
              item={item} 
              sortValueInURL={sortValueInURL} 
              match={match}
            />
          )
        }
      </ul>
      <span>
        {
          (location.search) &&
            <NavLink className='sort-remove' to={`${match.url}`}>
              &times;
            </NavLink>
        }
      </span>
    </div>
  )
}

export default Sort;