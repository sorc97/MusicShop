import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ProductsCaption.css'

const ProductsCaption = ({
  category = "",
  categoryName = "",
  search = ""
}) => {

  let caption = "Все товары";

  if (category) {
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
          <svg className='goBack-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          </Link>
        </span>
      }
    </div>
  )
}

ProductsCaption.propTypes = {
  category: PropTypes.string,
  search: PropTypes.string,
  categoryName: PropTypes.string
}

export default ProductsCaption