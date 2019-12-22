import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
export default class Player extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Player" />
        <View>
          <Text> Player </Text>
        </View>
      </TopHeader>
    );
  }
}
