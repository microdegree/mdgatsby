import React from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Image from "./image"
import "./main.css"
import Hidden from "@material-ui/core/Hidden"

interface IProps {
  course: Course
}

interface Course {
  title: string
  image: string
  description: string
  url: string
}

const CourseCard = ({ course, ...props }: IProps) => {
  return (
    
   <div>
      {/* web */}
     <Hidden xsDown >
      <Card className="modal-content" style={{width:"360px"}}>
      <CardMedia image={course.image} style={{marginTop:"-40px"}}>
        <Image alt={course.title} filename={course.image}  />
      </CardMedia>
      <Hidden xsDown >
      <p style={{float:"right",padding:"10px",marginTop:"-5px",color:"red",fontWeight:"bold"}}>ಕನ್ನಡ</p>
      <div style={{ textAlign: "center" }}>
      <CardContent >
        <Typography variant="h6" component="p"  style={{fontFamily:"Montserrat1",color:"#26395f",marginTop:"10px",marginLeft:"17%" }}>
          {course.title}
        </Typography>
        <Typography variant="body2" component="p" style={{ fontFamily:"Montserrat2",color:"#26395f",marginLeft:"0%" }}>
          {course.description}
        </Typography>
      </CardContent>
      </div>
      </Hidden>
      <Hidden xsDown >
      <CardActions style={{ marginTop:"-10px" }}>
        <a href= {course.url} style={{textDecoration: 'none',fontFamily:"Montserrat1" ,marginLeft:"10px",color:"#26395f"}}>
          Details
          </a>
       <a href= {course.url} style={{ textDecoration: 'none',fontFamily:"Montserrat1" ,marginLeft:"180px",color:"#26395f"}} >
          Enrol Now 
          </a>
      </CardActions>
      </Hidden>
      </Card>
      </Hidden>


{/* mobile */}
      <Hidden smUp >
      <Card className="modal-content" style={{width:"290px"}}>
      <CardMedia image={course.image} style={{marginTop:"-40px"}}>
        <Image alt={course.title} filename={course.image}  />
      </CardMedia>
      <p style={{float:"right",padding:"10px",marginTop:"-5px",color:"red",fontWeight:"bold"}}>ಕನ್ನಡ</p>
      <CardContent style={{ textAlign: "center" }}>
        <Typography style={{fontFamily:"Montserrat1",color:"#26395f",textAlign:"center",marginLeft:"45px",marginTop:"10px",fontSize:"18px" }}>
          {course.title}
        </Typography>
        <Typography variant="body2" component="p" style={{ fontFamily:"Montserrat2",color:"#26395f",marginLeft:"20%" }}>
          {course.description}
        </Typography>
      </CardContent>
      <Hidden smUp >
      <CardActions style={{ marginTop:"-10px" }}>
          <a href= {course.url} style={{textDecoration: 'none',fontFamily:"Montserrat1" ,marginLeft:"10px",color:"#26395f"}}>
          Details
          </a>
          <a href= {course.url} style={{ textDecoration: 'none',fontFamily:"Montserrat1" ,marginLeft:"110px",color:"#26395f"}} >
          Enrol Now 
          </a>
      </CardActions>
      </Hidden>
      </Card>
      </Hidden>
      </div>
  )
}

export default CourseCard
