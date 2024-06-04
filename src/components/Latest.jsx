import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "../Latest.css";
const gadgets = [
  {
    name: "Apple iPhone 14 Pro",
    description:
      "The latest iPhone with a ProMotion display, improved camera system, and A16 Bionic chip for enhanced performance.",
    image_url: "https://example.com/images/iphone14pro.jpg",
  },
  {
    name: "Galaxy S23 Ultra",
    description:
      "Samsung's flagship smartphone featuring a 200MP camera, Snapdragon 8 Gen 2 processor, and an expansive AMOLED display.",
    image_url: "https://example.com/images/galaxys23ultra.jpg",
  },
  {
    name: "Sony WH-1000XM5",
    description:
      "High-end noise-canceling headphones offering  sound quality,battery life, and advanced noise-cancellation.",
    image_url: "https://example.com/images/sonywh1000xm5.jpg",
  },
  {
    name: "Oculus Quest 3",
    description:
      "A standalone VR headset with improved graphics, a lighter design, and a more comfortable fit for immersive virtual reality experiences.",
    image_url: "https://example.com/images/oculusquest3.jpg",
  },
  {
    name: "Apple Watch Series 8",
    description:
      "The latest Apple Watch featuring advanced health tracking, a larger always-on display, and improved durability.",
    image_url: "https://example.com/images/applewatchseries8.jpg",
  },
  {
    name: "Google Pixel 7",
    description:
      "Google's newest smartphone offering a refined design, enhanced camera features, and the latest version of Android with exclusive features.",
    image_url: "https://example.com/images/googlepixel7.jpg",
  },
];

const Latest = () => {
  return (
    <>
      <Navbar />
      <marquee>
        <h1>Hot deals this festive season</h1>
      </marquee>
      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./iphone.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[0].name}</h2>
        <p className="card-text">{gadgets[0].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>

      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./samsung.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[1].name}</h2>
        <p className="card-text">{gadgets[1].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>
      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./sony.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[2].name}</h2>
        <p className="card-text">{gadgets[2].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>
      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./oculus.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[3].name}</h2>
        <p className="card-text">{gadgets[3].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>
      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./apple.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[4].name}</h2>
        <p className="card-text">{gadgets[4].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>

      <Container className="card">
        <img
          className="card-img"
          style={{ marginBottom: "10px" }}
          src={"./pixel.jpg"}
          alt="profile picture"
        />
        <h2 className="card-title">{gadgets[5].name}</h2>
        <p className="card-text">{gadgets[5].description}</p>
        <Link to="/login">
          <h5 style={{ backgroundColor: "#c0c0c033" }}>Add to cart</h5>
        </Link>
      </Container>
      <Popup/>
      <Footer />
    </>
  );
};

export default Latest;
