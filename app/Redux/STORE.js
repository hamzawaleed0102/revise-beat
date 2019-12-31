import {createStore} from 'redux';

import userReducer from './reducers/userReducer';

// combine reducers
const STORE = createStore(userReducer);
export default STORE;
