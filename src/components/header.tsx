import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
interface Props {
  companyName: string
}

const useStyles = makeStyles(theme => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
    
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))

const Header = ({ companyName }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navLinks = [
    { displayText: "Courses", link: "https://courses.microdegree.work/pages/premium-courses", },
    { displayText: "Scholarship", link: "#services" },
    { displayText: "Blog", link: "https://blog.microdegree.work/" },
    { displayText: "Community", link: "https://t.me/microdegreekannada" },
    { displayText: "+91 83108 82795", link: "tel:+91 83108 82795" },
    { displayText: "Sign Up ", link: "https://courses.microdegree.work/users/sign_up" },
  ]

  return (
    <React.Fragment>
         <Hidden smUp>
          <Grid container  style={{alignItems:"center",marginTop:"-15px"}} >
            <p style={{ backgroundColor:"#EB5C74",width:"100%",color:"#fff", textAlign: "center", padding:"12px",fontSize:"10px",fontFamily:"Montserrat2" }}>Special Offer! Buy any 2 courses at ₹949 - Enrol Now </p>
                </Grid>
                </Hidden>
                <Hidden xsDown>
                      <Grid container  style={{alignItems:"center",marginTop:"-16px",fontFamily:"Montserrat2"}} >
            <p style={{ backgroundColor:"#EB5C74",width:"100%",color:"#fff", textAlign: "center", padding:"12px" }}>Special Offer! Buy any 2 courses at ₹949 - Enrol Now </p>
                </Grid>
            </Hidden>
      <Box>
    
        <Toolbar className="header">
          <Hidden smUp>
          <Typography
            variant="h6"
            className={classes.toolbarTitle}
          >
            <div style={{ width: "40%" }}>
            <Image alt="logo" filename="md-logo.png" />
            </div>
          </Typography>
            <IconButton
              className={classes.drawerToggle}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
                <MenuIcon />
              </IconButton>
            </Hidden>
        

          <Hidden xsDown>
          <Typography
            variant="h6"
            className={classes.toolbarTitle}
          >
            <div style={{ width: "20%" }}>
            <Image alt="logo" filename="md-logo.png" />
            </div>
          </Typography>
            {navLinks.map(item => (
              <Button key={item.displayText}><a href= {item.link} style={{ textDecoration: 'none',fontFamily:"Montserrat1",color:"#26395f" }}>
                {item.displayText}
                </a>
              </Button>
            ))}
            </Hidden>
          </Toolbar>
  
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.drawerList}>
          {navLinks.map((item, index) => (
            <ListItem button key={item.displayText}>
              <a href= {item.link} style={{ textDecoration: 'none',fontFamily:"Montserrat1" }}>
                {item.displayText}
                </a>
            </ListItem>
            
          ))}
        </List>
      </Drawer>
      </Box>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `MicroDegree`,
}

export default Header
