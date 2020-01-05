import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import Axios from 'axios';
import API from '../../Constants/API';
export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: '',
        confirmPassword: '',
      },
      errors: ['errors'],
    };
  }

  onSubmit = () => {
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        Axios.post(API.updatePassword, {
          email: this.props.navigation.getParam('email'),
          newPassword: this.state.formData.password,
        })
          .then(res => {
            console.log('res in resetPassword', res);
          })
          .catch(err => {
            console.log('err in resetpasswrod catch', err.response);
          });
        // this.props.navigation.navigate('Home');
      }
    });
  };

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

  render() {
    console.log(
      'this.props.navigation.getParams',
      this.props.navigation.getParam('email'),
    );
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
                style={[ApplicationStyles.textbox, {marginTop: 5}]}
                onChangeText={password =>
                  this.onTextInput('password', password)
                }
              />
              {ErrorLabel('password', this.state.errors)}
              <Input
                placeholder="Confirm Password"
                style={[ApplicationStyles.textbox]}
                onChangeText={confirmPassword =>
                  this.onTextInput('confirmPassword', confirmPassword)
                }
              />
              {ErrorLabel('confirmPassword', this.state.errors)}
              <PrimaryButton
                title="Continue"
                marginTop={5}
                onPress={this.onSubmit}
              />
            </Form>
            <WideBanner />
          </Content>
        </Content>
      </TopHeader>
    );
  }
}
