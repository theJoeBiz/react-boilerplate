import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TopBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Boilerplate</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{ pathname: '/' }}>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/page1' }}>
            <NavItem>Page 1</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/page2' }}>
            <NavItem>Page 2</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default TopBar;