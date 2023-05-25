import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <motion.div className="contact conatiner-fluid"
    initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.001 }}>
      <div className="heading">
        <h1><i className="fa-solid fa-address-card"></i>Get in <span style={{color:'green'}}>Touch</span></h1>
      </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h2 style={{marginLeft:'30px',marginTop:'5px'}}>INFOS</h2>
                       
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt" style={{marginBottom:'15px'}}></i>
                                    <span><h4 style={{marginBottom:'21px'}}>Location: </h4><h5>Hall-13,Sarojini Naidu Hall of Residence, NIT Durgapur, MG Road 
PIN-713209,Dist-Paschim Bardhaman</h5></span>
                                </div>

                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span><h4>Email : </h4><h5>swagatasinha.pri@gmail.com</h5></span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-user-graduate"></i>
                                    <span><h4>Education : </h4><h5>Btech-NIT Durgapur</h5></span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                <i class="fa-solid fa-phone"></i>
                                <span><h4>Mobile No. : </h4><h5>8697221438</h5></span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-asia"></i>
                                    <span><h4>Languages : </h4><h5>Bengali,English,Hindi</h5></span>
                                </div>
                            </div>
                        </div>
                        <div className="conbut" style={{display:'flex'}}>
                        <div className="contact-icons" >
                            <div className="contact-icon">
                                <a href="https://www.instagram.com/swagata_0211/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                
                                <a href="https://www.linkedin.com/in/swagata-sinha-861216227/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Swagata2003">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div class="btn-con">
                            <a class="main-btn" href="CV_original.pdf">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="right-contact">
                        <h2>CONTACT ME</h2>
                        <form action="https://formsubmit.co/79f4a408b7f0fd165a4c027b4a1c2cfc" method="POST" className="contact-form">
                            <div className="input-control i-c-2">
                                <i class="fa-solid fa-user fa-1x" style={{marginTop:'14px',position:'absolute', marginLeft:'10px'}}></i><input type="text" required placeholder="Enter Name"  name="name"/>
                                <i class="fa-solid fa-envelope " style={{position:'absolute',marginLeft:'324px',marginTop:'13px'}}></i><input type="email" required placeholder="Enter Email"  name="email"/>
                            </div>
                            <div className="input-control">
                            <i class="fa-solid fa-note-sticky" style={{position:'absolute',margin:'14px 11px'}}></i>
                            <input type="text" required placeholder="Enter Subject" name="subject"/>
                            </div>
                            <div className="input-control">
                            <i class="fa-solid fa-message" style={{position:'absolute',margin:'16px 11px'}}></i><textarea type="text" name="message" cols="15" rows="8" placeholder="Type your message here..." ></textarea>
                            {/* <input type="hidden" name="_captcha" value="false" /> */}
                            </div>
                            <input type="hidden" name="_url" value="https://yourdomain.co/contact.html"></input>
                            <button type="submit" className="subtext">Submit<i class="fa-sharp fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
    </motion.div>
)}

export default Contact
