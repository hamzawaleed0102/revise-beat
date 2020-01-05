import React, {Component} from 'react';
import {Text, LayoutAnimation} from 'react-native';
import TopHeader from '../../Components/TopHeader';
import Header from '../../Components/Header';
import {Content, Form, Input} from 'native-base';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/auth.styles';
import WideBanner from '../../Components/Ads/WideBanner';
import {GetSignupErrors} from '../../Helpers/GetErrors';
import ErrorLabel from '../../Components/ErrorLabel/ErrorLabel';
import {withSignup} from '../../Redux/hoc/withSignup';
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        roleId: 1,
        security_question_id: 1,
        security_question_answer: 'answer',
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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({errors: GetSignupErrors(this.state.formData)}, () => {
      if (this.state.errors.length === 0) {
        this.props.signupUser(this.state.formData);
      }
    });
  };

  render() {
    console.log('this.props in signup', this.props);
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
              value={this.state.formData.userName}
              onChangeText={val => this.onTextInput('userName', val)}
            />
            {ErrorLabel('userName', this.state.errors)}
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
              loading={this.props.loading.name === 'signup'}
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
export default withSignup(Signup);
