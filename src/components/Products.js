import React from 'react'
import { 
  ProductsListContainer,
  SortContainer
} from '../redux/Containers'
import './stylesheets/Products.css'


const Products = () => 
  <div className='products'>
    <SortContainer/>
    <ProductsListContainer/>
  </div>

export default Products