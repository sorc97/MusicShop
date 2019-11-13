import React, {Component} from 'react'

class Product extends Component {
  
  render() {
    const {name} = this.props; 

    return(
      <li className='product'>
        <h1>{name}</h1>
      </li>
    )
  }
}

export default Product;