import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import store from '../../Redux/STORE';
import {loginUserAct} from '../../Redux/actions/userAction';
import AsyncStorage from '@react-native-community/async-storage';
export default class HomeScreen extends Component {
  async componentDidMount() {
    AsyncStorage.clear();
    let user = await AsyncStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      console.log('user found in localstorage', user);
      store.dispatch(loginUserAct(user));
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          source={require('../../../assets/splash.png')}
          style={{height: '100%', width: undefined}}
          resizeMode="cover"
        />
      </View>
    );
  }
}
