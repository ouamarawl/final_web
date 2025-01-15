import React from 'react'
import './Product.css'
import Cards_product from './Cards_product'
import Data_product from './data_product'

function Product() {
  return (
  <div className='produit'>
   <h1 id='first_h1_2'> test for product list </h1> 
    <div className='container-product'> 
       
       {Data_product.map((currentValue, index) => (
        <Cards_product
          key={index}
          title={currentValue.title}
          images={currentValue.image}
          description={currentValue.description}
          price={currentValue.price}
        />
      ))}
    </div>
  </div>  
  )
}

export default Product