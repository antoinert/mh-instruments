import { INSTRUMENTS, PRICES, CALENDAR } from '../components/app';
import _ from 'lodash';

export const FETCH_INSTRUMENTS = 'fetch_instruments';
export const FETCH_INSTRUMENT = 'fetch_instrument';
export const FETCH_PRICES = 'fetch_prices';
export const FETCH_CALENDAR = 'fetch_calendar';
export const RESERVE_SLOT = 'reserver_slot';

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

export function fetchPrices() {
  return {
    type: FETCH_PRICES,
    payload: PRICES
  }
}

export function fetchCalendar() {
  return {
    type: FETCH_CALENDAR,
    payload: CALENDAR
  }
}

export function reserveSlot(slot) {
  CALENDAR[slot.date][slot.time].reserved = true;

  return {
    type: RESERVE_SLOT,
    payload: slot
  }
}
