import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPrices } from '../actions';
import _ from 'lodash';

class Hinnasto extends Component {
  componentDidMount() {
    this.props.fetchPrices();
  }

  renderPrices() {
    return _.map(this.props.prices, price => {
      return (
        <tr>
          <td style={{border: "1px solid #dddddd", paddingLeft: 5}}>
            <div><b>{price.id}</b></div>
            <div>
              <ul>
                {price.features.map(feature => {
                  return <li>{feature}</li>
                })}
              </ul>
            </div>
          </td>
          <td style={{border: "1px solid #dddddd", textAlign: "center"}}>
            {price.price}
          </td>
        </tr>
      )
    })
  }

  renderDescription() {
    return (
      <div>
        <h4>Hinnat sisältävät alv 24%</h4>
        <h4><b>Perushuolto sisältää</b></h4>
        <ul>
          <li>kaularaudan säätö</li>
          <li>otelaudan puhdistus ja öljyäminen</li>
          <li>tallan intonaation sääto ja tarkistus</li>
          <li>kielten korkeuden säätö asiakkaan toiveen mukaan</li>
          <li>satulaurien syvennys tarvittaessa</li>
          <li>elektroniikan toimivuuden tarkistus</li>
          <li>kielten vaihto (ei sis. kieliä)</li>
          <li>mikrofonien korkeuden säätö ja tasapainoisuuden tarkistus</li>
          <li>viritys ja koesoitto</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-5">
            <table>
              <tr>
                <th>Hinnasto</th>
              </tr>
              {this.renderPrices()}
            </table>
          </div>
          <div class="col-md-5">
            <ul>
              {this.renderDescription()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({prices}) {
  return { prices };
}

export default connect(mapStateToProps, { fetchPrices })(Hinnasto);
