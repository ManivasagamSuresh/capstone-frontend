import React from 'react'

function Topbar({filterBrand,filterGender,filterModel,searchfilter}) {
  
  return (
    
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item mx-2">
          <select className='form-control ' onChange={(e)=>{filterBrand(e.target.value)}}>
            <option>-Brand-</option>
            <option value={"PUMA"}>PUMA</option>
            <option value={"ADDIDAS"}>ADDIDAS</option>
            <option value={"WOODLAND"}>WOODLAND</option>
            <option value={"HRX"}>HRX</option>
          </select>
          </li>
          <li className="nav-item mx-2">
          <select className='form-control' onChange={(e)=>{filterModel(e.target.value)}}>
            <option>-Model-</option>
            <option value={"Sneakers"}>Sneakers</option>
            <option value={"Boots"}>Boots</option>
            <option value={"Sports"}>Sports</option>
          </select>
          </li>
          <li className='nav-item mx-2'>
          <select className='form-control' onChange={(e)=>{filterGender(e.target.value)}}>
          <option>-Gender-</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unisex</option>
          </select>
      
        
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search Brand" aria-label="Search" onChange={(e)=>{searchfilter(e.target.value)}}/>
      
    </form>
  </div>
</nav>
    
  )
}

export default Topbar