import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import COLORS from '../../Theme/Colors';
import {Icon} from 'native-base';

const FAB = ({onPress, type}) => {
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={require('../../../assets/icons/documents/add-line.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 60,
  },
  icon: {
    color: 'white',
    fontSize: 18,
  },
});

export default FAB;
