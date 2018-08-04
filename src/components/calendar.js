import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CalendarWeek from './calendar_week';

export default class Calendar extends Component {
  render() {
    return (
        <CalendarWeek style={{paddingLeft:"20px"}}/>
    );
  }
}
