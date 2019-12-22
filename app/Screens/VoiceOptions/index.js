import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import IMAGES from '../../Theme/Images';
export default class VoiceOptions extends Component {
  render() {
    return (
      <TopHeader centerImg={IMAGES.logo}>
        <Header title="Voice Options" />
        <View>
          <Text> Voice Options </Text>
        </View>
      </TopHeader>
    );
  }
}
