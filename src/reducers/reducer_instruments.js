import { FETCH_INSTRUMENTS, FETCH_INSTRUMENT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {

  case FETCH_INSTRUMENT:
    return { ...state, [action.payload[0].id]: action.payload[0] };

  case FETCH_INSTRUMENTS:
    return action.payload;

  default:
    return state;

  }
}
