import { combineReducers } from 'redux';
import InstrumentsReducer from './reducer_instruments';
import PricesReducer from './reducer_prices';
import CalendarReducer from './reducer_calendar';

const rootReducer = combineReducers({
  instruments: InstrumentsReducer,
  prices: PricesReducer,
  calendar: CalendarReducer,
});

export default rootReducer;
