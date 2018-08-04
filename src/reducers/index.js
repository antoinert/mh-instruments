import { combineReducers } from 'redux';
import InstrumentsReducer from './reducer_instruments';
import PricesReducer from './reducer_prices';

const rootReducer = combineReducers({
  instruments: InstrumentsReducer,
  prices: PricesReducer,
});

export default rootReducer;
