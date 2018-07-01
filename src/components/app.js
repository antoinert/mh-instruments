import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';

import TestContainer from '../containers/test_container';

import Home from './home';
import About from './about';
import Products from './products';
import Prices from './prices';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/">PMH</NavLink>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1}>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem eventKey={2}>
                <NavLink to="/products" class="moi">Products</NavLink>
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink to="/prices">Prices</NavLink>
              </NavItem>
              <NavItem eventKey={4}>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
          </div>
          <div className="content">
            <Switch>
              <Route path="/prices" component={Prices} />
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
