import React from "react";
import {Card, Button} from "react-bootstrap"


const ProjectCard = ({project}) => {
    const {name, description, github, deployed, img} = project
    return (
        <Card style={{ width: '18rem' }} className="mx-auto my-4">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <a href={github} className="btn btn-primary" target="_blank">Github Repo</a>
    <a href={deployed} className="btn btn-primary" target="_blank">Live Project</a>
  </Card.Body>
</Card>
    )
}
export default ProjectCard;