import {Platform} from 'react-native';

const productionAndroid = 'http://myapp.com/';
const productionIOS = 'http://myapp.com';
const mode = {
  developement: 'http://192.168.10.87:5000/',
  QA: 'http://192.168.10.87:9001/',
  production: Platform.OS === 'android' ? productionAndroid : productionIOS,
};

const apiURL = 'revisebeat/api/v1';

const baseURL = mode.developement; //Change development mode

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
