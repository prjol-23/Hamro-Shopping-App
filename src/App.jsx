import { useState } from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import CardBS from "./components/CardBS";
function App() {
  return (
    <>
      <Navbar/>
      <img src="cart.jpg" alt="cover pic" />
      <h1 className="title">Please log In or sign up</h1>
      <CardBS/>
    </>
  );
}

export default App;
