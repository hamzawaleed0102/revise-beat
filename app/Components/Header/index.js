import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../Theme';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
export default Header;
