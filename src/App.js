import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import NotFound from "./pages/NotFound"; // Create a NotFound component
import Header from './UI/Header';

const App = function () {
  return (
    <>
      <Router>
        <div>
          {/* Include the common header on every page */}
          <Header />

          {/* Define routes for each page */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />

            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
