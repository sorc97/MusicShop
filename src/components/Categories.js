import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, } from 'react-router-dom'
import './stylesheets/Categories.css'

const Categories = ({
  categoriesItems = [], fetchData = () => {}
}) => {
  
  const clickHandler = (e, category) => {
    let target = e.target;
    
    if(target.classList.contains('active')) return;
    
    let encodedCategory = encodeURIComponent(category);
    let url = `/api/products/category/${encodedCategory}`;
    
    fetchData(url);
  }

  return(
    <aside className='categories'>
      <ul className='categories-list'>
        {
          categoriesItems.map((category, i) => 
            <li key={i} 
              className='categories-item'
            >
              <NavLink
                className='categories-link'
                to={`/category/${encodeURIComponent(category)}`}
                onClick={e => clickHandler(e, category)}
              >
                {category}
              </NavLink>
            </li>
          )
        }
      </ul>
    </aside>
  )
}
  

Categories.propTypes = {
  categoriesItems: PropTypes.array,
  fetchData: PropTypes.func
}

export default Categories