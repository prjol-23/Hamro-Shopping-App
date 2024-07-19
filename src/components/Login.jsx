import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Login.css'
const Login = () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms*1000));
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
} = useForm();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleOnChange = (e) =>{
 
  setFormData({ ...formData, email: e.target.value });
}
  return (
    <>
    <Navbar/>
    <div className="login-container">
    <div className="login-box">
      <div className="login-header">
        <img src="ppc.png" alt="logo" />
      </div>
      <div className="login-content">
        <h2>Welcome back</h2>
       
        <button className="login-button facebook">Log in with Facebook</button>
        <button className="login-button google">Log in with Google</button>
        
        
        <Link to="/register"><p>Create an account</p></Link>
        
        <div className="divider">OR</div>

        <form className="login-form">
        <p>Or enter your account details.</p>
          <input
          {...register("email", {
            required: { value: true, message: "required" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
        })}
            onChange={handleOnChange}
           type="email" 
           placeholder="Email" 
           className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
        
           <Link to=""><p>Forgot password?</p></Link>
    
          <Link to="/user">
             <button type="submit" className="login-submit">Sign in</button>
          </Link>
          
        </form>
      </div>
    </div>
   
  </div>
  <Footer/>
    </>
  )
}

export default Login

