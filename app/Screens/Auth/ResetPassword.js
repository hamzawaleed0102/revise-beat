/* eslint-disable handle-callback-err */
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
import store from '../../Redux/STORE';
import {setLoadingState} from '../../Redux/actions/userAction';
import {withSignup} from '../../Redux/hoc/withSignup';
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: '',
        confirmPassword: '',
      },
      errors: ['email'],
    };
  }

  onSubmit = () => {
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        store.dispatch(setLoadingState({name: 'updatingPassword'}));
        console.log('emailllllllll', this.props.navigation.getParam('email'));
        console.log(
          'this.state.formData.password',
          this.state.formData.password,
        );
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
            <Input
              placeholder="New Password"
              secureTextEntry={true}
              maxLength={16}
              style={[ApplicationStyles.textbox, {marginTop: 50}]}
              onChangeText={password => this.onTextInput('password', password)}
            />
            {ErrorLabel('password', this.state.errors)}
            <Input
              placeholder="Confirm Password"
              secureTextEntry={true}
              maxLength={16}
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
