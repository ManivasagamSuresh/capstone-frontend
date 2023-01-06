import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Config } from './Config'

function Login() {
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if(!values.email){
        error.email = "Please Enter Email"
      }
     
      return error;
    },
    onSubmit: async(values) => {
      let user =await axios.post(`${Config.api}/admin/login`,values);
       console.log(user.data);
       if(user.data.message === "success"){
        navigate("/portal/dashboard")
       }
       else{
        
       }
      
    },
  });
  return (
    <div className="container nav justify-content-center" id="login">
      <form onSubmit={formik.handleSubmit} >
      <div className="row login1  nav-link">
      <h6 className="col-lg-12 text-center">Please Provide your Login Credential</h6>
        <div className="col-lg-12">
        <div className="form-group" >
          <label>Email</label>
          <input
            className={`form-control ${(formik.touched.email && formik.errors.email) ? 'error' : ""} ${(formik.touched.email && !formik.errors.email) ? 'success' : ""} `}
            type={"email"}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={"admin@gmail.com"}
          />
          {
            (formik.touched.email && formik.errors.email) ? <span style={{color:"red"}}>{formik.errors.email}</span> : null
          }
        </div>
        </div><br/>
        <div className="col-lg-12"> 
        <div className="form-group">
          <label>Password</label>
          <input
            className={`form-control`}
            type={"password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={"admin"}
          />
        </div><br/>
        </div>
        <div className="col-lg-4"> 
        <div >
          <button type="submit" className="btn btn-outline-secondary mt-1 mb-2">Login</button>
        </div>
        </div>
        </div>   
      </form>
     
    </div>
  );
}

export default Login;
