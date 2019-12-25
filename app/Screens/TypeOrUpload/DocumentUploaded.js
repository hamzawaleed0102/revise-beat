/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import IMAGES from '../../Theme/Images';
import WideBanner from '../../Components/Ads/WideBanner';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import styles from '../../Styles/documents.styles';
import DocumentCard, {
  docCardStyles,
} from '../../Components/DocumentCard/DocumentCard';
import {ApplicationStyles} from '../../Theme';
import BottomEditor from './BottomEditor';
import EditModel from './EditModel';
import DocumentEditCard from '../../Components/DocumentCard/DocumentEditCard';
export default class DocumentUploaded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedDoc: {
        id: 4,
        title: 'Pizza',
        subtitle: 'asdf asdf asf asdf asdf asf asdfasdf asdf asd',
      },
      docTitle: '',
      editorVisible: false,
    };
  }

  updateDocumentTitle = () => {
    let uploadedDoc = {...this.state.uploadedDoc};
    uploadedDoc.title = this.state.docTitle;
    // send request to update this.state.uploadedDoc in DB then update list/state
    this.setState({uploadedDoc});
    //then hide bottom editor
    this.toggleDocumentEditor();
    this.props.navigation.goBack();
  };

  onChangeTitle = docTitle => {
    this.setState({docTitle});
  };

  toggleDocumentEditor = () => {
    this.setState({
      editorVisible: !this.state.editorVisible,
    });
  };

  render() {
    console.log('uploadedDoc', this.state.uploadedDoc);
    return (
      <TopHeader>
        <Header title="Documents" />
        <View style={styles.uploadedDocContainer}>
          <Text style={styles.heading}>
            Your document has been uploaded successfully. Tap on Edit Icon to
            change the Title
          </Text>
          <View style={{flex: 1}}>
            <DocumentEditCard
              document={this.state.uploadedDoc}
              toggleDocumentEditor={this.toggleDocumentEditor}
            />
          </View>
          {this.state.editorVisible && (
            <BottomEditor
              onChangeTitle={this.onChangeTitle}
              updateDocumentTitle={this.updateDocumentTitle}
              selectedDoc={this.state.uploadedDoc}
              value={this.state.docTitle}
            />
          )}
          <PrimaryButton title="Save" />
          <WideBanner />
        </View>
      </TopHeader>
    );
  }
}
