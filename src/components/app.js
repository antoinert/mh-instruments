import React, { Component } from 'react';

import {
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom';

import { PageHeader } from 'react-bootstrap';

import TestContainer from '../containers/test_container';

import Etusivu from './etusivu';
import Tietoja from './tietoja';
import Piirustukset from './piirustukset';
import Hinnasto from './hinnasto';
import Galleria from './galleria';
import OtaYhteytta from './ota-yhteytta';
import Ajanvaraus from './ajanvaraus';
import NavigationBar from './nav_bar';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <NavigationBar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="content">
            <Switch>
              <Route path="/tietoja" component={Tietoja} />
              <Route path="/piirustukset" component={Piirustukset} />
              <Route path="/hinnasto" component={Hinnasto} />
              <Route path="/galleria" component={Galleria} />
              <Route path="/ota-yhteytta" component={OtaYhteytta} />
              <Route path="/ajanvaraus" component={Ajanvaraus} />
              <Route path="/" component={Etusivu} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
