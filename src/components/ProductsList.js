import React, { Component } from 'react'
import Product from './Product'
import './stylesheets/ProductsList.css'
  

class ProductsList extends Component {

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData('/api/products');
  }
  
  render() {
    const { products } = this.props;
    console.log(products);
    
    return(
      <div className='products-list-wrapper'>
        {
          (products.length === 0) ?
          <p>No products</p> :
          <ul className='products-list'>
            {
              products.map(product =>
                <Product key={product._id} {...product}/>
              )
            }
          </ul>
        }
      </div>
    )
  }
}


export default ProductsList