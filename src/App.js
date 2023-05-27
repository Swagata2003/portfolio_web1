// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useMediaQuery } from 'react-responsive';
// import {Mobile,TabletMobile,Laptop,Desktop,BigScreen} from './components/screens';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimatedRoutes from './components/AnimatedRoutes';
import{
  BrowserRouter as Router,
} from 'react-router-dom';
import React,{ useState } from 'react';

function App() {
  
  return (
    <Router basename="/portfolio_web1">
      <Navbar/>
      <div className="main">
      <AnimatedRoutes/>
      </div>
  </Router>
  );
}

export default App;

