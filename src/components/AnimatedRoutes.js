import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills.js';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import{Routes,
    Route,
    useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence>
      {/* <button onClick={navigatecontact} style={{position:'absolute'}}className="contactbutt">Contact Me</button> */}
      <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route exact path="/about" element={<About/>}>
      </Route>
      <Route exact path="/education" element={<Education/>}>
      </Route>
      <Route exact path="/skills" element={<Skills/>}>
      </Route>
      <Route exact path="/portfolio" element={<Portfolio/>}>
      </Route>
      <Route exact path="/contact" element={<Contact/>}>
      </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
