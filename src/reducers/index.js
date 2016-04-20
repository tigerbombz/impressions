import { combineReducers } from 'redux';
import ApptsReducer from './reducer_appts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({

  appts: ApptsReducer,
  form: formReducer
});

export default rootReducer;
