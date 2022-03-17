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
      <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>Menu:</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Appitizers</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Lunch</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">
      Dinner
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div> 
   // </Container>
  );
}

