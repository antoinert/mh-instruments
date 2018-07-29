import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default class Piirustukset extends Component {
  render() {
    return (
      <div>
        <p style={{textAlign: "center"}}>
          Onko mielessäsi kitaramalli, jota ei ole vielä koskaan tehty ja tarvitset sitä varten piirustukset? Ei hätää! Voin piirtää cad-piirustukset luonnoksesi pohjalta, tai jopa suunnitella kanssasi unelmiesi kitaran. <br /><br />
          Myös jyrsinsapluunoiden ja erilaisten mallineiden piirtäminen sekä teettäminen onnistuu. Materiaaleina 4 mm, 6 mm tai 9 mm vaneri tai 5 mm kirkas pleksi.<br /><br />
          Cad-piirustukset saat PDF-, DWG- tai DXF-muodossa.<br /><br />
        </p>
        <Button bsStyle="primary" componentClass={NavLink} href={"/ota-yhteytta"} to={"/ota-yhteytta"}>Ota yhteytta</Button>
        <img src="http://www.matinheikkiguitars.fi/wp-content/uploads/2017/08/ktar-1.jpg" style={{height: "100%", width: "100%"}}/>
      </div>
    );
  }
}
