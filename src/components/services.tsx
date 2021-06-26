import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import ServiceCard from "./service-card"
import Bar from "./bar"
import Image from "./image"
import { motion, AnimatePresence } from "framer-motion"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "a.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Samanth Kumar",
      description:
        "Associate Software Developer",
        description1:
        "Mindstack Technologies",
    },
    {
      id: 2,
      image: "b.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Sudeep Dsouza",
      description:
        "Associate Software Developer",
        description1:
        "Mindstack Technologies",
    },
    {
      id: 3,
      image: "c.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Kavya S N",
      description:
        "Associate Software Developer",
        description1:
        "Sonata Software | Mindstack  Technologies",
    },
    {
      id: 4,
      image: "ashwath.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Ashwath Prabhu",
      description:
        "Software Trainee",
        description1:
        "7Edge Internet",
    },
    {
      id: 5,
      image: "g.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Manjunath",
      description:
        "Junior Software Developer",
        description1:
        "Cliq Labs",
    },
    {
      id: 6,
      image: "f.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Deeraj R",
      description:
        "Junior Software Developer",
        description1:
        "Cliq Labs",
    },
    {
      id: 7,
      image: "h.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Ashwini",
      description:
        "Assistant System Engineer",
        description1:
        "TCS",
    },
    {
      id: 8,
      image: "tq.png",
      image1: "https://www.linkedin.com/home/?originalSubdomain=in",
      title: "Mohammed Tariq",
      description:
        "JUI Develope",
        description1:
        "Presenova Management Solutions",
    },
  ]

  return (
    <Grid container>
      {/* web */}
         <Hidden xsDown>
    <Grid
      container
      spacing={3}
      className="grad2"
      style={{
        textAlign: "center",
        minHeight: 200,
        paddingRight: 270,
        paddingLeft: 270,
        
      }}
    >
        <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        
      >
        <Typography variant="h5" style={{ marginTop: 50,fontFamily:"Montserrat1",color:"#26395f"}} > Placement success stories </Typography>
        <Bar />
      
      </Grid>
      
      {services.map(service => (
            <motion.div drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
        <Grid item xs={12} sm={4} key={service.id} style={{marginLeft:"20px",marginTop:"20px"}} >
          <ServiceCard service={service} />
        </Grid>
        </motion.div>
      ))}
    </Grid>
    </Hidden>

    {/* mobile */}

    <Hidden smUp>
    <Grid
      container
      spacing={3}
      className="grad3"
      style={{
        textAlign: "center",
        paddingRight: 30,
        paddingLeft: 30,
        
      }}
    >
        <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        
      >
        <Typography variant="h5" style={{ marginTop: 50,fontFamily:"Montserrat1",color:"#26395f"}} > Placement success stories </Typography>
        <Bar />
      
      </Grid>
      
      {services.map(service => (
        <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        
      >
        <motion.div drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Grid item xs={12} sm={4} key={service.id} style={{paddingBottom:"10px"}} >
          <ServiceCard service={service} />
        </Grid>
        </motion.div>
        </Grid>
      ))}
    </Grid>
    </Hidden>
    </Grid>
  )
}
export default Services
