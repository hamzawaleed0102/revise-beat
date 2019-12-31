import {LOGIN_USER} from '../constants/userConstants';

export const loginUser = loginResponse => {
  return {
    type: LOGIN_USER,
    user: loginResponse,
  };
};
