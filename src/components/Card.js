// import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Card.css";
import { useHistory } from "react-router-dom";

const Cards = (props) => {
  const {id,video, title, desc, img, price } = props;
  console.log("video",video)
  const history = useHistory()
  const handleDirect = (id) => {
      console.log("ids",id);
      history.push(`/${id}`)

  }
  return (
    <article className="crd">
      <Card className="crd-tag" style={{ width: "18rem" }}>
        <figure>
          {img===""?
          <iframe sandbox="allow-scripts allow-presentation allow-same-origin" allow="autoPlay;fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"  src={`${video}?autoplay=1`}></iframe>
          // <video controls autoPlay style={{width:"280px", height:"160px"}} src={video} />
          :<Card.Img variant="top" src={img} />}
          <figcaption className="caption">Assassin Creed</figcaption>
        </figure>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Button onClick={() => handleDirect(id)} variant="primary">Go somewhere</Button>
      </Card>
    </article>
  );
};

export default Cards;
