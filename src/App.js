import React from 'react';
import { Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav';
import "./App.css";


export default function App() {
  return (
    <div>
      <h1>KESTNER'S</h1>
    <Nav justify variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>Menu:</Nav.Link>   
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="appitizers"eventKey="/appitizers">Appitizers</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="lunch"eventKey="/lunch">Lunch</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="dinner"eventKey="/dinner">
      Dinner
    </Nav.Link>
  </Nav.Item>
</Nav>
<Outlet />
<div>
<Card className="">
  {/* <Card.Img src="holder.js/762px270" alt="Card image" />
  <Card.ImgOverlay> */}
    <Card.Title>About Us</Card.Title>
    <Card.Text>
      Location:
      348 E Main St, Lexington, KY.
    </Card.Text>
    <Card.Text>Phone Number: 867-5309</Card.Text>
  {/* </Card.ImgOverlay> */}
</Card>
</div>
    </div> 
  );
}


//  eventKey="/appitizers">Appitizers

