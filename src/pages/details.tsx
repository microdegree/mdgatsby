import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import ServiceCard from "../components/service-card"
import Bar from "../components/bar"
import "./main2.css"
import Button from "@material-ui/core/Button"



const Details = () => {
 

  return (
    <Layout >
     <SEO title="About Us" />
     <Hidden xsDown>
   <div className="background2">
           <div className="transbox2">
            <h1 style={{ color: `#fff`,textAlign: "center",marginTop:90,fontFamily:"Montserrat1"}}>MySQL Certification
               </h1>
               <p style={{ color: `#fff`,textAlign: "center",fontFamily:"Montserrat1"}}> MySQLನ್ನು ಸುಲಭವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯಿರಿ, Developer ಆಗಲು ಸಿದ್ದರಾಗಿ</p>
               <div style={{ color: `#000`,paddingLeft:"670px" , paddingRight:"670px",fontFamily:"Montserrat1"}}>
               <Button variant="contained"  size="large" style={{ color:"#fff",backgroundColor:"#1d34ffa4",alignItems:"center" }} className="mainbutton"  >
              <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',fontFamily:"Montserrat",color:"#fff" }} >
              Enrol Now
              </a>
              </Button>
              </div>
              <div style={{ color: `#000`, marginTop:40 , paddingLeft:"170px" , paddingRight:"170px",fontFamily:"Montserrat1"}}>
               <div className="card" >

                <div className="container1" >
                <div className="row">
                <h2 style={{ color: `#000`,textAlign: "center",fontFamily:"Montserrat1"}}>Course Highlights
  
                </h2>
                <div className="column" >
                 <ul>
                   <li>5 Hours of Course Content
                    </li>
                    <li>Quizzes and Assignments</li>
                    <li>Working on Real World Datasets</li>
                    <li>1 Year Course Access</li>
                 </ul>
                </div>
                <div className="column">
                <ul>
                   <li>5 Hours of Course Content
                    </li>
                    <li>Quizzes and Assignments</li>
                    <li>Working on Real World Datasets</li>
                    <li>1 Year Course Access</li>
                 </ul>
                </div>
                <div className="column" >
                <ul>
                   <li>5 Hours of Course Content
                    </li>
                    <li>Quizzes and Assignments</li>
                    <li>Working on Real World Datasets</li>
                    <li>1 Year Course Access</li>
                 </ul>
                </div>
              </div>
                </div>
              </div>
              </div>
           </div>
         </div>

         <h2 style={{ color: `#000`,textAlign: "center",fontFamily:"Montserrat1",marginTop:150}}>Demo Videos
        </h2>

         <div style={{ color: `#000` , paddingLeft:"220px" , paddingRight:"230px",fontFamily:"Montserrat1"}}>
         <div className="row1">

                <div className="column1" style={{  paddingRight:"170px" }} >
            
                <iframe width="480" height="275" src="https://www.youtube.com/embed/01qSumyUrpU" > </iframe> 
                  
                </div>
        
          
                <div className="column1" >
          
                <iframe width="480" height="275" src="https://www.youtube.com/embed/01qSumyUrpU" > </iframe> 
                  
                </div>
   
        </div>
        </div>
       
         <div  style={{ color: `#000`,fontFamily:"Montserrat1",alignItems:"center", paddingLeft:"160px" , paddingRight:"0px",}}>
                <div className="row2">
                {/* <h2 style={{ color: `#000`,textAlign: "center",fontFamily:"Montserrat1"}}>Course Highlights
  
                </h2> */}
                <div className="column3" style = {{ paddingLeft:"40px", paddingRight:"60px",paddingTop: "10px" }}>
                <div className="vl"></div>
                </div>
                <div className="column3" style = {{ width: "200px", paddingTop:"20px" }}>
                <Image alt="Main" filename="manikanta.png"  />
            
                </div>
                <div className="column2" style = {{paddingLeft:"20px", paddingTop:"20px"}} >
                <ul>
                   <h1>Manikanta A Nayar
                    </h1>
                    <p>Co-Founder</p>
                    <h3>Manikanta has 3+ years of industrial experience in building scalable Javascript Full Stack Web Application. He is passionate about sharing the knowledge to his peers in an efficient way. He has expertise over Javascript, React, Nodejs, MongoDB and Mysql. He was a Regional Co-ordinator at Free Software Movement Karnataka (FSMK) Mangalore, and has conducted more than a dozen technical workshops and seminars.</h3>
                 
                 </ul>
                </div>
              </div>
                </div>
        

                <div  style={{ color: `#000` , paddingLeft:"220px" , paddingRight:"20px",fontFamily:"Montserrat1"}}>
                <div className="row">
      
             
                <div className="column3" style = {{ width: "400px", paddingTop:"0px" }}>
                <Image alt="Main" filename="python.jpg"  />
            
                </div>
                <div className="column4" style = {{paddingLeft:"60px", paddingTop:"50px"}} >
                <ul>
                   <h1>Completion Certificate by MicroDegree
                    </h1>
                    <h3>On completion of course become a proud alumni of MicroDegree. MicroDegree is chosen among top innovative startups by Government of Karnataka's flagship Elevate Call-2 program</h3>
                    <Button variant="contained"  size="large" style={{ color:"#fff",backgroundColor:"#1d34ffa4" }} className="mainbutton"  >
                    <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',fontFamily:"Montserrat",color:"#fff" }} >
                    Enrol Now
                    </a>
                    </Button>
                    </ul>
                    </div>
                  </div>
                    </div>


                <div  style={{ color: `#000` , paddingLeft:"220px" , paddingRight:"250px",fontFamily:"Montserrat1"}}>
                <div className="row">
          
             
                <div className="column4">
                <iframe width="480" height="275" src="https://www.youtube.com/embed/01qSumyUrpU" > </iframe> 
            
                </div>
                <div className="column4" style = {{paddingLeft:"0px"}} >
                <ul>
                   <h1>Join 6000+ Learners.
                    </h1>
                    <h3>Learn coding and job-ready skills from industry experts in Kannada. MicroDegree is chosen among top innovative startups by Govt. of Karnataka's flagship Elevate-Call2 program</h3>
                    <Button variant="contained"  size="large" style={{ color:"#fff",backgroundColor:"#1d34ffa4" }} className="mainbutton"  >
                    <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',fontFamily:"Montserrat",color:"#fff" }} >
                    Enrol Now
                    </a>
                    </Button>
                 </ul>
                </div>
              </div>
                </div>

                <div>
                <h1 style={{ color: `#000`,textAlign: "center",marginTop:10,fontFamily:"Montserrat1"}}>Industry Projects
  
                </h1>
                <p style={{ color: `#000`,textAlign: "center",fontFamily:"Montserrat1", paddingLeft:"250px" , paddingRight:"250px"}}>
                
                    In this course, we will be working on real world datasets which you will find in most of your day to-day work. With these datasets, you will be equipped to work with real-world databases with ease and confidence.
                  </p>
                </div>
                          <section className="faq" style={{fontFamily:"Montserrat1"}}>

                          
                          <details className="faq__question" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" open>
                            
                            <summary className="faq__toggle" itemProp="name" aria-expanded="true" aria-controls="faq_answer_1">
                            Introduction to the course
                            </summary>
                            
                            <div id="faq_answer_1" className="faq__answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                              <span className="reveal_overlay"></span>
                              
                              <ol style={{color:"#000",fontSize:"20px"}}>
                          <li>Welcome Message</li>
                          <li>Course Preview</li>
                          <li>Welcome to this course</li>
                          <li>What is Database?</li>
                          <li>Join Developer Community</li>
                          <li>Alternative Mysql Installation</li>
                          <li>Xampp-2</li>
                        </ol>
                            </div>
                          </details>
                          
                          <details className="faq__question" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            
                            <summary className="faq__toggle" itemProp="name" aria-expanded="true" aria-controls="faq_answer_2">
                            MySQL Basics
                            </summary>
                            
                            <div id="faq_answer_2" className="faq__answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <ol style={{color:"#000",fontSize:"20px"}}>
                          <li>Welcome Message</li>
                          <li>Course Preview</li>
                          <li>Welcome to this course</li>
                          <li>What is Database?</li>
                          <li>Join Developer Community</li>
                          <li>Alternative Mysql Installation</li>
                          <li>Xampp-2</li>
                        </ol>
                            </div>
                          </details>
                          
                          <details className="faq__question" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            
                            <summary className="faq__toggle" itemProp="name" aria-expanded="true" aria-controls="faq_answer_3">
                            Intermediate Section
                            </summary>
                            
                            <div id="faq_answer_3" className="faq__answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <ol style={{color:"#000",fontSize:"20px"}}>
                          <li>Welcome Message</li>
                          <li>Course Preview</li>
                          <li>Welcome to this course</li>
                          <li>What is Database?</li>
                          <li>Join Developer Community</li>
                          <li>Alternative Mysql Installation</li>
                          <li>Xampp-2</li>
                        </ol>
                            </div>
                          </details>
                        </section>

                </Hidden>
    </Layout>
    )
  }
  

export default Details
