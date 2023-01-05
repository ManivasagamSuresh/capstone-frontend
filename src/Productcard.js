import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

function Productcard({prod}) {
  return (

    <div className='col-lg-3 productcard description'>
      <div class="card" style={{width: "18rem"}}>
      <img height={"250px"} className='cardimage card-img-top' src={`${prod.image}`}/>
      <div className='card-body'>  
      <h6>{prod.description}</h6>
      <div>Price : {prod.price}</div><span>( inclusive of all taxes )</span>
      <div>Product Details : {prod.details}</div>
      <div>Warranty : {prod.warranty} </div>
      </div>
      </div>
    </div>
  )
}

export default Productcard