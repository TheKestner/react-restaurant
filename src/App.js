import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./App.css";


export default function App() {
  return (
    // <Container className="p-3">
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
    </div> 
   // </Container>
  );
}


//  eventKey="/appitizers">Appitizers

