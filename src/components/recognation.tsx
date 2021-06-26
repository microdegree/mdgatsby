import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Hidden from "@material-ui/core/Hidden"
import "./main.css"
import Bar from "./bar"
import { StaticImage } from "gatsby-plugin-image"



const Recognation = () => {
  return (

    <Grid container >
       {/* web */}
      <Hidden xsDown>
        <Grid container spacing={3}       style={{       paddingRight: 200,
        paddingLeft: 200,paddingBottom:30}} >
        <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
  
      >
        <Typography variant="h5" style={{ fontFamily:"Montserrat1", marginTop:20,color:"#26395f"}}> Our Recognitions </Typography>
        <Bar />
      
      </Grid>
      <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div style={{ width: "80%" }}>
            <StaticImage alt="Main" src="../images/elevate_logo.png" />
          </div>
        </Grid>
        <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div style={{ width: "80%" }}>
            <StaticImage alt="Main" src="../images/tnie.jpeg" />
          </div>
        </Grid>
        <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div style={{ width: "80%" }}>
          <StaticImage alt="Main" src="../images/toi.png" />
        
          </div>
        </Grid>
        </Grid>
        </Hidden>


        {/* mobile */}
        <Hidden smUp>
        <Grid container spacing={3}       style={{       paddingRight: 100,
        paddingLeft: 100,}} >
            <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
  
      >
        <Typography variant="h5" style={{ fontFamily:"Montserrat1", marginTop:20, textAlign:"center",color:"#26395f"}}> Our Recognitions </Typography>
        <Bar />
      
      </Grid>
      <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
      
        >
          <div style={{ width: "100%" }}>
        
            <StaticImage alt="Main" src="../images/elevate_logo.png" />
          </div>
        </Grid>
        <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
          
        >
          <div style={{ width: "100%" }}>
          
            <StaticImage alt="Main" src="../images/tnie.jpeg" />
          </div>
        </Grid>
        <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
          
        >
          <div style={{ width: "100%" }}>
          
            <StaticImage alt="Main" src="../images/toi.png" />
          </div>
        </Grid>
        </Grid>
        </Hidden>
        </Grid>

  )
}
export default Recognation
