import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/pexels-matthiaszomer-5633473.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img className="about-bg-image" src={background} alt="farm background" />
      <Navbar />
      {/* Add About page specific content here */}
    </div>
  );
};

export default About;