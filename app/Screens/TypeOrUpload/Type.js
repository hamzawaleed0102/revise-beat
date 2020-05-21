import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import styles from '../../Styles/type.styles';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import {ApplicationStyles} from '../../Theme';
export default class Type extends Component {
  state = {
    modalVisible: false,
  };

  toggleModel = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    return (
      <TopHeader>
        <Header title="Type" />
        <KeyboardAvoidingView style={styles.container}>
          <TextInput
            style={styles.textfield}
            multiline={true}
            numberOfLines={8}
            placeholder="Type something"
            textAlignVertical="top"
            maxLength={1500}
          />
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={this.toggleModel}>
            <View style={styles.overlay} />
            <View style={styles.modelContainer}>
              <Text style={styles.modelHeading}>Add File Name</Text>
              <TextInput
                style={ApplicationStyles.textbox}
                numberOfLines={1}
                placeholder="File Name"
              />
              <PrimaryButton onPress={this.toggleModel} title="Save" />
            </View>
          </Modal>
          <PrimaryButton title="Continue" onPress={this.toggleModel} />
        </KeyboardAvoidingView>
      </TopHeader>
    );
  }
}
