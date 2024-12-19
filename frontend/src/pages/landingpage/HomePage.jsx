import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";

import ImageSlider from "../../components/ImageSlider.jsx"

import "../../css/HomePage.css";
import "../../css/Navbar.css";
import Footer from "../../components/Footer.jsx";


const HomePage = () => {
  const [background, setBackground] = useState("background1");

  // Example slides data
  const slides = [
    { url: "http://localhost:3000/image1.jpg", title: "beach" },
    { url: "http://localhost:3000/image2.jpg", title: "boat" },
    { url: "http://localhost:3000/image3.jpg", title: "forest" },
    { url: "http://localhost:3000/image4.jpg", title: "city" },
    { url: "http://localhost:3000/image5.jpg", title: "italy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        setBackground("background1");
      } else {
        setBackground("background2");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Add Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className={`hero-section ${background === "background1" ? "active" : ""}`}>
        <div className="hero-content">
          <h1>The Land of Promise</h1>
          <p>
            Vista offers a platform to discover and explore the best tourist spots in the Philippines.
          </p>
          <button className="join-btn">Join us!</button>
        </div>
      </section>

      {/* About Section */}
      <section className={`about-section ${background === "background2" ? "active" : ""}`}>
        <h2>About Us</h2>
        <p>
          At Vista, we're dedicated to helping you explore the beauty and diversity of the Philippines.
          Our platform guides travelers and locals to discover stunning beaches,
          mountainous trails, historical sites, and thrilling watery adventures.
          With detailed information, user ratings, and a community-driven approach,
          we aim to make every journey memorable. Join us in celebrating the rich culture and natural wonders of the Philippines,
          one destination at a time!
        </p>
        <div className="about-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72M7ATvBeECh3IMGiRoF1RziJOLrQK8j7p8hXam_96w1Wo_LFZp2vJcn8mSJ5Wx8zgaI&usqp=CAU"
            alt="Plane"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/195/834/non_2x/young-tourist-couple-watching-spectacular-mountain-scenery-in-high-mountains-man-and-woman-hiker-on-top-rock-a-couple-of-travelers-in-love-people-greet-the-dawn-lovers-travel-copy-space-free-photo.jpg"
            alt="Hikers"
          />
        </div>
      </section>

      <section className="space">
        <div style={{height: "100px", margin: "0 auto" }}>
        </div>
      </section>
      
      <section className="image-info">
        <div style={{height: "80px", margin: "0 auto" }}>
          <h2>Gallery</h2>
        </div>
      </section>

      {/* ImageSlider Section - Added Below About Section */}
      <section className="image-slider-section">
        <div style={{ width: "500px", height: "280px", margin: "0 auto" }}>
          <ImageSlider slides={slides} />
        </div>
      </section>

      <section className="space">
        <div style={{height: "250px", margin: "0 auto" }}>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;
