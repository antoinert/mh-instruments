import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstruments } from '../actions';
import _ from 'lodash';


class AllInstruments extends Component {

  componentDidMount() {
    const { type } = this.props.match.params;
    this.props.fetchInstruments(type);
  }

  renderInstruments() {
    return _.map(this.props.instruments, instrument => {
      return (
        <div>{instrument.name}</div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderInstruments()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { instruments: state.instruments };
}

export default connect(mapStateToProps, { fetchInstruments })(AllInstruments);
