import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TopHeader from '../../Components/TopHeader';
import Header from '../../Components/Header';
import {Content, Form, Item, Input} from 'native-base';
import {ApplicationStyles} from '../../Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/auth.styles';
import WideBanner from '../../Components/Ads/WideBanner';
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      errors: [],
    };
  }
  onTextInput = (key, val) => {
    this.setState({formData: {...this.state.formData, [key]: val}});
  };
  isBtnDisabled = () => {
    if (!this.state.formData.fullName) {
      return true;
    }
    return false;
  };
  render() {
    const isBtnDisabled = this.isBtnDisabled();
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign Up" />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Full Name"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('fullName', val)}
            />
            <Input
              placeholder="Username"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('username', val)}
            />
            <Input
              placeholder="Email"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('email', val)}
            />
            <Input
              placeholder="Password"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('password', val)}
            />
            <Input
              placeholder="Confirm Password"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('confirmPassword', val)}
            />
            <PrimaryButton
              title="Sign Up"
              opacity={isBtnDisabled ? 0.6 : 1}
              disabled={isBtnDisabled}
              onPress={() => this.props.navigation.navigate('Verification')}
              marginTop={50}
            />

            <Text style={styles.alreadyAccountLabel}>
              Already have an account ?{' '}
              <Text
                style={styles.redText}
                onPress={() => this.props.navigation.navigate('Login')}>
                Sign In
              </Text>
            </Text>
            <WideBanner />
          </Form>
        </Content>
      </TopHeader>
    );
  }
}
