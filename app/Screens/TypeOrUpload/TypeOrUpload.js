import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import styles from '../../Styles/voiceOptions.styles';
export default class TypeOrUpload extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Type or Upload Document" hideBack />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.redCard}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Type')}>
            <Image
              source={require('../../../assets/icons/typeOrUpload/keyboard-box-line.png')}
              style={styles.icon}
            />
            <Text style={styles.iconLabel}> Type </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.redCard}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Upload')}>
            <Image
              source={require('../../../assets/icons/typeOrUpload/upload-cloud-line.png')}
              style={styles.icon}
            />
            <Text style={styles.iconLabel}> Upload </Text>
          </TouchableOpacity>
        </View>
      </TopHeader>
    );
  }
}
