import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
import Axios from 'axios';
import API from '../../Constants/API';
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {email: ''},
    };
  }

  handleContinueBtn = () => {
    Axios.post(API.sendVerificationCode, {to: this.state.formData.email})
      .then(res => {
        this.props.navigation.navigate('Verification', {
          verificationCode: res.data.data.code,
          type: 'ResetPassword',
        });
      })
      .catch(e =>
        Alert.alert(
          'Error',
          'Unable to send verification emaili, Please retry later.',
        ),
      );
  };

  render() {
    const isBtnDisabled = this.state.formData.email.trim() === '';
    return (
      <TopHeader showIcons={false}>
        <Header title="Reset Your Password" />
        <Content>
          <Content>
            <Form style={styles.form}>
              <Text style={styles.topLabel}>
                Please enter your email address below to reset your password!
              </Text>
              <Input
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.formData.email}
                style={[ApplicationStyles.textbox, {marginTop: '15%'}]}
                onChangeText={email => this.setState({formData: {email}})}
              />

              <PrimaryButton
                title="Continue"
                marginTop={6}
                disabled={isBtnDisabled}
                onPress={this.handleContinueBtn}
              />
            </Form>
            <WideBanner />
          </Content>
        </Content>
      </TopHeader>
    );
  }
}
