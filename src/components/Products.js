
import React from 'react'
import IndividualProducts from './IndividualProducts'
import addToCart from './IndividualProducts'
export const Products = ({products,addToCart}) => {
  
  // console.log(products);

  return products.map((individualProduct)=>(
    <IndividualProducts key={individualProduct.ID} individualProduct={individualProduct}
    addToCart={addToCart}
    />
  ))
}

export default Products
