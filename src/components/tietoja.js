import React, { Component } from 'react';

export default class Tietoja extends Component {
  render() {
    return (
      <div style={{width: "90%", height: 500, marginLeft: "auto", marginRight: "auto"}}>
        <div style={{width: "48%", height: "50%", marginTop: "auto", marginBottom: "auto", float: "left"}}>
          <img src="http://www.matinheikkiguitars.fi/wp-content/uploads/2017/08/Sieppaapuli.PNG.png" style={{height: "100%", width: "100%"}}></img>
        </div>
        <div style={{width: "48%", position: "relative"}}>
          <p>
            Olen hyvinkääläinen soitinrakentaja ja perustin yritykseni kesäkuussa 2017.<br /><br />
            Kiinnostukseni musiikkiin alkoi kutakuinkin 12-14 -vuotiaana, kun vanhempani ostivat minulle kellariin käytetyt rummut. Niitä jonkin aikaa hakattuani yläasteen puolessa välissä mukaan tuli kitara. Kun lukio alkoi, tiesin jo ensimmäisenä vuonna, että lukio ei itsenään ole se "mun juttu" ja aloin opiskella kaksoistutkinnolla HYRIA:lla teollisuuspuusepäksi. Tiesin heti, että haluan tehdä kitaran. <br />
            Teollisuuspuuseppäkoulutuksen päättötyönä tein akustisen kitaran ja sen ohessa myös ensimmäisen sähkökitarani. Armeijan loppupuolella keväällä 2014 Ikaalisten käsi- ja taideteollisuusoppilaitoksen kuraattori otti minuun yhteyttä ja heitti ilmoille mahdollisuuden soitinrakennuskouluun hakemisesta. Hain saman vuoden keväällä ja pääsin sisään. Kolmen vuoden aikana valmistui niin akustisia kuin sähkökitaroita sekä muutama basso. Nyt unelmana on rakentaa uraa soitinrakentajana, niin kauan kuin henki tässä miehessä pihisee.
          </p>
        </div>
      </div>
    );
  }
}
