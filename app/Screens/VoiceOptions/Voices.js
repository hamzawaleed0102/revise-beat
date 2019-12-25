import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SectionList,
  Image,
} from 'react-native';
import Header from '../../Components/Header';
import TopHeader from '../../Components/TopHeader';
import IMAGES from '../../Theme/Images';
import styles from '../../Styles/voices.styles';
import WideBanner from '../../Components/Ads/WideBanner';
const DATA = [
  {
    title: 'Male',
    data: [
      {id: 1, title: 'Pizza'},
      {id: 2, title: 'Pizza 2'},
      {id: 3, title: 'Pizza 3 '},
    ],
  },
  {
    title: 'Female',
    data: [
      {id: 4, title: 'Pizza'},
      {id: 5, title: 'Pizza 2'},
      {id: 6, title: 'Pizza 3 '},
    ],
  },
];
export default class Voices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 1,
    };
  }

  renderitem = ({item: voice}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.listCard,
          {
            ...(this.state.selectedLanguage === voice.id
              ? styles.selectedListCard
              : null),
          },
        ]}
        onPress={() => this.setState({selectedLanguage: voice.id})}>
        <Text style={styles.listLabel}>{voice.title}</Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/voices/play-mini-line.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <TopHeader>
        <Header title="Voices" />
        <View style={styles.container}>
          <SectionList
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.heading}>{title}</Text>
            )}
            sections={DATA}
            contentContainerStyle={{padding: 20}}
            renderItem={this.renderitem}
            keyExtractor={(a, b) => b.toString()}
          />
          <WideBanner />
        </View>
      </TopHeader>
    );
  }
}
