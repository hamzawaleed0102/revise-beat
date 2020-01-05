import {
  SET_LOADING_STATE,
  LOGOUT_USER,
  LOGIN_USER,
} from '../constants/userConstants';
import {Platform, Alert} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../Constants/API';
import NavigationService from '../../../NavigationService';

export const setLoadingState = loading => ({
  type: SET_LOADING_STATE,
  loading,
});
export const loginUserAct = user => ({
  type: LOGIN_USER,
  user: user,
});
export const logoutUserAct = () => ({
  type: LOGOUT_USER,
});

const setTokenInHeaders = async token => {
  Axios.defaults.headers.common.Authorization = `${token}`;
};

const signupUser = formData => {
  return dispatch => {
    dispatch(setLoadingState({name: 'signup'}));
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    Axios.post(API.signup, formDataObj)
      .then(data => {
        let userData = data.data.data;
        console.log('userData', userData);
        console.log('dispatched');
        setTokenInHeaders(userData.token);
        AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
          dispatch(loginUserAct(userData));
          NavigationService.navigate('Verification', {
            verificationCode: userData.verificationCode,
            type: 'Signup',
          });
        });
      })
      .catch(err => {
        Alert.alert('Failed', err.response.data.message);
        console.log('CATCH IN SIGNUP--', err.response.data.message);
        // Alert.alert('Oops!', err);
      })
      .finally(() => dispatch(setLoadingState({})));
  };
};

const updateUser = (formData, type) => {
  return dispatch => {
    console.log('type in updateUser', type);
    dispatch(setLoadingState({name: 'Signup'}));
    Axios.put(API.update + formData.user_id, formData).then(data => {
      let userData = data.data.data;
      console.log('userData in update', userData);
      setTokenInHeaders(userData.token);
      AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
        dispatch(loginUserAct(userData));
        if (type === 'Signup') {
          NavigationService.navigate('Packages');
        } else {
          NavigationService.navigate('ResetPassword');
        }
      });
    });
    // Axios({
    //   method: 'put',
    //   url: API.update + formData.user_id,
    //   headers: {
    //     'content-type': 'application/json',
    //     Authorization: Axios.defaults.headers.common.Authorization,
    //   },
    //   data: {verifyEmail: true},
    // })
    //   .catch(err => {
    //     console.log('CATCH IN update--', err);
    //   })
    //   .finally(() => dispatch(setLoadingState({})));
  };
};

const verifyEmail = (userID, type) => {
  console.log('type', type);
  return dispatch => {
    dispatch(setLoadingState({name: 'Verification'}));
    Axios.put(
      API.update + userID,
      {verifyEmail: true},
      {headers: {'content-type': 'application/json'}},
    )
      .then(data => {
        let userData = data.data.data;
        console.log('userData in update', userData);
        setTokenInHeaders(userData.token);
        AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
          dispatch(loginUserAct(userData));
          if (type === 'Signup') {
            NavigationService.navigate('Packages');
          }
        });
      })
      .catch(err => {
        console.log('CATCH IN verify email--', err);
      })
      .finally(() => dispatch(setLoadingState({})));
  };
};

const loginUser = formData => {
  return dispatch => {
    dispatch(setLoadingState({name: 'login'}));
    Axios.post(API.login, {
      userName: formData.userNameOrEmail,
      password: formData.password,
    })
      .then(data => {
        let userData = data.data.data;
        console.log('userData after login', userData);
        dispatch(loginUserAct(userData));
        console.log('dispatched');
        setTokenInHeaders(userData.token);
        AsyncStorage.setItem('user', JSON.stringify(userData)).then(() =>
          dispatch(loginUserAct(userData)),
        );
      })
      .catch(err => {
        Alert.alert('Failed', err.response.data.message);
      })
      .finally(() => dispatch(setLoadingState({})));
  };
};

const logoutUser = (formData, navigation) => {
  return dispatch => {
    dispatch(setLoadingState('Logout'));
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    Axios.get(API.logout, formDataObj)
      .then(() => {
        AsyncStorage.removeItem('user').then(() => dispatch(logoutUserAct()));
        navigation.navigate('News');
      })
      .catch(err => {
        console.log('ERORRR in logout', err);
        Alert.alert('Oops!', err);
      });
  };
};
export {signupUser, updateUser, loginUser, logoutUser, verifyEmail};
