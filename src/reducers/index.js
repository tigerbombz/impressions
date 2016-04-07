import { combineReducers } from 'redux';
import ApptsReducer from './reducer_appts';

const rootReducer = combineReducers({
  appts: ApptsReducer
});

export default rootReducer;
