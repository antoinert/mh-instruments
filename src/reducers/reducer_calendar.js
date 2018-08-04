import { FETCH_CALENDAR, RESERVE_SLOT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {

  case FETCH_CALENDAR:
    return action.payload;

  case RESERVE_SLOT:
    return {...state, [action.payload.date]:
      {...state[action.payload.date], [action.payload.time]:
        {...state[action.payload.date][action.payload.time], reserved: true}}};

  default:
    return state;

  }
}
