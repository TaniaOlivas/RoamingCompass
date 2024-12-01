import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import BlogPosts from "./pages/BlogPosts"
import Contact from "./pages/Contact"
import socialMediaURLs from "./data/socialMediaData";
import accordionData from "./data/accordionData";
import carouselData from "./data/carouselData";
import navbarData from "./data/navbarData";
import './App.css';

const contactBlurb = "Have questions, suggestions, or just want to share your love for the great outdoors? Our team is here to help you make the most of your national park adventures. Whether you're planning your next trip, need tips on hiking trails, or want to share your feedback, we're just a message away. Fill out this form, and we'll get back to you as soon as possible. Together, let's explore, preserve, and celebrate the beauty of our national parks!"

const headerImage = "./images/landscape1.jpg"

const companyName = "Roaming Compass"

function App() {
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const APIkey = "BZOoPb6XC6K2Y8E0eEk6EmNFoIadEN8YyKjd29Eh"
    axios
      .get(`https://developer.nps.gov/api/v1/parks?limit=20&start=4&api_key=${APIkey}`)
      .then((response) => {
        setParks(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  const handleCardClick = (park) => {
    setSelectedPark(park);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header headerImage={headerImage} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar navbarData={navbarData} companyName={companyName} />}>
            <Route index element={<Home accordionData={accordionData} carouselData={carouselData} />} />
            <Route path='blogPosts' element={<BlogPosts parks={parks} handleCardClick={handleCardClick} isModalOpen={isModalOpen} selectedPark={selectedPark} closeModal={closeModal} />} />
            <Route path='contact' element={<Contact contactBlurb={contactBlurb} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer socialMediaURLs={socialMediaURLs} companyName={companyName} />
    </>
  );
}

export default App;
