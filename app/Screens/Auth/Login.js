import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';
import TopHeader from '../../Components/TopHeader';
import Header from '../../Components/Header';
import {Content, Form, Item, Input, Icon, Spinner} from 'native-base';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/auth.styles';
import WideBanner from '../../Components/Ads/WideBanner';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import {connect} from 'react-redux';
import COLORS from '../../Theme/Colors';
import SecurityQuestion from './SecurityQuestion';
import {withSignup} from '../../Redux/hoc/withSignup';
import AsyncStorage from '@react-native-community/async-storage';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {userNameOrEmail: '', loginPassword: ''},
      errors: ['errors'],
      hidePassword: true,
      modalVisible: false,
      inputSecurityAnswer: '',
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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        this.props.loginUser(this.state.formData);
      }
    });
  };

  handleSecurityVerification = () => {
    const {inputSecurityAnswer} = this.state;
    if (this.props.user.security_question_answer === inputSecurityAnswer) {
      AsyncStorage.setItem('user', JSON.stringify(this.props.user)).then(() =>
        this.props.navigation.navigate('App'),
      );
    } else {
      Alert.alert('Oops', 'Invalid security answer');
    }
  };

  render() {
    console.log('this.props.user in login', this.props.user);
    console.log('this.state.errors in login', this.state.errors);
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign In" hideBack />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Email/Username"
              keyboardType="default"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('userNameOrEmail', val)}
            />
            {ErrorLabel('userNameOrEmail', this.state.errors)}
            <View style={styles.passwordFieldContainer}>
              <Input
                placeholder="Password"
                secureTextEntry={this.state.hidePassword}
                style={ApplicationStyles.textbox}
                onChangeText={val => this.onTextInput('loginPassword', val)}
                maxLength={16}
              />

              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() =>
                  this.setState({hidePassword: !this.state.hidePassword})
                }>
                {!this.state.hidePassword && (
                  <Icon
                    name="eye"
                    style={{fontSize: 18, color: COLORS.primary}}
                  />
                )}
                {this.state.hidePassword && (
                  <Image
                    source={require('../../../assets/icons/forms/eye-close-fill.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
            {ErrorLabel('loginPassword', this.state.errors)}
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </TouchableOpacity>

            <PrimaryButton
              title="Sign In"
              onPress={this.onSubmit}
              marginTop={4.1}
              loading={this.props.loading.name === 'login'}
            />

            <Text style={styles.alreadyAccountLabel}>
              Don't have an account?{' '}
              <Text
                style={styles.redText}
                onPress={() => this.props.navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
          </Form>
        </Content>
        <WideBanner />
        <SecurityQuestion
          // only visible in login case
          modalVisible={
            this.props.user.email_verified === 1 &&
            this.props.user.subscription_plan_id != null
          }
          user={this.props.user}
          handleSecurityVerification={this.handleSecurityVerification}
          onTextChange={inputSecurityAnswer =>
            this.setState({inputSecurityAnswer})
          }
        />
      </TopHeader>
    );
  }
}

export default withSignup(Login);
