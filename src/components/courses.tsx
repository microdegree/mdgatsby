import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CourseCard from "./course-card"
import Bar from "./bar"
import "./main.css"
import Hidden from "@material-ui/core/Hidden"
import { motion, AnimatePresence } from "framer-motion"

const Courses = () => {
  const courses = [
    {
      title: "JavaScript",
      description:
        "Free",
        url: "https://courses.microdegree.work/courses/javascript-fundations-program",
      image: "12798.jpg",
    },
    {
      title: "Basics of Python",
      description:
        "Free",
        url: "https://courses.microdegree.work/courses/basics-of-python",
      image: "pythonbasic.jpg",
    },
    {
      title: "Basics of MySQL",
      description:
        "Free",
        url: "https://courses.microdegree.work/courses/mysql-basics",
      image: "mysqlbasic.jpg",
    },
    {
      title: "Python",
      description:
        "₹499/-",
        url: "https://courses.microdegree.work/courses/python",
      image: "pcourse.jpg",
    },
    {
      title: "React",
      description:
        "₹949/-",
        url: "https://courses.microdegree.work/courses/machine-learning",
      image: "aiml.jpg",
    },
    {
      title: "Data Analytics",
      description:
        "₹949/-",
        url: "https://courses.microdegree.work/courses/data-analytics",
      image: "dataanalytics.jpg",
      
    },
  ]

  return (
    <React.Fragment>
<Hidden xsDown >
  {/* web */}
<motion.div  >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
    <Grid container spacing={4} className="grad1" style={{ textAlign: "center" , marginTop: "50px", width : "100%",paddingLeft:"140px",paddingRight:"140px" }}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
         variant="h5" 
         style={{ fontFamily:"Montserrat1",color:"#26395f" }}>Courses</Typography>
        <Bar />
      </Grid>
      {courses.map(course => (
        <motion.div drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Grid 
          item xs={12} sm={4} key={course.title} style={{marginLeft:"50px",marginTop:"20px"}}>
          <CourseCard course={course} />
        </Grid>
        </motion.div>
      ))}

      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      <Button style={{ color:"#fff",backgroundColor:"#EB5C74 ",marginTop:"40px", paddingTop:"10px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"20px" }} className="mainbutton" size="small" >
        <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',color:"#fff"  }} >
        View All
        </a>
        </Button>
      </Grid>
    </Grid>
    </Grid>
    </motion.div>
    </Hidden>


{/* mobile */}
<Hidden smUp >
<Grid item xs={12} >
<Grid container spacing={2} className="grad4"  alignItems="center">
    <Grid
      item
      xs={12}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
    <Typography variant="h5" style={{ fontFamily:"Montserrat1" }}>Courses</Typography>
    <Bar />
    </Grid>
    {courses.map(course => (
            <Grid item xs={12} sm={4} key={course.title}  container
            direction="column"
            justify="center"
            alignItems="center" style={{alignItems:"center"}} >
              <CourseCard course={course} />
            </Grid>
      ))}

      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      <Button style={{ color:"#fff",backgroundColor:"#EB5C74 ",marginTop:"0px", paddingTop:"10px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"20px" }} className="mainbutton" size="small" >
        <a href="https://courses.microdegree.work/pages/premium-courses"  style={{ textDecoration: 'none',color:"#fff"  }} >
        View All
        </a>
        </Button>
      </Grid>
      </Grid>
      </Grid>
      </Hidden>
      </React.Fragment>
  )
}
export default Courses
