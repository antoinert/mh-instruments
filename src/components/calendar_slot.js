import React, { Component } from 'react';

export default class CalendarSlot extends Component {
  render() {
    return (
      <div style={{textAlign:"center", border:"1px solid black"}}>
        <p>{this.props.time}</p>
        <button>{this.props.slot.reserved ? "VARATTU" : "VARAA"}</button>
      </div>
    );
  }
}
