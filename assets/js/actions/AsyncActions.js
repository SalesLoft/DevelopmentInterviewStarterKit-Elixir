import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchMe() {
  return dispatch => {
    return fetch('/api/me', creds).
      then(response => response.json()).
      then(me => dispatch(actions.receiveMe(me)));
  }
}
