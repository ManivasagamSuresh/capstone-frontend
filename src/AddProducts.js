import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Config } from './Config';

function AddProducts() {
  const formik = useFormik({
    initialValues:{
      category:"",
      description : "",
      price : "",
      image :"",
      brand:'',
      details:"",
      gender:"",
      warranty:""
    },
    validate:(values)=>{
          let error = {};
          // if(!values.category){error.category = "please select the category"};
          if(!values.description){error.description = "please provide the description"};
          if(!values.price){error.price = "please enter the price in rupees"};
          if(!values.image){error.image = "please enter the image URL"};
          if(!values.brand){error.brand = "please enter the Brand"};
          if(!values.details){error.details = "please enter the Details"};
          return error;
    },
    onSubmit:async(values)=>{
      try {
        let product =await axios.post(`${Config.api}/admin/addproduct`,values);
        console.log(product.data)
        formik.resetForm();
    
      } catch (error) {
        console.log(error);
      }
          }
  })
  return (
    <div className='container addproduct'>
      
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col-lg-6 form-group'>
          <label className='mt-2'>Category of Shoe</label>
          <select className='form-control mt-2' name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option>-Select-</option>
            <option>Sneakers</option>
            <option>Boots</option>
            <option>Sports</option>
          </select>
        </div>
        <div className='col-lg-6 form-group'>
          <label className='mt-2'>Description of Shoe</label>
          <input className={`form-control mt-2 ${(formik.touched.description && formik.errors.description)? "error":""}` } type={"text"} name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {
            (formik.touched.description && formik.errors.description) ? <span style={{color:"red"}}>{formik.errors.description}</span> : null
          }

        </div>
        <div className='col-lg-6'>
        <label className='mt-2'>Price in Rupees</label>
          <input className={`form-control mt-2 ${(formik.touched.price && formik.errors.price)? "error":""}` } type={"text"} name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {
            (formik.touched.price && formik.errors.price) ? <span style={{color:"red"}}>{formik.errors.price}</span> : null
          }

        </div>
        <div className='col-lg-6'>
        <label className='mt-2'>Image URL</label>
          <input className={`form-control mt-2 ${(formik.touched.image && formik.errors.image)? "error":""}` } type={"text"} name="image" value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {
            (formik.touched.image && formik.errors.image) ? <span style={{color:"red"}}>{formik.errors.image}</span> : null
          }

        </div>
        <div className='col-lg-6 form-group'>
          <label className='mt-2'>Brand</label>
          <select className='form-control mt-2' name="brand" value={formik.values.brand} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option>-Select-</option>
            <option>PUMA</option>
            <option>ADDIDAS</option>
            <option>WOODLAND</option>
            <option>HRX</option>
          </select>
        </div>
        <div className='col-lg-6 form-group'>
          <label className='mt-2'>Gender of Shoe</label>
          <select className='form-control mt-2' name="gender" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option>-Select-</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unisex</option>
          </select>
        </div>
        <div className='col-lg-6'>
        <label className='mt-2'>Shoe details</label>
          <input className={`form-control mt-2 ${(formik.touched.details && formik.errors.details)? "error":""}` } type={"text"} name="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {
            (formik.touched.details && formik.errors.details) ? <span style={{color:"red"}}>{formik.errors.details}</span> : null
          }

        </div>

        <div className='col-lg-6 form-group'>
          <label className='mt-2'>Warranty </label>
          <select className='form-control mt-2' name="warranty" value={formik.values.warranty} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option>-Select-</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
        </div>
       
        <div className='col-lg-12'>
          <button type='submit' className='btn btn-outline-secondary mt-4'>Add Product</button>
        </div>
        </div>
        
        </form>
      </div>  
    
  )
}

export default AddProducts