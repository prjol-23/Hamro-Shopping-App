import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../About.css'
const About = () => {
  return (
    <>
        <Navbar/>
        <div className="about-container">
        <div className="about-content">
          <h1 style={{backgroundColor:"black"}}>About Us</h1>
          <p >
            Welcome to © Hamro Gadget! We are dedicated to bringing you the latest and greatest in technology. 
            Our app provides a wide range of electronic gadgets including smartphones, laptops, headphones, and more. 
            We believe in offering personalized services to enhance your shopping experience.
          </p>
          <p>
            Our mission is to make technology accessible to everyone, providing top-quality products at competitive prices. 
            We are constantly updating our inventory with the newest gadgets to ensure you have access to the best technology available.
          </p>
          <p>
            Thank you for choosing our app for your electronic gadget needs. We look forward to serving you and providing 
            you with an exceptional shopping experience.
          </p>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default About