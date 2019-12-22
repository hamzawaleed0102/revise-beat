import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
export default class Playlist extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Playlist" />
        <View>
          <Text> Playlist </Text>
        </View>
      </TopHeader>
    );
  }
}
