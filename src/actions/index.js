import axios from 'axios';

export const FETCH_APPTS = 'FETCH_APPTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=impressionshairdesign';


export function fetchAppts() {
  const request = axios.get(`${ROOT_URL}/book-online${API_KEY}`);
  return {
    type: FETCH_APPTS,
    payload: request
  };
}
