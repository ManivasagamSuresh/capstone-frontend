import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  let navigate = useNavigate();
  return (
    <div className='container adminDashboard' >
      <h2 className='col-lg-12 headingdash'><i>You can Add,View and Edit your Products here</i></h2>
      <div className='nav justify-content-center align-middle'>
      <button type='button' className='addproducts dash1 nav-link' onClick={()=>{
        navigate('/portal/addproducts')
      }}> Add Products</button>
      <button type='button' className='adminproducts dash2 nav-link' onClick={()=>{
        navigate('/portal/adminProducts')
      }}>View Products</button>
      </div>
    </div>
    
  )
}

export default AdminDashboard