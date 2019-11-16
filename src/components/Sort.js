import React from 'react'
import { NavLink } from 'react-router-dom'
import './stylesheets/Sort.css'

const Sort = ({sort}) =>
  <div className='sort'>
    <ul className='sort-list'>
      {
        sort.map((item, i) => {
          const sortName = Object.keys(item)[0];
          const sortValue = Object.values(item)[0];
          
          return(
            <li 
              key={i} 
              className='sort-item'
            >
              <NavLink
                 className='sort-item-link'
                 to={`/sort/${sortValue}`}
              >
                {sortName}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
    <span>
      <NavLink className='sort-remove' to={`/`}>
        &times;
      </NavLink>
    </span>
  </div>

export default Sort