import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import "./main.css"
import ReviewCard from "./review-card"
import Bar from "./bar"

const Reviews = () => {
  let reviews = [
    {
      id: 1,
     
      title: "Seema Bandi",
      description:
        "JavaScript (Advanced)",
        description1:
        "Learning in Kannada is helping out to grasp things quickly over all making it to learn in an interesting way.",
    },
    {
      id: 2,
   
      title: "Bharath NV",
      description:
        "Python",
        description1:
        "Learning Python In kannada is Very Useful, Actually We Understand Better and Give the Confidence in this field",
    },
    {
      id: 3,
     
      title: "Sandeep N",
      description:
        "Python",
        description1:
        "Thank you so much for your wonderful platform to understand the coding in Kannada. Keep supporting .",
    },
    {
      id: 4,
   
      title: "Sanath S Aithal",
      description:
        "JavaScript (Advanced)",
        description1:
        "Great thing, explaining programing language in kannada, best thing.",
    },
    {
      id: 5,
    
      title: "Vijeth Kalavarkar",
      description:
        "MySQL",
        description1:
        "One of the best teaching i have ever seen in my life. Thank you soooo much.",
    },
    {
      id: 6,
 
      title: "Swananda Hegde",
      description:
        "Python",
        description1:
        "The passion of teaching in simple and easy way is contagious!",
    },
  ]

  return (
    <Grid container>
 {/* web */}
    <Hidden xsDown>
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        paddingRight: 120,
        paddingLeft: 140,
        paddingBottom:50,
        marginTop:50,
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
     <Typography variant="h5" style={{ marginTop: 50,fontFamily:"Montserrat1",color:"#26395f"}} > Reviews </Typography>
        <Bar />
        <h1 style={{color:"#26395f" }}>ನಮ್ಮ Course ಕಲಿಯುವವರು MicroDegree ಬಗ್ಗೆ ಏನು ಹೇಳುತ್ತಾರೆ!</h1>
      
      </Grid>
      
      {reviews.map(review => (
        <Grid item xs={12} sm={4} key={review.id}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
    </Hidden>


{/* mobile */}
    <Hidden smUp>
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        paddingRight: 40,
        paddingLeft: 40,
        paddingBottom:40,
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
     <Typography variant="h5" style={{ marginTop: 50,fontFamily:"Montserrat1",color:"#26395f"}} > Reviews </Typography>
        <Bar />
      
      </Grid>
      
      {reviews.map(review => (
        <Grid item xs={12} sm={4} key={review.id}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
    </Hidden>
    </Grid>
  )
}
  export default Reviews
  