import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Adminproductcard from './Adminproductcard'
import Productcard from './Productcard'
import Topbar from './Topbar'

function AdminProducts() {
  const[Products,setProducts]=useState([])
  const[Loader,setLoader]=useState(false);
  useEffect(() =>{
    items();
  },[])
  let items = async()=>{
    try {
      setLoader(true);
      let products = await axios.get("http://localhost:3000/admin/products")
     setProducts(products.data);
     setLoader(false);
    } catch (error) {
      alert('error')
    }
  }

  let filterBrand=async(value)=>{
    // console.log(value);
    let brand ={"brand":`${value}`}
    console.log(brand)
    let data = await axios.post('http://localhost:3000/admin/products/filter/brand',brand);
    console.log(data.data);
    setProducts(data.data)
  }
  let filterGender=async(value)=>{
    // console.log(value);
    let gender ={"gender":`${value}`}
    console.log(gender)
    let data = await axios.post('http://localhost:3000/admin/products/filter/gender',gender);
    console.log(data.data);
    setProducts(data.data)
  }
  let filterModel=async(value)=>{
    // console.log(value);
    let model ={"Model":`${value}`}
    console.log(model)
    let data = await axios.post('http://localhost:3000/admin/products/filter/model',model);
    console.log(data.data);
    setProducts(data.data)
  }
 let searchfilter=async(value)=>{
console.log(value);
let keys=["brand"]
let product = await axios.get("http://localhost:3000/admin/products")
let products = product.data;
console.log(products);
let filtered = products.filter((item)=>{
 return item.brand.toLowerCase().includes(value)});
setProducts(filtered);
console.log(filtered);
  }

  return (
<>

{
        Loader ?  

        <div class="d-flex justify-content-center">
    <img className='preloader' height={"100px"}  src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'/>
  </div>

        
        : 
        <div className='container viewproducts' >
          <Topbar filterBrand={filterBrand} filterGender={filterGender} filterModel={filterModel} searchfilter={searchfilter}/>
        <div className='row'>
          <h2 className='col-lg-12 heading'>All your Products are listed below</h2>
          {
            Products.map((prod)=>{
              return <Adminproductcard prod={prod}/>
            })
          }
        </div>
      </div>
}
</>


    
  )
}

export default AdminProducts