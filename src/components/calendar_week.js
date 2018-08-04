import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CalendarSlot from './calendar_slot';

export default class CalendarWeek extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot />
        </Col>
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot />
        </Col>
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot />
        </Col>
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot />
        </Col>
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot />
        </Col>
      </Row>
    );
  }
}
