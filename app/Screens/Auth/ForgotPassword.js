import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../Styles/auth.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton.js';
import {Content, Input, Form} from 'native-base';
import WideBanner from '../../Components/Ads/WideBanner.js';
import TopHeader from '../../Components/TopHeader/index.js';
import Header from '../../Components/Header/index.js';
import {ApplicationStyles} from '../../Theme/index.js';
import Axios from 'axios';
import API from '../../Constants/API';
import {withSignup} from '../../Redux/hoc/withSignup';
import store from '../../Redux/STORE';
import {setLoadingState} from '../../Redux/actions/userAction';
import {checkEmail} from '../../Helpers/Validations';
class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {email: ''},
    };
  }

  handleContinueBtn = () => {
    store.dispatch(setLoadingState({name: 'sendingEmail'}));
    Axios.post(API.sendVerificationCode, {to: this.state.formData.email})
      .then(res => {
        this.props.navigation.navigate('Verification', {
          verificationCode: res.data.data.code,
          type: 'ResetPassword',
          email: this.state.formData.email,
        });
      })
      .catch(e =>
        Alert.alert(
          'Error',
          'Unable to send verification email, Please retry later.',
        ),
      )
      .finally(() => store.dispatch(setLoadingState({})));
  };

  render() {
    const isBtnDisabled = !checkEmail(this.state.formData.email);
    return (
      <TopHeader showIcons={false}>
        <Header title="Reset Your Password" />
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
              marginTop={6}
              disabled={isBtnDisabled}
              loading={this.props.loading.name === 'sendingEmail'}
              onPress={this.handleContinueBtn}
            />
          </Form>
        </Content>
        <WideBanner />
      </TopHeader>
    );
  }
}
export default withSignup(ForgotPassword);
