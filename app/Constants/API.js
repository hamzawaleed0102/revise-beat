import {Platform} from 'react-native';

const productionAndroid = 'http://myapp.com/';
const productionIOS = 'http://myapp.com';
const mode = {
  developement: 'http://192.168.10.87:8001/',
  QA: 'http://192.168.10.87:9001/',
  production: Platform.OS === 'android' ? productionAndroid : productionIOS,
};

const apiURL = 'revisebeat/api/v1';

const baseURL = mode.developement; //Change development mode

const API = {
  signup: baseURL + apiURL + '/signup',
};

export default API;
