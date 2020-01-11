import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import { makeUrlQuery, removeFromUrlQuery } from '../../lib/array-helpers'
import './Pagination.css'

const Pagination = ({
  allElements, elemPerPage, location, currentPage
}) => {

  let paginationLength = Math.ceil(allElements.length / elemPerPage);
  let search = location.search;  //current search query
  let pages = [...Array(paginationLength)].map((item, i) => i + 1);  //Pages amount
  
  return (
    (currentPage <= paginationLength) &&
    <ul className='pagination-list'>
      {
        pages.map(number => {
          //calculated classes for each element
          const classes = classNames({
            'pagination-link': true,
            active: currentPage === number
          })

          return (
            <li key={number}>
              <Link
                to={
                  (number === 1) ?
                    removeFromUrlQuery('page', search) :
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

Pagination.propTypes = {
  allElements: PropTypes.array, 
  elemPerPage: PropTypes.number, 
  location: PropTypes.object, 
  currentPage: PropTypes.number
}

Pagination.defaultProps = {
  allElements: [], 
  elemPerPage: 10, 
  location: {}, 
  currentPage: 1
}

export default withRouter(Pagination);