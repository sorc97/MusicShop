import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import './stylesheets/Sort.css'

const Sort = ({
  sort, 
  router: {history, match, location}
}) => {
  let query = location.search;
  let sortValueInURL = new URLSearchParams(query).get('sort');

  const clickHandler = (e, sortValue) => {    
    history.push(`${match.url}?sort=${sortValue}`)
  }

  return (
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
                <span
                  className={(sortValue === sortValueInURL) ? 
                      'sort-item-link active':'sort-item-link'}
                  onClick={e => clickHandler(e, sortValue) }
                >
                  {sortName}
                </span>
              </li>
            )
          })
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

export default Sort