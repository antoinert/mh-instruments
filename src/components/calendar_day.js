import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CalendarSlot from './calendar_slot';
import _ from 'lodash';

export default class CalendarDay extends Component {

  renderSlots() {
    return _.map(this.props.day, (slot, key) => {
      console.log(key);
      return (
        <Col xs={2} style={{width:"20%"}}>
          <CalendarSlot time={key} slot={slot}/>
        </Col>
      );
    });
  }

  render() {
    return (
      <Row className="show-grid">
        {this.renderSlots()}
      </Row>
    );
  }
}
