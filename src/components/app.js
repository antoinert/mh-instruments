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

export const PRICES = {
  "perushuolto": {
    "id": "perushuolto",
    "price": "60.00",
    "features": ['floyd rose tyylinen + 15€', 'yksittäisen nauhan hionta, pyöristys ja kiillotus 30€ + 10€ lisää / nauha']
  },
  "yläsatulan valmistus": {
    "id": "yläsatulan valmistus",
    "price": "60.00",
    "features": ["sisältää materiaalikulut"]
  },
  "alasatulan valmistus": {
    "id": "alasatulan valmistus",
    "price": "70.00",
    "features": ["kompensoitu / intonoitu", "sisältää materiaalikulut"]
  },
  "nauhojen hionta": {
    "id": "nauhojen hionta",
    "price": "110.00",
    "features": ["sisältää nauhojen hionnan, pyöristyksen ja kiillotuksen sekä perushuollon"]
  },
  "nauhojen vaihto (pulttikaulainen)": {
    "id": "nauhojen vaihto (pulttikaulainen)",
    "price": "210.00",
    "features": ["stainless steel + 80€", "vaahteraotelautainen / liimakaulainen + 40€", "sisältää nauhojen hionnan + nauhamateriaalit"]
  },
  "murtunut lapa": {
    "id": "murtunut lapa",
    "price": "280.00",
    "features": ["lavan liimaus ja kolojen paikkaus", "sis. kaulan osittainen lakkaus"]
  },
  "kytkimen, potentiometrin tai jakin vaihto": {
    "id": "kytkimen, potentiometrin tai jakin vaihto",
    "price": "35.00",
    "features": ["+ materiaalit €"]
  },
  "mikrofonin vaihto": {
    "id": "mikrofonin vaihto",
    "price": "55.00",
    "features": ["lisämikrofoni +15€"]
  },
  "mikrofonin uudelleenkäämintä": {
    "id": "mikrofonin uudelleenkäämintä",
    "price": "90.00",
    "features": []
  },
  "häiriösuojaus": {
    "id": "häiriösuojaus",
    "price": "65.00",
    "features": ["mikrofoni- ja elektroniikkapoteroiden, sekä tarvittaessa pleksin sisäpuolen vuoraus kupariteipillä"]
  },
  "CAD-piirtäminen": {
    "id": "CAD-piirtäminen",
    "price": "alk. 60.00",
    "features": ["valmiin piirustuksesi tai suunnitelmasi virtualisoiminen / muuttaminen .dwg ja .dxf muotoon"]
  },
  "pulttikaulainen RHINO -kitara tai NGIN -basso": {
    "id": "pulttikaulainen RHINO -kitara tai NGIN -basso",
    "price": "alk 1950.00",
    "features": []
  },
  "liimakaulainen Perfect 6 -kitara kaarevalla kannella": {
    "id": "liimakaulainen Perfect 6 -kitara kaarevalla kannella",
    "price": "alk. 2069.00",
    "features": []
  },
  "lavaton Matinheikki Instruments sähkökitara tai -basso": {
    "id": "lavaton Matinheikki Instruments sähkökitara tai -basso",
    "price": "alk. 2400.00",
    "features": []
  },
  "akustinen teräskielinen Matinheikki Instruments kitara": {
    "id": "akustinen teräskielinen Matinheikki Instruments kitara",
    "price": "alk. 2600.00",
    "features": []
  }
}

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
