import React, { Component } from 'react';

export default class Soitin extends Component {
  renderFeatures() {
    return this.props.instrument.features.map(feature => {
      return <li><h3>{feature}</h3></li>;
    });
  }

  render() {
    const { instrument } = this.props;
    
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-5">
            <img src={instrument.src} style={{height: "100%", width: "100%", marginTop: 25}}></img>
          </div>
          <div class="col-md-5">
            <div>
              <h1>{instrument.name}</h1>
            </div>
            <div>
              <ul>
                {this.renderFeatures()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
