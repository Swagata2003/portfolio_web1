import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
function Skills() {
  return (
    <motion.div className="skillsclass container-fluid"
    initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.03 }}>
        <div className="heading">
        <h1>Skills</h1>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3480 4411 c-416 -88 -684 -494 -605 -916 l18 -96 -126 -127 -126
-126 -606 606 c-458 458 -617 612 -653 629 -67 32 -179 32 -242 0 -63 -32
-364 -331 -398 -396 -21 -41 -26 -64 -26 -125 -1 -133 -24 -105 652 -778 l606
-603 -126 -126 -127 -126 -96 18 c-349 65 -694 -105 -850 -420 -64 -131 -79
-196 -79 -350 0 -97 4 -145 18 -190 26 -88 39 -105 83 -105 35 0 50 13 239
201 l201 201 133 -35 c72 -20 134 -38 136 -40 3 -3 21 -64 40 -137 l35 -133
-201 -202 c-199 -200 -201 -203 -198 -241 3 -34 8 -41 41 -57 20 -10 77 -26
125 -34 338 -59 682 119 831 430 77 159 98 320 66 492 l-18 96 126 127 127
127 503 -503 503 -503 425 -130 c453 -139 459 -140 488 -88 13 24 5 54 -114
445 -70 230 -130 425 -134 431 -15 28 -168 186 -199 205 -28 17 -37 18 -63 8
-29 -12 -46 -47 -40 -80 1 -8 34 -47 72 -85 l69 -70 -95 -95 -95 -95 -1035
1035 c-569 569 -1035 1040 -1035 1045 0 6 41 51 90 100 l90 90 658 -656 c361
-361 665 -659 675 -662 45 -16 96 38 81 87 -4 11 -44 59 -90 106 l-84 86 125
124 124 123 96 -18 c352 -66 701 109 854 428 51 105 70 179 77 297 7 105 -12
234 -43 298 -16 32 -23 37 -57 40 -38 3 -41 1 -241 -198 l-202 -202 -133 35
c-72 20 -134 38 -137 40 -2 3 -20 65 -40 137 l-35 133 202 202 c199 200 201
203 198 241 -3 34 -8 41 -39 57 -51 25 -178 47 -262 46 -40 0 -110 -9 -157
-18z m-2152 -165 c15 -8 76 -64 137 -125 l110 -111 -233 -233 -232 -232 -125
126 -125 126 0 52 c0 28 6 64 14 79 16 30 290 304 321 321 29 15 101 14 133
-3z m420 -399 l62 -62 -238 -238 -237 -237 -65 65 -65 65 235 235 c129 129
237 235 240 235 3 0 34 -28 68 -63z m914 -1494 l1038 -1038 -87 -87 c-48 -49
-92 -88 -98 -88 -5 0 -476 466 -1045 1035 l-1035 1035 90 90 c49 49 92 90 95
90 3 0 472 -467 1042 -1037z m1481 -1175 c47 -155 85 -283 84 -285 -3 -3 -561
168 -567 173 -4 5 381 394 391 394 3 0 44 -127 92 -282z"/>
<path d="M3467 2222 c-37 -40 -23 -72 71 -165 80 -80 92 -88 122 -85 22 2 40
12 54 31 20 27 20 28 1 63 -10 19 -52 66 -92 104 -60 58 -79 70 -106 70 -20 0
-41 -8 -50 -18z"/>
</g>
</svg>
            
        </div>
        <div className="row1">
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full">
                <div className="fill"></div>
            </div>
   
            <div className="mask half">
                <div className="fill"></div>
            </div>
    
            <div className="inside-circle">
                {/* 70% */}
                <img className="imgcls" src="jslogo2.png" alt="ftg"/>
            </div>
            <h6>70%</h6>
            </div>
        </div> 
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full2">
                <div className="fill2"></div>
            </div>
   
            <div className="mask half2">
                <div className="fill2"></div>
            </div>
    
            <div className="inside-circle">  {/*80% */}
            <img className="imgcls"src="htmllogo.png" alt="ftg"/>
            </div>
            <h6>80%</h6>
            </div>
        </div>    
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full3">
                <div className="fill3"></div>
            </div>
   
            <div className="mask half3">
                <div className="fill3"></div>
            </div>
    
            <div className="inside-circle">
                {/* <div className="h1"></div>75% */}
            <img className="imgcls"src="csslogo.jpg" alt="ftg"/>
            </div>
            <h6>75%</h6>
            </div>
        </div> 
        </div> 
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full4">
                <div className="fill4"></div>
            </div>
   
            <div className="mask half4">
                <div className="fill4"></div>
            </div>
    
            <div className="inside-circle">
                {/* 70% */}
                <img className="imgcls"src="c++logo.png" alt="ftg"/>
            </div>
            <h6>90%</h6>
            </div>
        </div>
        </div>  
        <div className="box">
            <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full5">
                <div className="fill5"></div>
            </div>
   
            <div className="mask half5">
                <div className="fill5"></div>
            </div>
    
            <div className="inside-circle">  {/*80% */}
            <img className="imgcls"src="pylogo.png" alt="ftg"/>
            </div>
            <h6>50%</h6>
            </div>
            </div>    
        </div>
        </div>  
        <div className="row2">

        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full6">
                <div className="fill6"></div>
            </div>
   
            <div className="mask half6">
                <div className="fill6"></div>
            </div>
    
            <div className="inside-circle">
                {/* <div className="h1"></div>75% */}
            <img className="imgcls"src="javalogo.png" alt="ftg"/>
            </div>
            <h6>40%</h6>
            </div>
        </div> 
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full7">
                <div className="fill7"></div>
            </div>
   
            <div className="mask half7">
                <div className="fill7"></div>
            </div>
    
            <div className="inside-circle">
                {/* 70% */}
                <img className="imgcls"src="expreejs.png" alt="ftg"/>
            </div>
            <h6>60%</h6>
            </div>
        </div> 
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full8">
                <div className="fill8"></div>
            </div>
   
            <div className="mask half8">
                <div className="fill8"></div>
            </div>
    
            <div className="inside-circle">
                {/* 70% */}
                <img className="imgcls"src="reactjs.png" alt="ftg"/>
            </div>
            <h6>75%</h6>
            </div>
        </div>  
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full9">
                <div className="fill9"></div>
            </div>
   
            <div className="mask half9">
                <div className="fill9"></div>
            </div>
    
            <div className="inside-circle">
                <img className="imgcls"src="nodejs.png" alt="ftg"/>
            </div>
            <h6>80%</h6>
            </div>
        </div> 
        </div>
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full10">
                <div className="fill10"></div>
            </div>
   
            <div className="mask half10">
                <div className="fill10"></div>
            </div>
    
            <div className="inside-circle">  {/*80% */}
            <img className="imgcls"src="mongodb.png" alt="ftg"/>
            </div>
            <h6>55%</h6>
            </div>
        </div>    
        </div>
        </div>
        <div className="row3">
        
        
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full11">
                <div className="fill11"></div>
            </div>
   
            <div className="mask half11">
                <div className="fill11"></div>
            </div>
    
            <div className="inside-circle">
                {/* <div className="h1"></div>75% */}
            <img className="imgcls"src="tailwind.jpg" alt="ftg"/>
            </div>
            <h6>80%</h6>
            </div>
        </div>  
        </div>
        
        <div className="box">
        <div className="circle-wrap">
            <div className="circle">
    
            <div className="mask full12">
                <div className="fill12"></div>
            </div>
   
            <div className="mask half12">
                <div className="fill12"></div>
            </div>
    
            <div className="inside-circle">  {/*85% */}
            <img className="imgcls"src="bootstrap.jpeg" alt="ftg"/>
            </div>
            <h6>85%</h6>
            </div>
        </div>    
        </div>
        </div>
        
    </motion.div>
)
}

export default Skills
