/* eslint-disable handle-callback-err */
import React from 'react';
import {Text, Alert, Image, TouchableOpacity} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form, Icon, View} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import Axios from 'axios';
import API from '../../Constants/API';
import store from '../../Redux/STORE';
import {setLoadingState} from '../../Redux/actions/userAction';
import {withSignup} from '../../Redux/hoc/withSignup';
import COLORS from '../../Theme/Colors';
import authStyles from '../../Styles/auth.styles';
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: '',
        confirmPassword: '',
      },
      errors: ['email'],
      isPasswordFieldSecure: true,
      isConfirmPasswordFieldSecure: true,
    };
  }

  onSubmit = () => {
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        store.dispatch(setLoadingState({name: 'updatingPassword'}));
        Axios.post(API.updatePassword, {
          email: this.props.navigation.getParam('email'),
          newPassword: this.state.formData.password,
        })
          .then(res => {
            this.props.navigation.navigate('Home');
          })
          .catch(err => {
            console.log('err', err);
            Alert.alert('Failed', 'Unable to update password. Please retry');
          })
          .finally(() => store.dispatch(setLoadingState({})));
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
    return (
      <TopHeader showIcons={false}>
        <Header title="Reset Your Password" hideBack />
        <Content>
          <Form style={styles.form}>
            <Text style={styles.topLabel}>
              Choose a strong new password. Make sure it includes a number and a
              capital letter
            </Text>

            <View style={authStyles.passwordFieldContainer}>
              <Input
                placeholder="New Password"
                secureTextEntry={this.state.isPasswordFieldSecure}
                maxLength={16}
                style={ApplicationStyles.textbox}
                onChangeText={password =>
                  this.onTextInput('password', password)
                }
              />

              <TouchableOpacity
                style={authStyles.eyeIcon}
                onPress={() =>
                  this.setState({
                    isPasswordFieldSecure: !this.state.isPasswordFieldSecure,
                  })
                }>
                {!this.state.isPasswordFieldSecure && (
                  <Icon
                    name="eye"
                    style={{fontSize: 18, color: COLORS.primary}}
                  />
                )}
                {this.state.isPasswordFieldSecure && (
                  <Image
                    source={require('../../../assets/icons/forms/eye-close-fill.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {ErrorLabel('password', this.state.errors)}
            <View style={styles.passwordFieldContainer}>
              <Input
                placeholder="Confirm Password"
                secureTextEntry={this.state.isConfirmPasswordFieldSecure}
                maxLength={16}
                style={[ApplicationStyles.textbox]}
                onChangeText={confirmPassword =>
                  this.onTextInput('confirmPassword', confirmPassword)
                }
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() =>
                  this.setState({
                    isConfirmPasswordFieldSecure: !this.state
                      .isConfirmPasswordFieldSecure,
                  })
                }>
                {!this.state.isConfirmPasswordFieldSecure && (
                  <Icon
                    name="eye"
                    style={{fontSize: 18, color: COLORS.primary}}
                  />
                )}
                {this.state.isConfirmPasswordFieldSecure && (
                  <Image
                    source={require('../../../assets/icons/forms/eye-close-fill.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {ErrorLabel('confirmPassword', this.state.errors)}
            <PrimaryButton
              title="Continue"
              marginTop={5}
              onPress={this.onSubmit}
              loading={this.props.loading.name === 'updatingPassword'}
            />
          </Form>
        </Content>
        <WideBanner />
      </TopHeader>
    );
  }
}
export default withSignup(ResetPassword);
