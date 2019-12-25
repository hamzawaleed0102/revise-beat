import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Theme';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/documents.styles';

const BottomEditor = ({
  selectedDoc,
  updateDocumentTitle,
  onChangeTitle,
  value,
}) => {
  return (
    <View style={styles.bottomEditContainer}>
      <Text style={styles.editorHeading}>Edit Document</Text>
      <TextInput
        placeholder="Title"
        onChangeText={val => onChangeTitle(val)}
        value={value || selectedDoc.title}
        style={ApplicationStyles.textbox}
      />
      <PrimaryButton
        title="Save"
        onPress={updateDocumentTitle}
        marginTop={40}
      />
    </View>
  );
};

export default BottomEditor;
