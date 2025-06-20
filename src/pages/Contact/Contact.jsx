import React from 'react';
import Navbar from '../../components/Navbar';
import background from '../../assets/pexels-matthiaszomer-5633473.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <img className="contact-bg-image" src={background} alt="farm background" />
      <Navbar />
      {/* Add Contact form/content here */}
    </div>
  );
};

export default Contact;