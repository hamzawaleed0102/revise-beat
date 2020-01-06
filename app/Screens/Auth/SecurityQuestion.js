import React from 'react';
import {View, Text, Modal, TextInput} from 'react-native';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/documents.styles';

const SecurityQuestion = ({
  modalVisible,
  onTextChange,
  handleSecurityVerification,
  user = {},
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.overlay} />
      <View style={styles.modelContainer}>
        <Text style={styles.modelHeading}>Security Question</Text>
        <Text style={styles.modelSubheading}>
          Please answer this question before accessing sensitive information
        </Text>
        <Text style={styles.question}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Q: </Text>
          {user.security_question}
        </Text>
        <TextInput
          onChangeText={val => onTextChange(val)}
          style={ApplicationStyles.textbox}
          numberOfLines={1}
          placeholder="Enter an answer"
        />
        <PrimaryButton
          onPress={handleSecurityVerification}
          title="Continue"
          marginTop={20}
        />
      </View>
    </Modal>
  );
};

export default SecurityQuestion;
