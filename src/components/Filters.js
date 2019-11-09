import React from 'react'
import './stylesheets/Filters.css'

const Filters = ({filters}) =>
  <div className='filters'>
      <ul className='filters-list'>
        {
          filters.map((item, i) =>
            <li key={i} className='filters-item'>
              {item}
            </li>
          )
        }
      </ul>
  </div>

export default Filters