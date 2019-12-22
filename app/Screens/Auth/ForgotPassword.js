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
  handleContinueBtn = () => {
    this.props.navigation.navigate('Verification', {type: 'ForgotPassword'});
  };

  render() {
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
                style={[ApplicationStyles.textbox, {marginTop: '15%'}]}
                onChangeText={val => this.onTextInput('username', val)}
              />

              <PrimaryButton
                title="Continue"
                marginTop="60%"
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
