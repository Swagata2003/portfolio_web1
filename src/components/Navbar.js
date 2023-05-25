import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  let style={
    color:'#c99cff',
    // pink--#ff6d6d;
    //
  }
  const [view,setview]=useState('false');
  function handleToggle(){
    if(view==='false') setview('true');
    else setview('false');
  }
  return (
    <nav className="navbar navbar-expand-lg list" style={{backgroundColor:'#2a2a45',width:'100%'}} >
      <div className="container-fluid">
        <a className="font-link" style={{color:'white'}}>Swagata</a>
      <button className="navbar-toggler" style={{backgroundColor:'#53538d'}} type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'40%'}}> 
            
            <li className="nav-item">
              <Link className="nav-link active Home" to="/" style={style}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link AboutMe" to="/about" style={style}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Education" to="/education" style={style}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Skills" to="/skills" style={style}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Portfolio" to="/portfolio" style={style}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Contact" to="/contact" style={style}>Contact</Link>
            </li> 
        </ul>
        </div>
        </div>
    </nav>
  )
}
