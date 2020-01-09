import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SortItem from './SortItem'
import { withRouter } from 'react-router-dom'
import { removeFromUrlQuery } from '../lib/array-helpers'
import './stylesheets/Sort.css'

const Sort = ({
  sortList = [],
  location = {}
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
      {
        (query.includes('sort')) &&
        <span>
          <Link
            className='sort-remove'
            to={removeFromUrlQuery('sort', query)}
          >
            &times;
          </Link>
        </span>
      }
    </div>
  )
}

Sort.propTypes = {
  sortList: PropTypes.array,
  location: PropTypes.object
}

export default withRouter(Sort);