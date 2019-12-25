import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../Theme';
import {Icon} from 'native-base';
import {withNavigation} from 'react-navigation';

const Header = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => navigation.goBack(null)}>
        <Icon name="back" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  left: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    flex: 3,
  },
  right: {
    flex: 1,
  },
});
export default withNavigation(Header);
