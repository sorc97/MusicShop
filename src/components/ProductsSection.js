import React from 'react'
import Categories from './Categories'
import Sort from './Sort'
import VisibleProducts from './containers/VisibleProducts'
import { categoriesList, sortList } from '../lib/config'
import './stylesheets/ProductsSection.css'

const ProductsSection = () =>
  <main className='main-wrapper'>
    <div className='container'>
      <div className='main-inner'>
        <Categories 
          categoriesList={categoriesList} />
        <div className='products'>
          <Sort sortList={sortList} />
          <VisibleProducts />
        </div>
      </div>
    </div>
  </main>

export default ProductsSection