import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import{useState} from 'react';
import React from 'react';


function Menu({dataParentToChild}) {
 
  // let [data,setstate]=useState(props)


  return (
    <div className="App">
      
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="ml-5" href="#home">Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="ml-5" id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">All Product</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Popular Item</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <form inline>
          <button className="mr-5 btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="m-2 badge bg-dark text-white ms-1 rounded-pill">{dataParentToChild}</span>
          </button>
        </form>
      </Navbar.Collapse>
    </Navbar>
   

  </div>
  
  );
}

export default Menu;
