import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstrument } from '../actions';


class Instrument extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchInstrument(id);
  }

  componentDidUpdate() {
    const { id, type } = this.props.match.params;
    this.props.fetchInstrument(id, type);
  }

  render() {
    const { instrument } = this.props;

    if (!instrument) return <div></div>;

    return (
      <div>
        {instrument.name}
      </div>
    );
  }
}

function mapStateToProps({ instruments }, ownProps) {
  return { instrument: instruments[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchInstrument })(Instrument);
