import {Platform} from 'react-native';

const mode = {
  developement: 'http://192.168.10.87:5000/',
  QA: 'http://178.62.50.175:5000/',
  production: 'http://myapp.com/',
};

const apiURL = 'revisebeat/api/v1';

const baseURL = mode.QA; //Change development mode

const API = {
  signup: baseURL + apiURL + '/signup',
  update: baseURL + apiURL + '/user/',
  updatePassword: baseURL + apiURL + '/user/updatePassword',
  login: baseURL + apiURL + '/login',
  getAllSubscriptions: baseURL + apiURL + '/getAllSubscriptions',
  subscribePlan: baseURL + apiURL + '/subscribePlan',
  sendVerificationCode: baseURL + apiURL + '/sendVerificationCode',
};

export default API;
