import React from 'react'
import Filters from './Filters'
import ProductsList from './ProductsList'
import './stylesheets/Products.css'

const filters = [
  'По цене',
  'По дате',
  'По имени'
]

const Products = () => 
  <main className='products'>
    <Filters filters={filters}/>
    <ProductsList/>
  </main>

export default Products