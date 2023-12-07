import React from 'react'

function Product(props) {
  return (
    <div className='product'>
        <img className='img' src={props.url}/>
        <h3> {props.name}</h3>
        <p>{props.price} Rs</p>
         </div>
  )
}

export default Product
