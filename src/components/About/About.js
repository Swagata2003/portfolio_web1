import React from 'react'
import "./About.css";
import {motion} from "framer-motion"
function About() {
  return (
    <motion.div className="aboutclass container-fluid" style={{marginTop:'20px'}}
    initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.1 }}
      >
        <h1 className="aboutme"><i className="fa-solid fa-user fa-xs" style={{marginRight:'7px'}}></i>About<span style={{color:'green'}}>Me</span></h1>
        <div className="para-pic">
          <div className="pic">
            <img  classname="mypic" src="https://drive.google.com/uc?export=view&id=1oP3t7KCDjkYp5dcqg9goOD9JHtZrv-im" alt="pic"/>
          </div>
          <div className="text">
            <p>Hello, my name is Swagata Sinha. As a B.Tech student majoring in Computer Science and Engineering at NIT Durgapur,I have developed strong foundation in technical skills and I am eager to apply my knowledge to solve real-world problems.
            My expertise lies in programming languages like Java, Python, and C++ thanks to my coursework and numerous projects. In addition to my academic pursuit, I have actively participated in various coding competitions where I have honed my problem-solving and collaboartion skills. Moreover,I have worked on developing 
            various web applications using modern web technologies such as ReactJS and NodeJS. In addition to my technical skills, I also have strong interpersonal and communication abilities that enable me to collaborate effectively with both teams and clients.</p>
            <p>I am a committed and detail-oriented individual who is eager to expand my knowledge and skills in the technology sector. I possess a strong passion for leveraging diverse technological tools to tackle complex problems. Furthermore, my optimistic outlook and self-assured demeanor make me an ideal candidate for any employment prospects within the tech industry.</p>
            <div className="btn-con" style={{marginTop:'px'}}>
                    <a className="main-btn" href="https://drive.google.com/uc?export=view&id=11WAQMWAAOF2NANzSU4C6a3P204XlSOuB">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download" ></i></span>
                    </a>
                </div>
            </div>          
          </div>
    </motion.div>
  )
}

export default About