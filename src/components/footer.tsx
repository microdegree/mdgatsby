import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"

import Image from "./image"
import "./main.css"

const Footer = () => {
  const footerLinks = [
    {
      title: "COMPANY",
      items: [
        { displayText: "About", url: "./about-us" },
        {
          displayText: "Terms & Conditions",
          url: "./terms-conditions",
        },
        { displayText: "Leaderboard", url: "" },
        { displayText: ".", url: "" },
      ],
    },
    {
      title: "PLATFORM",
      items: [
        { displayText: "Scholarship", url: "" },
        { displayText: "MicroDegree For Campus", url: "" },
        { displayText: "Free Courses", url: "" },
        { displayText: "Community", url: "" },
      ],
    },
    {
      title: "GET IN TOUCH",
      items: [
        { displayText: "Phone : +91 83108 82795  ", url: "" },
        { displayText: "Email : hello@microdegree.work", url: "" },
        { displayText: "Pillpouch Healthtech Private Limited K-tech Innovation Hub 3rd Floor,Plama Building Bejai, Mangaluru ,Karnataka 575004.", url: "" },
      
      ],
    },
  ]

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            minHeight: 250,
            color: "#FFF",
          }}
        >

          <Hidden xsDown>
          <Grid
            xs={12}
            sm={5}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ padding:95,  }}
          >
            <div style={{ width: "40%", marginLeft:100,marginTop:-100 }}>
            <Image alt="logo" filename="md-logo.png" />
            </div>
          </Grid>
          </Hidden>


          <Hidden smUp>
          <Grid
            xs={12}
            sm={5}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ paddingTop:20  }}
          >
            <div style={{ width: "40%", marginLeft:100 }}>
            <Image alt="logo" filename="md-logo.png"  />
            <Image alt="line" filename="unnamed.png"  />
            </div>
            </Grid>
            </Hidden>



            <Hidden xsDown>
            {footerLinks.map(footerMenu => (
              <Grid
                item
                xs={12}
                sm={2}
                container
                direction="column"
                justify="space-evenly"
                key={footerMenu.title}
              >
                <Typography variant="subtitle1" style={{ color: "#26395f",fontFamily:"Montserrat"}} className="title1">
                  {footerMenu.title}
                </Typography>
                {footerMenu.items.map(link => (
                  <Link style={{ color: "#26395f",fontFamily:"Montserrat2"}} variant="body2" key={link.displayText}>
                     <a href= {link.url} style={{ textDecoration: 'none',color: "#26395f" }} >
                {link.displayText}
                </a>
                  </Link>
                ))}
              </Grid>
                ))}
              </Hidden>


              <Hidden smUp>
              {footerLinks.map(footerMenu => (
              <Grid
                item
                xs={12}
                sm={2}
                container
                direction="column"
                justify="space-evenly"
                key={footerMenu.title}
              >
                <Typography variant="subtitle1" style={{ color: "#26395f",textAlign: "center",paddingTop:10,fontFamily:"Montserrat" }}>
                  {footerMenu.title}
                </Typography>
                {footerMenu.items.map(link => (
                  <Link style={{ color: "#26395f",textAlign: "center",fontFamily:"Montserrat2"}} variant="body2" key={link.displayText}>
                    <a href= {link.url} style={{ textDecoration: 'none',color: "#26395f" }}>
                {link.displayText}
                </a>
                  </Link>
                ))}
                </Grid>
                ))}
              </Hidden>
          </Grid>
        </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          xs={12}
          sm={5}
          item
          direction="column"
          justify="space-evenly"
        >
          <Typography variant="body2" style={{ color: `#733380`,textAlign: "center",fontFamily:"Montserrat2"}}>
          © MicroDegree 2021 All rights reserved.
          
          </Typography>
        </Grid>
     
      </Box>
    </React.Fragment>
  )
}
export default Footer