import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <h1 style={{textAlign: "center"}}>Pauli Matinheikki Instruments</h1>
        <Nav>
          <NavItem eventKey={1} componentClass={NavLink} href="/" to="/">
            ETUSIVU
          </NavItem>
          <NavItem eventKey={2} componentClass={NavLink} href="/tietoja" to="/tietoja">
            TIETOJA MINUSTA
          </NavItem>
          <NavDropdown eventKey={3} title="KITARAT" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Perfect 6</MenuItem>
            <MenuItem eventKey={3.2}>RHINO</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="BASSOT" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>NGIN</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} componentClass={NavLink} href="/piirustukset" to="/piirustukset">
            CAD-PIIRUSTUKSET
          </NavItem>
          <NavItem eventKey={4} componentClass={NavLink} href="/hinnasto" to="/hinnasto">
            HINNASTO
          </NavItem>
          <NavItem eventKey={3} componentClass={NavLink} href="/galleria" to="/galleria">
            GALLERIA
          </NavItem>
          <NavItem eventKey={3} componentClass={NavLink} href="/ota-yhteytta" to="/ota-yhteytta">
            OTA YHTEYTTÄ
          </NavItem>
          <NavItem eventKey={3} componentClass={NavLink} href="/ajanvaraus" to="/ajanvaraus">
            AJANVARAUSKALENTERI
          </NavItem>

        </Nav>
      </Navbar>
    );
  }
}
