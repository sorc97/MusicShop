import React from 'react'
import Sort from './Sort'
import VisibleProducts from './containers/VisibleProducts'
import { sortList } from '../lib/config'
import './stylesheets/Products.css'


const Products = () => 
  <div className='products'>
    <Sort sortList={sortList}/>
    <VisibleProducts/>
  </div>

export default Products