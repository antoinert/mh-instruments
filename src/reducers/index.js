import { combineReducers } from 'redux';
import InstrumentsReducer from './reducer_instruments';

const rootReducer = combineReducers({
  instruments: InstrumentsReducer,
});

export default rootReducer;
