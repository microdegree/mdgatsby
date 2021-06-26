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


const AboutUs = () => {
  let services = [
    {
      id: 1,
      image: "gaurav.png",
      title: "Gaurav Kamath",
      description:
        "Co-founder & Business Head",
      
    },
    {
      id: 2,
      image: "rakeshk.png",
      title: "Rakesh Kothari",
      description:
        "Co-founder & Technology Head",
        
    },
    {
      id: 3,
      image: "manikanta.png",
      title: "Manikanta Nair",
      description:
        "Co-founder & Operations Head",
      
    },

  ]

  return (
    <Layout >
     <SEO title="About Us" />
     <Hidden xsDown>
          <div className="background">
           <div className="transbox">
            <h1 style={{ color: `#fff`,textAlign: "center",marginTop:90}}>We’re MicroDegree | Join our community.
  
               </h1>
               <p style={{ color: `#fff`,textAlign: "center"}}> Come, explore the power of learning job-ready skills in vernacular at an affordable price.</p>
           </div>
         </div>
         </Hidden>
         <Hidden smUp>
         <div className="background1">
           <div className="transbox1">
            <h3 style={{ color: `#fff`,textAlign: "center",marginTop:60,padding:5}}>We’re MicroDegree | Join our community.
  
               </h3>
               <p style={{ color: `#fff`,textAlign: "center",padding:5}}> Come, explore the power of learning job-ready skills in vernacular at an affordable price.</p>
           </div>
         </div>
         </Hidden>


      <Grid container spacing={3} style={{  }}>
      <Hidden xsDown>
      <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
          <Typography variant="h4" color="inherit">
          We’re a team of hustlers looking to impact the next generation of India’s workforce. Wondering how?
        </Typography> 
          </div>
        </Grid>
      </Hidden>


      <Hidden smUp>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ paddingLeft: 40, paddingRight: 40 }}
        >
           <div style={{ width: "100%" }}>
          <Typography variant="h5" color="inherit"  style={{ marginTop: 20 }}>
          We’re a team of hustlers looking to impact the next generation of India’s workforce. Wondering how?
        </Typography> 
          </div>
        </Grid>
      </Hidden>


      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
       
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
         We believe in learning technology in our local language by emphasizing on relevant analogies, examples and thereby making fundamentals strong with deep concept clarity. Our motto is to make emerging technology affordable for students & early professionals across regions irrespective of their educational backgrounds.
        </Typography>
     
          </Grid>
        </Grid>


    <Grid container  style={{ }}>
    <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20,paddingTop:10 }}
      >
       
       <div style={{ width: "100%" }}>
            <Image alt="Main" filename="a1.jpeg" />
          </div>
     
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20,paddingTop:10 }}
      >
       
       <div style={{ width: "100%" }}>
            <Image alt="Main" filename="a3.jpeg" />
          </div>
     
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20,paddingTop:10 }}
      >
       
       <div style={{ width: "100%" }}>
            <Image alt="Main" filename="a2.jpeg" />
          </div>
     
      </Grid> 

    
    

      <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20,paddingTop:10 }}
      >
       
       <div style={{ width: "100%" }}>
            <Image alt="Main" filename="a5.jpeg" />
          </div>
     
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20 ,paddingTop:10 }}
      >
       
       <div style={{ width: "100%" }}>
            <Image alt="Main" filename="a4.jpeg" />
          </div>
     
      </Grid> 
      <Grid
        item={true}
        xs={12}
        sm={4}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
       
       <div style={{ width: "100%",paddingTop:10 }}>
            <Image alt="Main" filename="a8.jpeg" />
          </div>
     
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          style={{
            textAlign: "center",
            minHeight: 200,
            padding: 10,
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
        <Typography variant="h5" style={{ marginTop: 50,}}> Leadership </Typography>
        <Bar />
      
      </Grid>
      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          {/* <ServiceCard service={service} /> */}
        </Grid>
      ))}
    </Grid>
    </Layout>
    )
  }
  

export default AboutUs
