import React from 'react'
import './stylesheets/Sort.css'

const Sort = ({sort, changeSort}) =>
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
              onClick={() => changeSort(sortValue)}
            >
              {sortName}
            </li>
          )
        }
        )
      }
    </ul>
  </div>

export default Sort