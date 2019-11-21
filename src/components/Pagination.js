import React from 'react'
import { Link } from 'react-router-dom'
import { makeUrlQuery, removeFromUrlQuery } from '../lib/array-helpers'
import classNames from 'classnames'
import './stylesheets/Pagination.css'

const Pagination = ({
  allElements, elemPerPage, query, location
}) => {

  let paginationLength = Math.ceil(allElements.length/elemPerPage);
  let search = location.search;   //current search query
  let currentPage = +query.page || 1;
  let pages = [...Array(paginationLength)].map((item, i) => i+1);  //pagination pages


  return(
    <ul className='pagination-list'>
      {
        pages.map(number => {
          //calculated classes for each element
          const classes = classNames({
            'pagination-link': true,
            active: currentPage === number
          })

          return(
            <li key={number}>
              <Link 
                to={
                  (number === 1) ?
                    removeFromUrlQuery('page', search):
                    makeUrlQuery('page', number, search)
                }
                className={classes}
              >
                {number}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )

}
export default Pagination;