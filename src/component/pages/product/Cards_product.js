import React from 'react'
import './Product.css'
import wiwi from '../../../assets/wail_tr-removebg-preview.png';
function Cards_product(props) {
  return (
    <div className='container_card'>
      <h1>{props.title}</h1>
      <img src={props.images}/>
      <p className='description'>{props.description}</p>
      <p className='prix'>{props.price}$</p>
    </div>
  )
}

export default Cards_product