import React, {Component} from 'react';
import {Text, View, Image, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';
export default class HomeScreen extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);

    // let user = await AsyncStorage.getItem('User');
    // this.dispatchCartItemsCount();
    // if (user) {
    //   user = JSON.parse(user);
    //   store.dispatch({
    //     type: 'SET_LANG_AND_USE R',
    //     user: user,
    //   });
    //   this.props.navigation.navigate('App');
    // } else {
    //   this.props.navigation.navigate('Auth');
    // }
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
