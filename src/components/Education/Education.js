import React from 'react'
import './Education.css'
import { motion } from 'framer-motion'
function Education() {
  return (
    <motion.div className='educationclass container-fluid'
    initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.03}}>
      <div className="headedu">
          <i className="fa-solid fa-graduation-cap fa-2x"></i><h1>My Education</h1>
      </div>
      <h5 className='quote'> An investment in knowledge pays the best interest</h5>
      <div className="insti">
        <div className="school">
          <div className="schoolpic">
            <img src="pic2.jpg" alt="pict"/>
          </div>
          <div className="school-info">
            <a href="https://navanalanda.org.in/"><h4 className='name'><u>Nava Nalanda Group of Schools</u></h4></a>
            {/* <a href="https://www.google.com/maps/place/Nava+Nalanda+Group+of+Schools/@22.5144766,88.3467318,19.34z/data=!4m14!1m7!3m6!1s0x3a02712b16ea7fed:0x9f1144e27da5dc94!2sNava+Nalanda+Group+of+Schools!8m2!3d22.5143525!4d88.3472027!16s%2Fm%2F06zkcml!3m5!1s0x3a02712b16ea7fed:0x9f1144e27da5dc94!8m2!3d22.5143525!4d88.3472027!16s%2Fm%2F06zkcml"> */}
            <a href="http://surl.li/gzpsn">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 320.000000 320.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1489 3160 c-407 -51 -732 -343 -831 -747 -32 -132 -30 -289 6 -408
96 -321 441 -844 914 -1384 l22 -26 36 40 c83 91 264 314 375 460 296 390 483
723 540 961 35 144 17 330 -47 493 -61 154 -185 317 -316 419 -66 51 -186 116
-264 142 -131 46 -308 66 -435 50z m236 -414 c188 -50 328 -210 356 -406 21
-148 -34 -302 -147 -410 -239 -230 -618 -162 -767 138 l-42 85 0 121 c0 103 4
130 24 179 52 130 174 245 304 286 74 24 199 27 272 7z"/>
<path d="M1988 943 c-6 -8 -9 -15 -7 -17 2 -2 40 -9 84 -15 186 -29 376 -84
487 -143 32 -17 78 -52 103 -79 40 -42 45 -54 45 -94 0 -38 -6 -51 -36 -85
-100 -111 -368 -198 -725 -236 -212 -22 -606 -15 -801 15 -468 72 -716 222
-615 372 70 104 276 192 570 242 73 12 126 26 124 32 -6 15 -181 9 -302 -10
-361 -56 -540 -171 -539 -345 1 -139 123 -271 346 -374 154 -71 288 -111 503
-147 175 -30 549 -33 725 -6 456 71 794 246 865 447 44 123 -21 252 -162 323
-111 57 -333 106 -556 125 -77 6 -100 5 -109 -5z"/>
</g>
          </svg></a>
            <h4 className='degree'>High School Diploma | WBSE</h4>
            <h5 className='year'>2008-2019 | Completed</h5>
            <br />
            <h4 className='degree'>HS Science | WBCHSE</h4>
            <h5 className='year'>2019-2021 | Completed</h5>
            <br />
          </div>
        </div>
        <div className="clg">
          <div className="clgpic">
            <img src="pic3.jpg" alt="pict"/>
          </div>
          <div className="clg-info">
            <a href="https://www.nitdgp.ac.in/"><h4 className='name'><u>National Institute of Technology, Durgapur</u></h4></a>
            <a href="http://surl.li/gzpsg">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 320.000000 320.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1489 3160 c-407 -51 -732 -343 -831 -747 -32 -132 -30 -289 6 -408
96 -321 441 -844 914 -1384 l22 -26 36 40 c83 91 264 314 375 460 296 390 483
723 540 961 35 144 17 330 -47 493 -61 154 -185 317 -316 419 -66 51 -186 116
-264 142 -131 46 -308 66 -435 50z m236 -414 c188 -50 328 -210 356 -406 21
-148 -34 -302 -147 -410 -239 -230 -618 -162 -767 138 l-42 85 0 121 c0 103 4
130 24 179 52 130 174 245 304 286 74 24 199 27 272 7z"/>
<path d="M1988 943 c-6 -8 -9 -15 -7 -17 2 -2 40 -9 84 -15 186 -29 376 -84
487 -143 32 -17 78 -52 103 -79 40 -42 45 -54 45 -94 0 -38 -6 -51 -36 -85
-100 -111 -368 -198 -725 -236 -212 -22 -606 -15 -801 15 -468 72 -716 222
-615 372 70 104 276 192 570 242 73 12 126 26 124 32 -6 15 -181 9 -302 -10
-361 -56 -540 -171 -539 -345 1 -139 123 -271 346 -374 154 -71 288 -111 503
-147 175 -30 549 -33 725 -6 456 71 794 246 865 447 44 123 -21 252 -162 323
-111 57 -333 106 -556 125 -77 6 -100 5 -109 -5z"/>
</g>
          </svg>
          </a>
            <h4 className='degree'>Bachelor of Technology in CSE</h4>
            <h5 className='year'>2021-2025 | Pursuing</h5>
            
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education
