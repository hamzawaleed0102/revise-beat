import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Slider} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import styles from '../../Styles/player.styles';
import {Content} from 'native-base';
import COLORS from '../../Theme/Colors';
import {Metrics} from '../../Theme';
import WideBanner from '../../Components/Ads/WideBanner';
export default class Player extends Component {
  render() {
    return (
      <TopHeader>
        <Header title="Type or Upload Document" hideBack />
        <View style={styles.container}>
          <WideBanner />
          <Content contentContainerStyle={styles.notesContainer}>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </Text>
          </Content>
          <TouchableOpacity
            style={styles.downloadBtn}
            // onPress={onPress}
            activeOpacity={0.8}>
            <Image
              source={require('../../../assets/icons/player/download-line.png')}
            />
          </TouchableOpacity>

          <View style={styles.sliderTimestampContainer}>
            <Slider
              minimumTrackTintColor={COLORS.primary}
              thumbTintColor={COLORS.primary}
            />
            <View style={styles.timestampContainer}>
              <Text>05:51</Text>
              <Text>02:51</Text>
            </View>
          </View>

          <View style={styles.controlsContainer}>
            <View style={styles.leftControls}>
              <Image
                source={require('../../../assets/icons/player/shuffle-fill.png')}
              />
            </View>
            <View style={styles.centerControls}>
              <Image
                source={require('../../../assets/icons/player/skip-back-line.png')}
              />
              <Image
                source={require('../../../assets/icons/player/pause-fill.png')}
              />
              <Image
                source={require('../../../assets/icons/player/skip-forward-line.png')}
              />
            </View>
            <View style={styles.rightControls}>
              <Image
                source={require('../../../assets/icons/player/repeat-one-fill.png')}
              />
            </View>
          </View>
        </View>
      </TopHeader>
    );
  }
}
