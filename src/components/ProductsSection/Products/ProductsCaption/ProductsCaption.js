import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { firstLetterToUpperCase } from '../../../../lib/array-helpers'
import { categoriesList } from '../../../../lib/config'
import './ProductsCaption.css'

const ProductsCaption = ({ category = "", search = "" }) => {
  /* const categoryText = categoriesList.filter(
    item => item.toLowerCase() === category
  )[0] || "категория не найдена"; */
  
  return (
    <div className='products-caption'>
      <h1 className='products-mainCategory'>
        {(category) ? firstLetterToUpperCase(category) :
          (search) ? 'Поиск' : 'Все товары'}
      </h1>
      {
        (category || search) &&
        <span>
          <Link to={'/'} className='products-goBack'>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </Link>
        </span>
      }
    </div>
  )
}

ProductsCaption.propTypes = {
  category: PropTypes.string,
  search: PropTypes.string
}

export default ProductsCaption