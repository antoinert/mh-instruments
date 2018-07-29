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
import Instrument from './instrument';
import AllInstruments from './all_instruments';
import NavigationBar from './nav_bar';

export const INSTRUMENTS = {
  'perfect6': {
    "type": "kitara",
    "id": "perfect6",
    "name": "Perfect 6",
    "src": "http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/PERFECT6_MODELIMAGEjpg.jpg",
    "features": ['Liimakaulainen', '24-nauhainen', '25" skaala', 'rosterinauhat'],
    "price": "Perfect6 kitarat alkaen 2069€ sis. alv Tilattavissa myös Perfect7 (7-kielinen malli)"
  },
  'rhino': {
    "type": "kitara",
    "id": "rhino",
    "name": "RHINO",
    "src": "http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/RHINO_MATINHEIKKI_MODEL-2.jpg",
    "features": ['Pulttikaulainen', '22-nauhainen', '25" skaala', 'Rosterinauhat', 'Tremolotalla'],
    "price": "Hinta alkaen 1950€ sis. alv"
  },
  'ngin': {
    "type": "basso",
    "id": "ngin",
    "name": "NGIN",
    "src": "http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/NGINBASS_MODELIMAGE-1.jpg",
    "features": ['4 tai 5 kielinen basso', '34" skaala', 'pulttikaulainen'],
    "price": ""
  }
};

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
              <Route path="/soitin/:type/:id" component={Instrument} />
              <Route path="/soittimet/:type" component={AllInstruments} />
              <Route path="/" component={Etusivu} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
