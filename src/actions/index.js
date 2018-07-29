import { INSTRUMENTS } from '../components/app';
import _ from 'lodash';

export const FETCH_INSTRUMENTS = 'fetch_instruments';
export const FETCH_INSTRUMENT = 'fetch_instrument';

export function fetchInstruments(type) {
  var instruments = _.filter(INSTRUMENTS, {'type': type});

  return {
    type: FETCH_INSTRUMENTS,
    payload: instruments
  };
}

export function fetchInstrument(id, type) {
  var instrument = _.filter(INSTRUMENTS, {'id': id});

  return {
    type: FETCH_INSTRUMENT,
    payload: instrument
  }
}
