import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/pexels-matthiaszomer-5633473.jpg';
import './News.css';

const News = () => {
  return (
    <div className="news-container">
      <img className="news-bg-image" src={background} alt="farm background" />
      <Navbar />
      {/* Add news articles/updates here */}
    </div>
  );
};

export default News;