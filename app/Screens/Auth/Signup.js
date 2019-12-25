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
import {signupValidation} from '../../Constants/Strings';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errors: ['errors'],
    };
  }

  onTextInput = (key, val) => {
    this.setState({formData: {...this.state.formData, [key]: val}});
    // remove error
    const newErrors = this.state.errors;
    let errIndex = newErrors.indexOf(key);
    if (errIndex !== -1) {
      newErrors.splice(errIndex, 1);
      this.setState({errors: newErrors});
    }
  };

  onSubmit = () => {
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        this.props.navigation.navigate('Verification');
      }
    });
  };

  render() {
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign Up" />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Full Name"
              style={ApplicationStyles.textbox}
              value={this.state.formData.fullName}
              onChangeText={val => this.onTextInput('fullName', val)}
            />
            {ErrorLabel('fullName', this.state.errors)}
            <Input
              placeholder="Username"
              style={ApplicationStyles.textbox}
              value={this.state.formData.username}
              onChangeText={val => this.onTextInput('username', val)}
            />
            {ErrorLabel('username', this.state.errors)}
            <Input
              placeholder="Email"
              keyboardType="email-address"
              style={ApplicationStyles.textbox}
              value={this.state.formData.email}
              onChangeText={val => this.onTextInput('email', val)}
            />
            {ErrorLabel('email', this.state.errors)}
            <Input
              placeholder="Password"
              style={ApplicationStyles.textbox}
              value={this.state.formData.password}
              onChangeText={val => this.onTextInput('password', val)}
            />
            {ErrorLabel('password', this.state.errors)}
            <Input
              placeholder="Confirm Password"
              value={this.state.formData.confirmPassword}
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('confirmPassword', val)}
            />
            {ErrorLabel('confirmPassword', this.state.errors)}
            <PrimaryButton
              title="Sign Up"
              onPress={this.onSubmit}
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
