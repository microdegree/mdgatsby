import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Bar from "./bar"

interface IProps {
    review: Review
}

interface Review {
  title: string

  description: string
  description1: string
}

const ReviewCard = ({ review, ...props }: IProps) => {
  return (
    <Card className="modal-content1">
      <CardContent style={{ textAlign: "start" }}>
   
        <Typography variant="h6" style={{ textAlign: "start",fontFamily:"Montserrat1",color:"#26395f" }}>
          {review.title}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "start",fontFamily:"Montserrat2",fontSize:"10px" ,marginTop:"3px",color:"#26395f"}}>
          {review.description}
        </Typography>
        <Typography variant="body2"  component="p" style={{ textAlign: "start",fontFamily:"Montserrat2",marginTop:"3px",color:"#26395f" }}>
          {review.description1}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ReviewCard
