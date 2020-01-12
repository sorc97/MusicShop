import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './ProductsCaption.css'

const ProductsCaption = ({ 
  category = "", 
  categoryName = "",
  search = "" 
}) => {
  
  let caption = "Все товары";

  if(category) {
    caption = categoryName || "Категория не найдена"; 

  } else if (search) {
    caption = "Поиск";
  }

  return (
    <div className='products-caption'>
      <h1 className='products-mainCategory'>
        {caption}
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
  categoryName: PropTypes.string,
  search: PropTypes.string
}

export default ProductsCaption