import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
export default class TypeOrUpload extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Type or Upload Document" />
        <View>
          <Text> Type or Upload Document </Text>
        </View>
      </TopHeader>
    );
  }
}
