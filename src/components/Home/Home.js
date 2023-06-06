import React from 'react';
import './Home.css';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
function Home() {
  // function getCurrentURL () {
  //   return window.location.href
  // }
  
  // Example
  // const url = getCurrentURL()
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/contact')
  }
  return (
    <motion.div className="home"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.03 }}
    >
    <div className="intro-pic">
      <div className="intro">
        <div className="class">
          <h1 className="name">Hi, I'm <span style={{color:'orange'}}>Swagata Sinha</span></h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg" alt="hand"style={{width:'45px',height:'45px' ,marginLeft:'7px'}}/>
        </div>
        <div className="summ">
          A passionate coder & enthusiast in learning new technology
          <br/><br />
          <button id='7' className="contactbutt" onClick={onClick}>Contact Me</button>
        </div>
      </div>
      <img src="https://drive.google.com/uc?export=view&id=1FKAOalioPkPU28jSGyOLDVpskPPapwgW" className="classpic" alt="car" />
      </div>
    </motion.div>

  )
}

export default Home;
