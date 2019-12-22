import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
export default class ResetPassword extends React.Component {
  handleContinueBtn = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <TopHeader showIcons={false}>
        <Header title="Reset Your Password" />
        <Content>
          <Content>
            <Form style={styles.form}>
              <Text style={styles.topLabel}>
                Choose a strong new password. Make sure it includes a number and
                a capital letter
              </Text>
              <Input
                placeholder="New Password"
                style={[ApplicationStyles.textbox, {marginTop: '15%'}]}
                onChangeText={val => this.onTextInput('username', val)}
              />
              <Input
                placeholder="Confirm Password"
                style={[ApplicationStyles.textbox]}
                onChangeText={val => this.onTextInput('username', val)}
              />

              <PrimaryButton
                title="Continue"
                marginTop="40%"
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
