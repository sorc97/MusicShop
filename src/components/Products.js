import React from 'react'
import Sort from './Sort'
import ProductsList from './ProductsList'
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