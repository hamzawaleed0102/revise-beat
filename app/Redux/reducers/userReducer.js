import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING_STATE,
} from '../constants/userConstants';

const initialState = {loading: {}, user: {}};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, user: action.user};
    case LOGOUT_USER:
      const {user, ...newState} = state;
      return {newState};
    case SET_LOADING_STATE:
      return {...state, loading: action.loading};

    default:
      return state;
  }
};
