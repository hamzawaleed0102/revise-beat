import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import styles from '../../Styles/voiceOptions.styles';
export default class VoiceOptions extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Voice Options" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.redCard}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Voices')}>
            <Image
              source={require('../../../assets/icons/voiceOptions/voiceprint-fill.png')}
              style={styles.icon}
            />
            <Text style={styles.iconLabel}> Voices </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.redCard}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('VoiceTuner')}>
            <Image
              source={require('../../../assets/icons/voiceOptions/equalizer-line.png')}
              style={styles.icon}
            />
            <Text style={styles.iconLabel}> Voice Tuner </Text>
          </TouchableOpacity>
        </View>
      </TopHeader>
    );
  }
}
