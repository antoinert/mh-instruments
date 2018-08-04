import { FETCH_PRICES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {

  case FETCH_PRICES:
    return action.payload;

  default:
    return state;

  }
}
