import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
export default class Genres extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Genres" />
        <View>
          <Text> Genres </Text>
        </View>
      </TopHeader>
    );
  }
}
