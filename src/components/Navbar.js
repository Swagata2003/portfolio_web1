import React from 'react'

export default function Navbar() {
  return (
    <div className="list" style={{backgroundColor:'#e0dada',height:'8vh'}} >
        <ul style={{ listStyleType: 'none',display:'flex',alignItems:'center',height: '50px'}}> 
            <li className="font-link">Swagata</li>
            <li className="nav-ele">Home</li>
            <li className="nav-ele">About Me</li>
            <li className="nav-ele">Education</li>
            <li className="nav-ele">Skills</li>
            <li className="nav-ele">Portfolio</li>
            <li className="nav-ele">Contact</li> 
        </ul>
    </div>
  )
}
