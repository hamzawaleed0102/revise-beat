/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import WideBanner from '../../Components/Ads/WideBanner';
import styles from '../../Styles/documents.styles';
import DocumentCard from '../../Components/DocumentCard/DocumentCard';
import BottomEditor from './BottomEditor';
import EditModel from './EditModel';
import FAB from '../../Components/FAB/FAB';
const DATA = [
  {
    id: 4,
    title: 'Pizza',
    subtitle: 'asdf asdf asf asdf asdf asf asdfasdf asdf asd',
  },
  {
    id: 4,
    title: 'Cheff',
    subtitle: 'asdf asdf asf asdf asdf asf asdfasdf asdf asd',
  },
  {
    id: 4,
    title: 'Lahore',
    subtitle: 'asdf asdf asf asdf asdf asf asdfasdf asdf asd',
  },
  {
    id: 4,
    title: 'Doc',
    subtitle: 'asdf asdf asf asdf asdf asf asdfasdf asdf asd',
  },
  {id: 5, title: 'Pizza 2'},
  {id: 6, title: 'Pizza 3 '},
];
export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedDoc: {},
      editorVisible: false,
      documents: DATA,
    };
  }

  renderitem = ({item: document, index}) => {
    return (
      <>
        <DocumentCard
          document={{...document, index}}
          handleDocClick={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }
          toggleDocumentEditor={this.toggleDocumentEditor}
          deleteDocument={this.deleteDocument}
        />
      </>
    );
  };
  addToLibrary = () => {
    this.setState({modalVisible: !this.state.modalVisible});
    // request to add to track to library
  };

  toggleDocumentEditor = (selectedDoc, editorVisible) => {
    this.setState({
      selectedDoc,
      editorVisible,
    });
  };

  updateDocumentTitle = () => {
    let {index} = this.state.selectedDoc;
    let documents = [...this.state.documents];
    documents[index] = this.state.selectedDoc;
    // send request to update this.state.selectedDoc in DB then update list/state
    this.setState({documents});
    //then hide bottom editor
    this.toggleDocumentEditor({}, false);
  };

  deleteDocument = index => {
    const {documents} = this.state;
    documents.splice(index, 1);
    this.setState({documents});
  };

  onChangeTitle = title => {
    this.setState({selectedDoc: {...this.state.selectedDoc, title}});
  };

  addNewDocument = () => {
    this.props.navigation.navigate('DocumentUploaded');
  };

  render() {
    return (
      <TopHeader>
        <Header title="Documents" />
        <View style={styles.container}>
          <FlatList
            ListHeaderComponent={() => (
              <Text style={styles.heading}>
                {this.state.documents.length > 0
                  ? 'Select a document to play and save into library'
                  : 'No documents found. Click the + button to create new one'}
              </Text>
            )}
            data={this.state.documents}
            contentContainerStyle={[
              styles.content,
              {paddingBottom: this.state.editorVisible ? 200 : 20},
            ]}
            renderItem={this.renderitem}
            keyExtractor={(a, b) => b.toString()}
          />
          {this.state.editorVisible && (
            <BottomEditor
              onChangeTitle={this.onChangeTitle}
              updateDocumentTitle={this.updateDocumentTitle}
              selectedDoc={this.state.selectedDoc}
            />
          )}
          <EditModel
            addToLibrary={this.addToLibrary}
            modalVisible={this.state.modalVisible}
          />
          <FAB onPress={this.addNewDocument} />
          <WideBanner />
        </View>
      </TopHeader>
    );
  }
}
