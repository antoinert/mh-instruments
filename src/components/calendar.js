import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import CalendarDay from './calendar_day';
import { fetchCalendar } from '../actions';

class Calendar extends Component {

  componentDidMount() {
    this.props.fetchCalendar();
  }

  render() {
    return (
        <CalendarDay style={{paddingLeft:"20px"}} day={this.props.calendar["11-10-1992"]}/>
    );
  }
}

function mapStateToProps({ calendar }) {
  return { calendar };
}

export default connect(mapStateToProps, { fetchCalendar })(Calendar);
