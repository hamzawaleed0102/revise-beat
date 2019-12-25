/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import COLORS from '../../Theme/Colors';

export default class DocumentCard extends Component {
  state = {
    showContextMenu: false,
  };

  handleEdit = () => {
    const {document, toggleDocumentEditor} = this.props;
    toggleDocumentEditor(document, true);
    this.setState({showContextMenu: false});
  };

  handleDelete = () => {
    this.setState({showContextMenu: false});
    this.props.deleteDocument();
  };

  render() {
    const {document, handleDocClick} = this.props;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.9}
          style={docCardStyles.listCard}
          onPress={() =>
            handleDocClick(document) + this.setState({showContextMenu: false})
          }>
          <View style={docCardStyles.titlesContainer}>
            <Text style={docCardStyles.cardHeading} numberOfLines={1}>
              {document.title}
            </Text>
            <Text style={docCardStyles.cardSubtitle} numberOfLines={1}>
              {document.subtitle}
            </Text>
          </View>
          <TouchableOpacity
            style={docCardStyles.contextBtn}
            onPress={() =>
              this.setState({showContextMenu: !this.state.showContextMenu})
            }>
            <Image
              style={docCardStyles.editIcon}
              source={require('../../../assets/icons/voices/play-mini-line.png')}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        {this.state.showContextMenu && (
          <View style={docCardStyles.contextMenu}>
            <TouchableOpacity
              style={docCardStyles.row}
              onPress={this.handleEdit}>
              <Image
                source={require('../../../assets/icons/documents/edit-line.png')}
              />
              <Text style={docCardStyles.contextMenuLabel}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[docCardStyles.row, {borderBottomWidth: 0}]}
              onPress={this.handleDelete}>
              <Image
                source={require('../../../assets/icons/documents/delete-bin-line.png')}
              />
              <Text style={docCardStyles.contextMenuLabel}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

export const docCardStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 7,
    paddingRight: 30,
    alignItems: 'center',
  },
  editIcon: {
    backgroundColor: 'white',
  },
  titlesContainer: {
    paddingVertical: 20,
  },
  listCard: {
    elevation: 2,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 15,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 3},
    borderWidth: 2,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  cardHeading: {
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: COLORS.blackText,
    width: '80%',
  },
  contextMenu: {
    right: 0,
    backgroundColor: 'white',
    bottom: -8,
    position: 'absolute',
    zIndex: 100,
    elevation: 5,
    borderRadius: 8,
  },
  contextMenuLabel: {
    marginLeft: 4,
  },
});
