import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import COLORS from '../../Theme/Colors';
import {FONTSIZES} from '../../Theme/Fonts';
const PrimaryButton = ({title, onPress, marginTop = 10, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.touchable, {marginTop}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 33,
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: FONTSIZES.btnLabel,
  },
});
export default PrimaryButton;
