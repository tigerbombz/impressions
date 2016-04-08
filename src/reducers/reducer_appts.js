import { FETCH_APPTS } from '../actions/index';

const INITIAL_STATE = { all: [], appt: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_APPTS:
    return { ...state, all: action.payload.data };

  default:
    return state;
  }
}
