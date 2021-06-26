import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const AboutPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
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
          <iframe width="480" height="275" src="https://www.youtube.com/embed/01qSumyUrpU" > </iframe> 
            
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
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
          <iframe width="330" height="275" src="https://www.youtube.com/embed/01qSumyUrpU" > </iframe> 
            
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
        <Typography variant="h4" color="inherit" style={{ fontFamily:"Montserrat1" }}>
        Join 4000+ Learners.
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20,fontFamily:"Montserrat1" }}
        >
         Learn coding and job-ready skills from industry experts in Kannada. MicroDegree is chosen among top innovative startups by Govt. of Karnataka's flagship Elevate-Call2 program
        </Typography>
        <Button variant="outlined" color="primary" size="large" >
          <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none' }} >
        ಬನ್ನಿ ಕೈಜೋಡಿಸಿ 
        </a>
        </Button>
      </Grid>
    </Grid>
  )
}
export default AboutPanel
