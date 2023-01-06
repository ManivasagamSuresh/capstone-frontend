import axios from 'axios';
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { Config } from './Config';

function Adminproductcard({prod}) {
    let navigate = useNavigate();
    let deleteProd = async(id)=>{
      try {
        let proddelete = await axios.post(`${Config.api}/admin/deleteproduct/${id}`)
        alert('Product deleted')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='col-lg-3 productcard description'>
      <div class="card cardadmin" >
      <img height={"250px"}  className='cardimage card-img-top' src={`${prod.image}`}/>
      <div className='card-body'>  
      <h6>{prod.description}</h6>
      <div>Price : {prod.price}</div><span>( inclusive of all taxes )</span>
      <div>Product Details : {prod.details}</div>
      <div>Warranty : {prod.warranty}</div>
      <button className='btn btn-warning' onClick={()=>{
            navigate(`/portal/editproduct/${prod._id}`)
      }}> Edit Product</button>
      <button type={'button'} className='btn btn-danger delete' onClick={()=>{
        deleteProd(`${prod._id}`)
      }}>Delete Product</button>
      </div>
      </div>
    </div>
  )
}

export default Adminproductcard;