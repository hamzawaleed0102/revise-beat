import React, {Component} from 'react';
import {Text, View, Slider} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import WideBanner from '../../Components/Ads/WideBanner';
import {Content} from 'native-base';
import styles from '../../Styles/voicetuner.styles';
import COLORS from '../../Theme/Colors';
export default class VoiceTuner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 1,
    };
  }

  render() {
    return (
      <TopHeader>
        <Header title="Voice Tuner" />
        <View style={styles.container}>
          <Content>
            <Text style={styles.heading}>Tuner</Text>
            <View style={styles.innerContainer}>
              <View style={styles.leftCol}>
                <Text style={styles.percentLabel}>100%</Text>
                <Text style={styles.percentLabel}>80%</Text>
                <Text style={styles.percentLabel}>60%</Text>
                <Text style={styles.percentLabel}>40%</Text>
                <Text style={styles.percentLabel}>20%</Text>
                <Text style={styles.percentLabel}>10%</Text>
              </View>
              <View style={styles.col}>
                <Slider
                  step={0.2}
                  style={styles.slider}
                  minimumTrackTintColor={COLORS.primary}
                  thumbTintColor={COLORS.primary}
                />
              </View>
              <View style={styles.col}>
                <Slider
                  step={0.2}
                  style={styles.slider}
                  minimumTrackTintColor={COLORS.primary}
                  thumbTintColor={COLORS.primary}
                />
              </View>
              <View style={styles.col}>
                <Slider
                  step={0.2}
                  style={styles.slider}
                  minimumTrackTintColor={COLORS.primary}
                  thumbTintColor={COLORS.primary}
                />
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.leftCol} />
                <Text style={styles.bottomLabel}>Speed</Text>
                <Text style={styles.bottomLabel}>Pitch</Text>
                <Text style={styles.bottomLabel}>Volume</Text>
              </View>
            </View>
          </Content>
          <WideBanner />
        </View>
      </TopHeader>
    );
  }
}
