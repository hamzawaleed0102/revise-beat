import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {email: ''},
    };
  }

  handleContinueBtn = () => {
    this.props.navigation.navigate('Verification', {type: 'ForgotPassword'});
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
                marginTop="60%"
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
