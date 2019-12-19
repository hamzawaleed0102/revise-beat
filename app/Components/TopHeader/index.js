import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Metrics, Colors} from '../../Theme';
import {Icon} from 'native-base';
import IMAGES from '../../Theme/Images';
const TopHeader = ({children, showIcons = true}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.circle} />
        <View
          style={[
            styles.innerContainer,
            {justifyContent: showIcons ? 'space-between' : 'center'},
          ]}>
          {showIcons && <Icon name="home" />}
          <Image source={IMAGES.logo} style={styles.logo} />
          {showIcons && (
            <View style={styles.rightIconsContainer}>
              <Icon name="favorite" />
              <Icon name="favorite" />
            </View>
          )}
        </View>
      </View>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight * 0.12,
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
  logo: {
    // width: '60%',
    height: 65,
    resizeMode: 'contain',
  },
  circle: {
    backgroundColor: 'white',
    height: Metrics.screenHeight * 1.7,
    bottom: 0,
    width: Metrics.screenWidth * 3.4,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 1000,
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
});
export default TopHeader;
