import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import "./main.css"
import Bar from "./bar"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { motion, AnimatePresence } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
  return (
  
    <Grid container spacing={3} >
       {/* web */}
       <Hidden xsDown >
        <Grid
          item={true}
          xs={12}
          sm={2}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ minHeight: 600 , marginTop:"20px"  }}
        >
          <motion.div animate={{ scale: 0.9 }} style={{ width: "750px",marginLeft: "50px" }}>
            <StaticImage alt="Main" src="../images/3779226.png" />
          </motion.div>
        </Grid>
     
      <Grid
        item={true}
        xs={12}
        sm={10}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
    
      >
        <motion.div animate={{ scale: 1.0 }} style={{ marginLeft: "550px",marginTop:"-50px"  }}>
        <p  style={{ marginBottom: 0,fontSize:"35px",color:"#26395f",fontFamily:"Montserrat",fontWeight:"bold" }}>
        ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready
        </p>
        <p   style={{ marginBottom: 20,fontSize:"35px",color:"#26395f",fontFamily:"Montserrat",marginTop:"19px",fontWeight:"bold" }}>
        ಮಾಡುವ ಅಭಿಯಾನ
        </p>
       
        <Button variant="contained"  size="large" style={{ color:"#fff",backgroundColor:"#EB5C74 " }} className="mainbutton"  >
        <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',fontFamily:"Montserrat",color:"#fff" }} >
        Join 4000+ learners
        </a>
        </Button>
        </motion.div>
        
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
    
      >
     
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
    
      >
           <div style={{display:"inline-block"}} >
          
           <StaticImage alt="Main" src="../images/startup.png" style={{width:"250px",marginRight:"140px"}} />
          
           <StaticImage alt="Main" src="../images/banglore.png" style={{width:"250px",marginRight:"140px",marginTop:"-10px"}} />

           <StaticImage alt="Main" src="../images/riidl.jpg" style={{width:"130px",marginRight:"140px"}} />
           
           <StaticImage alt="Main" src="../images/xv.png" style={{width:"140px",marginTop:"5px"}} />
           </div>
      </Grid>
     </Hidden> 

     {/* mobile */}
     
     <Hidden smUp>
     <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div style={{ width: "80%",}}>
            <StaticImage alt="Main" src="../images/3779226.png" />
          </div>
        </Grid>
     
      <Grid
        item={true}
        xs={12}
        sm={8}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{textAlign:"center",marginTop:"-30px",paddingBottom: "50px"}}
      >
        <div >
        <p   style={{ marginBottom: 0,fontSize:"20px",color:"#26395f",fontFamily:"Montserrat",fontWeight:"bold"  }}>
        ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready
        </p>
        <p   style={{ marginBottom: 20,fontSize:"20px",color:"#26395f",fontFamily:"Montserrat",marginTop:"2px" ,fontWeight:"bold"}}>
        ಮಾಡುವ ಅಭಿಯಾನ
        </p>
       
        <Button variant="contained" style={{ color:"#fff",backgroundColor:"#EB5C74 ",marginTop:"-10px",}} className="mainbutton" size="small" >
        <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',color:"#fff"  }} >
        Join 4000+ learners
        </a>
        </Button>
        </div>
      </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
