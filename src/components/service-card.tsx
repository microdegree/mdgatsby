import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import "./main.css"
import Hidden from "@material-ui/core/Hidden"

interface IProps {
  service: Service
}

interface Service {
  title: string
  image: string
  image1: string
  description: string
  description1: string
}

const ServiceCard = ({ service, ...props }: IProps) => {
  return (
    <div>
       {/* web */}
    <Hidden xsDown >
    <Card className="modal-content2" style={{width:"300px"}}>
      <CardContent style={{ textAlign: "center", minHeight: 200 }}>
        <div style={{ width: 100, marginTop:"10px",marginLeft: 80 }}>
          <Image alt={service.title} filename={service.image} />
        </div>

        <Typography variant="h6"  style={{ textAlign: "center",fontFamily:"Montserrat1",color:"#26395f" }}>
          <a href={service.image1} >
          <div style={{ width: "30px",marginTop:"-30px",marginLeft:"160px"}}>
              <Image alt="Main" filename="li.png"  />
              </div>
          </a>
        </Typography>
        <div style={{marginTop:"10px"}}>
        <Typography variant="h6"  style={{ textAlign: "center",fontFamily:"Montserrat1",color:"#26395f" }}>
          {service.title}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "center",fontFamily:"Montserrat2",color:"#26395f" }}>
          {service.description}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "center",fontFamily:"Montserrat2",color:"#26395f" }}>
          {service.description1}
        </Typography>
        </div>
      </CardContent>
    </Card>
    </Hidden>

    {/* mobile */}

    <Hidden smUp >
    <Card className="modal-content2" style={{width:"280px"}}>
      <CardContent style={{ textAlign: "center", minHeight: 200 }}>
        <div style={{ width: 100, marginTop:"10px",marginLeft: 70 }}>
          <Image alt={service.title} filename={service.image} />
        </div>

        <Typography variant="h6"  style={{ textAlign: "center",fontFamily:"Montserrat1",color:"#26395f" }}>
          <a href={service.image1} >
          <div style={{ width: "30px",marginTop:"-30px",marginLeft:"150px"}}>
              <Image alt="Main" filename="li.png"  />
              </div>
          </a>
        </Typography>
        <div style={{marginTop:"10px"}}>
        <Typography variant="h6"  style={{ textAlign: "center",fontFamily:"Montserrat1",color:"#26395f" }}>
          {service.title}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "center",fontFamily:"Montserrat2",color:"#26395f" }}>
          {service.description}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "center",fontFamily:"Montserrat2",color:"#26395f" }}>
          {service.description1}
        </Typography>
        </div>
      </CardContent>
    </Card>
    </Hidden>
    </div>
  )
}
export default ServiceCard
