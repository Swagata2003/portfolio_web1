import React from 'react'
import './Portfolio.css'
import { motion } from 'framer-motion'
function Portfolio() {
  return (
    <motion.div className='portfolioclass container-fluid' 
    initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.03 }}>
        <div className="heading">
            <h1>My Portfolio</h1>
            <span>My Projects</span>
        </div>
        <div className="quote">
          <h5>A creative project is a moving target. You never end up where you start.</h5>
        </div>
        <div className="project">
          <div className="row1">
            <div className="pro_1" id="pro">
              <div className="image">
                <img src="https://drive.google.com/uc?export=view&id=1wXO3UBuQhYFP5SLexsB9kn2NK9BXPPCA"alt=""/>
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="https://swagata2003.github.io/Weather-website/" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          <div className="pro_2" id="pro">
              <div className="image">
                <img src="https://drive.google.com/uc?export=view&id=1VY_2rjxi3zLlTIS0TwCQrw2JiIJCbj8j" alt=""/>
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="https://swagata2003.github.io/RecipeBook/" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
          </div>
          <div className="pro_3" id="pro">
              <div className="image">
                <img src="https://drive.google.com/uc?export=view&id=1AtoZ122M5n0LhAZEg2rtIxcV2UWxC7sr" alt=""/>
              </div>
              <div className="hover-items">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href="https://Swagata2003.github.io/portfolio_web1/" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
          </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Portfolio
