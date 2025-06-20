import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/pexels-matthiaszomer-5633473.jpg';
import './Offer.css';

const Offer = () => {
  return (
    <div className="offer-container">
      <img className="offer-bg-image" src={background} alt="farm background" />
      <Navbar />
      {/* Add services/offerings content here */}
    </div>
  );
};

export default Offer;