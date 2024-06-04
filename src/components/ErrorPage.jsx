import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="error">
            <h1>404, Page not found</h1>
            <h2>Please try again :)</h2>
            <Link to='/'>Return to home</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default ErrorPage