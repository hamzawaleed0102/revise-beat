import React from 'react';
import {View, Text, Modal, TextInput} from 'react-native';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/documents.styles';

const EditModel = ({addToLibrary, modalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={addToLibrary}>
      <View style={styles.overlay} />
      <View style={styles.modelContainer}>
        <Text style={styles.modelHeading}>Add this file to library</Text>
        <Text style={styles.modelSubheading}>
          Give your document a name before saving it into the library
        </Text>
        <TextInput
          style={ApplicationStyles.textbox}
          numberOfLines={1}
          placeholder="File Name"
        />
        <PrimaryButton onPress={addToLibrary} title="Save" marginTop={40} />
      </View>
    </Modal>
  );
};

export default EditModel;
