import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import IMAGES from '../../Theme/Images';
import styles from '../../Styles/languageOptions.styles';
const langs = [
  {
    id: 3,
    title: 'English (US)',
  },
  {
    id: 2,
    title: 'English (UK)',
  },
  {
    id: 4,
    title: 'French',
  },
  {
    id: 1,
    title: 'Spanish',
  },
];
export default class LanguageOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 1,
    };
  }

  renderitem = ({item: language}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.listCard,
          {
            ...(this.state.selectedLanguage === language.id
              ? styles.selectedListCard
              : null),
          },
        ]}
        onPress={() => this.setState({selectedLanguage: language.id})}>
        <Text style={styles.listLabel}>{language.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <TopHeader centerImg={IMAGES.logo}>
        <Header title="Language Options" hideBack />
        <View style={styles.container}>
          <FlatList
            ListHeaderComponent={
              <Text style={styles.heading}> Speech Language </Text>
            }
            data={langs}
            contentContainerStyle={{padding: 20}}
            renderItem={this.renderitem}
            keyExtractor={(a, b) => b.toString()}
          />
        </View>
      </TopHeader>
    );
  }
}
