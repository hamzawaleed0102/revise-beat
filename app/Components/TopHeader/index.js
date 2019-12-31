/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Metrics, Colors} from '../../Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
const TopHeader = ({children, showIcons = true}) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View style={styles.circle} />
        <View
          style={[
            styles.innerContainer,
            {justifyContent: showIcons ? 'space-between' : 'center'},
          ]}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            {showIcons && (
              <Image
                source={require('../../../assets/icons/header/settings-5-fill.png')}
              />
            )}
          </View>
          <View style={{flex: 3, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.rightIconsContainer}>
            {showIcons && (
              <>
                <TouchableOpacity style={styles.userIcon}>
                  <Image
                    source={require('../../../assets/icons/header/user-fill.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/icons/header/share-fill.png')}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContainer: {
    height: Metrics.screenHeight * 0.14,
    backgroundColor: Colors.primary,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  logo: {},
  circle: {
    backgroundColor: 'white',
    height: 1400,
    bottom: 0,
    width: 1400,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 700,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    paddingRight: 20,
  },
});
export default TopHeader;
