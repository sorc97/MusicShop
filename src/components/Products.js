import React from 'react'
import Filters from './Filters'
import ProductsList from './ProductsList'
import { ProductsListContainer } from '../redux/Containers'
import './stylesheets/Products.css'

const filters = [
  'По цене',
  'По дате',
  'По имени'
]

const Products = () => 
  <main className='products'>
    <Filters filters={filters}/>
    <ProductsListContainer/>
  </main>

export default Products