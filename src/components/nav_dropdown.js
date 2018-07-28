import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavigationDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      title: props.title,
      items: props.items
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render() {
    var dropdownItems = this.state.items.map((name, index) => {
      return <MenuItem eventKey={3+0.1*index}>{name}</MenuItem>;
    });

    return (

      <NavDropdown
        eventKey={3}
        title={ this.state.title }
        id="basic-nav-dropdown"
        onMouseEnter = { this.handleOpen }
        onMouseLeave = { this.handleClose }
        open={ this.state.isOpen }
        noCaret>
          {dropdownItems}
      </NavDropdown>

    );
  }
}
