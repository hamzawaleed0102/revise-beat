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
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import {GetSignupErrors} from '../../Helpers/GetErrors';
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {usernameEmail: '', password: ''},
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
        <Header title="Sign In" />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Email/Username"
              keyboardType="email-address"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('usernameEmail', val)}
            />
            {ErrorLabel('usernameEmail', this.state.errors)}
            <Input
              placeholder="Password"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('password', val)}
            />
            {ErrorLabel('password', this.state.errors)}
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </TouchableOpacity>
            <PrimaryButton
              title="Sign In"
              onPress={this.onSubmit}
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
