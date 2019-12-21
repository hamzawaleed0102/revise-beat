import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../Screens/Splash';
import SignupScreen from '../Screens/Auth/Signup';
import VerificationScreen from '../Screens/Auth/Verification';
import LoginScreen from '../Screens/Auth/Login';
import PackagesScreen from '../Screens/Packages/Packages';
import styles from '../Styles/NavigationStyles';
import LanguageOptions from '../Screens/LanguageOptions';
import VoiceOptions from '../Screens/VoiceOptions';
import TypeOrUpload from '../Screens/TypeOrUpload';
import Genres from '../Screens/Genres';
import Player from '../Screens/Player';
import Playlist from '../Screens/Playlist';

const TabNav = createBottomTabNavigator(
  {
    LanguageOptions: {
      screen: LanguageOptions,
      navigationOptions: {title: 'Language Options'},
    },
    VoiceOptions: {screen: VoiceOptions},
    TypeOrUpload: {screen: TypeOrUpload},
    Genres: {screen: Genres},
    Player: {screen: Player},
    Playlist: {screen: Playlist},
  },
  {},
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Signup: {
      screen: SignupScreen,
      navigationOptions: {header: null},
    },
    Verification: {
      screen: VerificationScreen,
      navigationOptions: {header: null},
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {header: null},
    },
    Packages: {
      screen: PackagesScreen,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'Packages',
    headerLayoutPreset: 'center',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const App = createSwitchNavigator(
  {
    Auth: {screen: AuthStack},
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
export default createAppContainer(App);
