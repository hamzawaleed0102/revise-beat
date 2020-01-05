/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/verification.styles.js';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Metrics} from '../../Theme/index.js';
import COLORS from '../../Theme/Colors.js';
import Axios from 'axios';
import API from '../../Constants/API.js';
import {withSignup} from '../../Redux/hoc/withSignup.js';
import store from '../../Redux/STORE.js';
import {loginUserAct} from '../../Redux/actions/userAction.js';

class Packages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      selectedPackage: 1,
      packages: [],
    };
  }

  componentDidMount() {
    Axios.get(API.getAllSubscriptions).then(res => {
      console.log('res in packages', res);
      let standardPkgs = [];
      let premiumPkgs = [];
      res.data.data.filter(pkg =>
        pkg.subscription_plan_type === 'Standard Package'
          ? standardPkgs.push(pkg)
          : premiumPkgs.push(pkg),
      );
      console.log('staa', standardPkgs);
      this.setState({packages: [standardPkgs, premiumPkgs]});
    });
  }

  onCodeInput = code => {
    this.setState({userInput: code});
  };

  verifyCode = () => {
    this.props.navigation.navigate('Home');
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

  updatePackage = () => {
    Axios.post(API.subscribePlan, {
      user_id: this.props.user.user_id,
      subscriptionPlanId: this.state.selectedPackage,
    })
      .then(res => {
        console.warn(res);
        store.dispatch(loginUserAct(res));
        if (this.props.navigation.state.routeName === 'Packages') {
          this.props.navigation.navigate('App');
        } else {
          // if UpdatePackage route. then nav to home
        }
      })
      .catch(e => alert(e.response.data.message));
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>
          {index === 0 ? 'Standard Package' : 'Premium Package'}
        </Text>
        {index === 1 ? (
          <Text style={styles.subtitle}>Removes all the ads</Text>
        ) : (
          <Text style={styles.subtitle} />
        )}
        <View style={styles.row}>
          {item.map(pkg => (
            <TouchableOpacity
              style={[
                styles.card,
                {
                  borderWidth:
                    this.state.selectedPackage === pkg.subscription_plan_id
                      ? 1
                      : 1,
                  borderColor:
                    this.state.selectedPackage === pkg.subscription_plan_id
                      ? COLORS.primary
                      : 'white',
                },
              ]}
              activeOpacity={0.8}
              onPress={() =>
                this.setState({selectedPackage: pkg.subscription_plan_id})
              }>
              <Text style={styles.name}>
                {pkg.subscription_plan_name + '\n'} for
              </Text>
              <Text style={styles.price}>{pkg.subscription_plan_price}</Text>
            </TouchableOpacity>
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
    console.log('this.props.user in packages', this.props.user);
    return (
      <TopHeader showIcons={false}>
        <Header title="Choose a Plan" />
        <Content>
          <View style={styles.container}>
            <Text style={styles.inputSubLabel}>
              Share the app to get 07 Days Trial. Choose a package to continue
              after 07 Days.
            </Text>
            <Carousel
              inactiveSlideOpacity={1}
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
              onPress={this.updatePackage}
            />
            <TouchableOpacity style={styles.trialBtn}>
              <Text style={styles.trialTxt}>Enjoy 07 Days of Free Trial</Text>
            </TouchableOpacity>
            <WideBanner />
          </View>
        </Content>
      </TopHeader>
    );
  }
}

export default withSignup(Packages);
