import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import TopHeader from '../../Components/TopHeader';
import Header from '../../Components/Header';
import {Content, Form, Item, Input, Icon} from 'native-base';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/auth.styles';
import WideBanner from '../../Components/Ads/WideBanner';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import {connect} from 'react-redux';
import COLORS from '../../Theme/Colors';
import SecurityQuestion from './SecurityQuestion';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {email: 'asd@mm.m', password: '123'},
      user: {
        securityQuestion: 'What is your favorite food?',
        securityAnswer: 'hello',
      },
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
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        // send login request
        //  this.setState({user})
        this.setState({modalVisible: true});
      }
    });
  };

  handleSecurityVerification = () => {
    const {user, inputSecurityAnswer} = this.state;
    if (user.securityAnswer === inputSecurityAnswer) {
      // dispatch redux action
      this.props.navigation.navigate('App');
    } else {
      Alert.alert('Oops', 'Invalid security answer');
    }
  };
  render() {
    console.log(
      'this.props.inputSecurityAnswer',
      this.state.inputSecurityAnswer,
    );
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign In" hideBack />
        <Content>
          <Form style={styles.form}>
            <Input
              placeholder="Email/Username"
              keyboardType="email-address"
              style={ApplicationStyles.textbox}
              onChangeText={val => this.onTextInput('email', val)}
            />
            {ErrorLabel('email', this.state.errors)}
            <View style={styles.passwordFieldContainer}>
              <Input
                placeholder="Password"
                secureTextEntry={this.state.hidePassword}
                style={ApplicationStyles.textbox}
                onChangeText={val => this.onTextInput('password', val)}
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
        <SecurityQuestion
          modalVisible={this.state.modalVisible}
          user={this.state.user}
          handleSecurityVerification={this.handleSecurityVerification}
          onTextChange={inputSecurityAnswer =>
            this.setState({inputSecurityAnswer})
          }
        />
      </TopHeader>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Login);
