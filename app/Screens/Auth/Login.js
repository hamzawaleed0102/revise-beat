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
    console.log('this.state.formData', this.state.formData);
    const isBtnDisabled = this.isBtnDisabled();
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign In" />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Email/Username"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('fullName', val)}
            />
            <Input
              placeholder="Password"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('username', val)}
            />
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </TouchableOpacity>
            <PrimaryButton
              title="Sign In"
              disabled={isBtnDisabled}
              onPress={() => this.props.navigation.navigate('Verification')}
              marginTop="60%"
            />

            <Text style={styles.alreadyAccountLabel}>
              Don't have an account?{' '}
              <Text
                style={styles.redText}
                onPress={() => this.props.navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
            <WideBanner />
          </Form>
        </Content>
      </TopHeader>
    );
  }
}
