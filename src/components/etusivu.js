import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';

export default class Etusivu extends Component {
  render() {
    return (
      <div>
        <Carousel style={{width: "75%", height: "20%", marginLeft: "auto", marginRight: "auto"}} interval="4000">
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/AC_02_ebony_edesta.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/2018_03_Snare_softbob2.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/Tyo%CC%88po%CC%88yta%CC%88_huoltopo%CC%88yta%CC%88.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://www.matinheikkiguitars.fi/wp-content/uploads/2018/03/AC_01_valojuovat.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </div>
    );
  }
}
