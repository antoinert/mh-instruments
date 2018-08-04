import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reserveSlot } from '../actions';

class CalendarSlot extends Component {

  reserve() {
    this.props.reserveSlot(this.props.slot);
  }

  render() {
    return (
      <div style={{textAlign:"center", border:"1px solid black"}}>
        <p>{this.props.time}</p>
        <button onClick={this.reserve.bind(this)}>{this.props.slot.reserved ? "VARATTU" : "VARAA"}</button>
      </div>
    );
  }
}

export default connect(null, { reserveSlot })(CalendarSlot);
