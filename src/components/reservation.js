import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Calendar from './calendar';

export default class Reservation extends Component {
  render() {
    return (
      <Grid style={{width:"50%", border:"1px solid black", padding:"5px 20px"}} fluid={false}>
        <Row className="show-grid">
          <Col>
            <div style={{height:"100%", width:"100%", textAlign:"center", paddingBottom:"8px"}}>
              TopBar
            </div>
          </Col>
        </Row>

        <Row className="show-grid">
          <Calendar />
        </Row>
      </Grid>
    );
  }
}
