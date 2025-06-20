import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/pexels-matthiaszomer-5633473.jpg';
import './Academy.css';

const Academy = () => {
  return (
    <div className="academy-container">
    <img className="academy-bg-image" src={background} alt="farm background" />
    <Navbar />
      <div className="academy-section">
<a href="/diseases" className="academy-button"><button className="academy-btn">
DISEASES<p>Learn more about the diseases that may affect your dairy cows</p></button></a>
        {/* Repeat for other academy buttons */}
      </div>
    </div>
  );
};

export default Academy;