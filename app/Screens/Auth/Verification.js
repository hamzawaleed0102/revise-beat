import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CodeInput from 'react-native-confirmation-code-field';
import styles from '../../Styles/verification.styles.js';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Container} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import CountdownCircle from 'react-native-countdown-circle';
import COLORS from '../../Theme/Colors.js';

export default class Verification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      resendDisabled: false,
      resendTime: 60,
    };
  }

  onCodeInput = code => {
    this.setState({userInput: code});
  };

  verifyCode = () => {
    if (this.state.userInput === '1234') {
      const type = this.props.navigation.getParam('type');
      if (type === 'ForgotPassword') {
        this.props.navigation.navigate('ResetPassword');
      } else {
        this.props.navigation.navigate('Packages');
      }
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

  resendCode = () => {
    // API to send code.
    this.setState({resendTime: 60});
  };
  containerProps = {style: styles.inputWrapStyle};

  colors = ['#ff595f', '#e42959'];

  render() {
    return (
      <TopHeader showIcons={false}>
        <Header title="Verify Your Email" />
        <Content>
          <View style={styles.container}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputSubLabel}>
                Please enter the verification code that we just sent to your
                email
              </Text>
              <CodeInput
                blurOnSubmit={false}
                variant="clear"
                codeLength={4}
                keyboardType="numeric"
                cellProps={this.cellProps}
                containerProps={this.containerProps}
                onFulfill={this.onCodeInput}
              />
              <TouchableOpacity
                style={styles.resendBtn}
                onPress={this.resendCode}
                disabled={this.state.resendTime === 0 ? false : true}>
                <Text style={styles.resendText}>Resend Code</Text>
                {this.state.resendTime !== 0 && (
                  <CountdownCircle
                    seconds={this.state.resendTime}
                    radius={10}
                    borderWidth={2}
                    color="gray"
                    bgColor="#fff"
                    textStyle={{fontSize: 10}}
                    onTimeElapsed={() => this.setState({resendTime: 0})}
                  />
                )}
              </TouchableOpacity>

              <PrimaryButton
                title="Verify"
                marginTop={40}
                onPress={this.verifyCode}
              />
            </View>
            <WideBanner />
          </View>
        </Content>
      </TopHeader>
    );
  }
}
