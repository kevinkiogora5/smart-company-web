// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/css/header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Academy from './pages/Academy/Academy';
import Offer from './pages/Offer/Offer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<Home />} />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* News and Updates Route */}
          <Route path="/news" element={<News />} />
          
          {/* SmartCow Academy Route */}
          <Route path="/academy" element={<Academy />} />
          
          {/* What We Offer Route */}
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;