// Page
import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import About from './About'
import Events from './Events'
import Footer from './Footer'
import Header from './Header'
import Members from './Members'
import Sponsors from './Sponsors'
import TechLogos from './TechLogos'
import './style.css';

class Page extends Component {
  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Header />
        <About />
        <TechLogos />
        <Events />
        <Members />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}

export default Page;
