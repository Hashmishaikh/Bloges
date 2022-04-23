// import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import  './Card.css'

const Cards = () => {
  return (
   <article className="crd" >
     <Card style={{ width: '18rem' }}>
       <figure>
  <Card.Img variant="top" src="https://wallpapercave.com/wp/wp6196238.jpg" />
  <figcaption className="caption">Assassin Creed</figcaption>
  </figure>
 <Card.Body>
   <Card.Title>Good Morning</Card.Title>
   <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
 </Card.Body>
 <Button variant="primary">Go somewhere</Button>
</Card>
   </article>
  );
};

export default Cards;
