import React from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  let navigate = useNavigate();
  return (
    <div id='welcome' className='container'>
      <div className='col-lg-12 welcomeH'>
        <h1><i>MB FOOTWEARS</i></h1>
        <h6>Checkout our products and grab Your favourites at lowest price </h6>
        <span>Brands we provide : HRX , ADDIDAS , PUMA , WOODLAND</span>
      </div>
      
      <div className='nav justify-content-center align-middle'>
      <button type={'button'} className='text btn btn-outline-dark nav-link' onClick={()=>{
        navigate('portal/products')
      }}>View Products</button>
      </div>
      <div>
      <button type={'button'} className='welcomelogin btn btn-dark ' onClick={()=>{
        navigate('portal/login')
      }}>Admin Login</button>
      </div>
      </div>
      
    
  )
}

export default Welcome;