import React from 'react'
import Categories from '../Categories/Categories'
import Sort from './Sort/Sort'
import ProductsContainer from './Products/ProductsContainer'
import { categoriesList, sortList } from '../../lib/config'
import './ProductsSection.css'

const ProductsSection = () =>
  <main className='catalog'>
    <div className='container'>
      <div className='main-inner'>
        <Categories 
          categoriesList={categoriesList} />
        <div className='products'>
          <Sort sortList={sortList} />
          <ProductsContainer />
        </div>
      </div>
    </div>
  </main>

export default ProductsSection