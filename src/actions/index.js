import axios from 'axios';

export const FETCH_APPTS = 'FETCH_APPTS';
export const CREATE_APPT = 'CREATE_APPT';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=impressionshairdesign';


export function fetchAppts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_APPTS,
    payload: request
  };
}

export function createAppt(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_APPT,
    payload: request
  };
}
