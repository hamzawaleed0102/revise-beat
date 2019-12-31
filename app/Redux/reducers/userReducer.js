import {LOGIN_USER, LOGOUT_USER} from '../constants/userConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, user: action.user};
    case LOGOUT_USER:
      const {user, ...newState} = state;
      return {newState};
    default:
      return state;
  }
};
