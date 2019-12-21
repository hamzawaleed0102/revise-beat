import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CodeInput from 'react-native-confirmation-code-field';
import styles from '../../Styles/verification.styles.js';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Container, Row} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Metrics} from '../../Theme/index.js';
import COLORS from '../../Theme/Colors.js';

export default class RedExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      packages: [
        {
          type: 'Standard Package',
          list: [
            {
              name: '01 months',
              price: '100 $',
            },
            {
              name: '01 months',
              price: '100 $',
            },
            {
              name: '01 months',
              price: '100 $',
            },
          ],
        },
        {
          type: 'Premium Pck',
          list: [
            {
              name: '01 months',
              price: '100 $',
            },
            {
              name: '01 months',
              price: '100 $',
            },
            {
              name: '01 months',
              price: '100 $',
            },
          ],
        },
      ],
    };
  }

  onCodeInput = code => {
    this.setState({userInput: code});
  };

  verifyCode = () => {
    if (this.state.userInput === '1234') {
      this.props.navigation.navigate('Packages');
    } else {
      return Alert.alert('Oops!', 'Invalid code!', [{text: 'OK'}], {
        cancelable: false,
      });
    }
  };

  cellProps = ({/*index, isFocused,*/ hasValue}) => {
    if (hasValue) {
      return {
        style: [styles.input, styles.inputNotEmpty],
      };
    }
    return {
      style: styles.input,
    };
  };

  containerProps = {style: styles.inputWrapStyle};

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.type}</Text>
        <View style={styles.row}>
          {item.list.map(pkg => (
            <View style={styles.card}>
              <Text style={styles.name}>{pkg.name}</Text>
              <Text style={styles.price}>{pkg.price}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };
  get pagination() {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={this.state.packages.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }
  render() {
    return (
      <TopHeader showIcons={false}>
        <Header title="Choose a Plan" />
        <Content>
          <View style={styles.container}>
            <Text style={styles.inputSubLabel}>
              Choose a package to continue.
            </Text>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={this.state.packages}
              onSnapToItem={activeSlide => this.setState({activeSlide})}
              renderItem={this._renderItem}
              sliderWidth={Metrics.screenWidth - 30}
              itemWidth={Metrics.screenWidth - 30}
            />
            {this.pagination}
            <PrimaryButton
              title="Continue"
              marginTop={40}
              onPress={this.verifyCode}
            />
            <TouchableOpacity style={styles.trialBtn}>
              <Text>Enjoy 07 Days of Free Trial</Text>
            </TouchableOpacity>
            <WideBanner />
          </View>
        </Content>
      </TopHeader>
    );
  }
}
