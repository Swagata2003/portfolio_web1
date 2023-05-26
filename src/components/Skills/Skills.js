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
                <img className="imgcls" src="data:image/png;base64,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" alt="ftg"/>
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
            <img className="imgcls"src="https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png" alt="ftg"/>
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
            <img className="imgcls"src="data:image/png;base64,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" alt="ftg"/>
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
                <img className="imgcls"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="ftg"/>
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
            <img className="imgcls"src="https://img.freepik.com/free-icon/snakes_318-368381.jpg" alt="ftg"/>
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
            <img className="imgcls"src="https://static.vecteezy.com/system/resources/previews/022/100/686/original/java-logo-transparent-free-png.png" alt="ftg"/>
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
                <img className="imgcls"src="data:image/png;base64,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" alt="ftg"/>
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
                <img className="imgcls"src="data:image/jpeg;base64,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" alt="ftg"/>
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
                <img className="imgcls"src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg" alt="ftg"/>
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
            <img className="imgcls"src="data:image/jpeg;base64,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" alt="ftg"/>
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
            <img className="imgcls"src="https://res.cloudinary.com/practicaldev/image/fetch/s--neFmc7k8--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/9w1d71e00a6xdltour1s.png" alt="ftg"/>
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
            <img className="imgcls"src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" alt="ftg"/>
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
