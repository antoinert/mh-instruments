import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import NavigationDropdown from './nav_dropdown';

export default class NavigationBar extends Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render() {
    return (
      <Navbar fixedTop>
        <img style={{height: 67, width: 250, display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 20}} src="http://www.matinheikkiguitars.fi/wp-content/uploads/2017/08/cropped-matinheikki-1.png"></img>
        <Nav>
          <NavItem eventKey={1} componentClass={NavLink} href="/" to="/">
            ETUSIVU
          </NavItem>
          <NavItem eventKey={2} componentClass={NavLink} href="/tietoja" to="/tietoja">
            TIETOJA MINUSTA
          </NavItem>
          <NavigationDropdown
            title="KITARAT"
            items={["Perfect 6", "RHINO"]}
          />
          <NavigationDropdown
            title="BASSOT"
            items={["NGIN"]}
          />
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
