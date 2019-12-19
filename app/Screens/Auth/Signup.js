import React, {Component} from 'react';
import {Text} from 'react-native';
import TopHeader from '../../Components/TopHeader';
import Header from '../../Components/Header';

export default class Signup extends Component {
  render() {
    return (
      <TopHeader showIcons={false}>
        <Header title="Sign Up" />
      </TopHeader>
    );
  }
}
