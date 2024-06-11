import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Registration.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [formData, setFormData] = useState({
    name:"",
    surname:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "Passwords do not match" });
      return;
    }
    // Handle form submission
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-box">
          <div className="register-header">
            <img src="ppc.png" alt="logo" />
          </div>
          <div className="register-content">
            <h2>Create an Account</h2>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input
    placeholder="Name"
    {...register("name", {
        required: { value: true, message: "required" },
        minLength: { value: 3, message: "Minimum length is 3" },
        maxLength: { value: 8, message: "Maximum length is 8" },
    })}
    value={formData.name}
    onChange={(e) => {
      setFormData({ ...formData, name: e.target.value });
    }}
    type="text"
    />
  {errors.name && (
      <div className="error-message">{errors.name.message}</div>
    )}
    <input
    placeholder="Surname"
    {...register("surname", {
        required: { value: true, message: "required" },
        minLength: { value: 3, message: "Minimum length is 3" },
        maxLength: { value: 8, message: "Maximum length is 8" },
    })}
    value={formData.surname}
    onChange={(e) => {
        setFormData({ ...formData, surname: e.target.value });
    }}
    type="text"
    />
  {errors.surname && (
    <div className="error-message">{errors.surname.message}</div>
)}
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
                name="email"
                placeholder="Email"
                className="register-input"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
              
              <input
                {...register("password", { required: "Password is required" })}
                onChange={handleOnChange}
                type="password"
                name="password"
                placeholder="Password"
                className="register-input"
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
              
              <input
                {...register("confirmPassword", { required: "Confirm Password is required" })}
                onChange={handleOnChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="register-input"
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
              
              <button type="submit" className="register-submit" disabled={isSubmitting}>Sign up</button>
            </form>
            <Link to="/login"><b>Already have an account? Log in</b></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;