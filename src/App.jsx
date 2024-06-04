import { useState } from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
function App() {
  const slides =[
    {url:"/cart.jpg", title:"Cart"},
    {url:"/iphone.jpg", title:"iphone"},
    {url:"/laptop.jpg", title:"laptop"},
    {url:"/setup.jpg", title:"setup"},
    {url:"/headphone.jpg", title:"headphone"},
  ]

  const containerStyles={
    width: '500px',
    height: "280px",
    margin:'0 auto',
    cursor:'pointer',
  }
  return (
    <>
      <Navbar/>
      
      {/* <img src="cart.jpg" alt="cover pic" /> */}
      <div className="sliders" style={containerStyles}>
      <ImageSlider slides={slides}/>
      </div>
      
      <h1 className="title">Please log In or sign up to get all personalized services</h1>
      <div>
       <p style={{color:"white"}}> 
      
      </p>  
      </div>
     <Footer/>
    </>
  );
}

export default App;
