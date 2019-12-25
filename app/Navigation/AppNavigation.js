import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../Screens/Splash/Splash';
import SignupScreen from '../Screens/Auth/Signup';
import VerificationScreen from '../Screens/Auth/Verification';
import LoginScreen from '../Screens/Auth/Login';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import PackagesScreen from '../Screens/Packages/Packages';
import styles from '../Styles/NavigationStyles';
import LanguageOptions from '../Screens/LanguageOptions/LanguageOptions';
import VoiceOptions from '../Screens/VoiceOptions/VoiceOptions';
import TypeOrUpload from '../Screens/TypeOrUpload/TypeOrUpload';
import Type from '../Screens/TypeOrUpload/Type';
import Upload from '../Screens/TypeOrUpload/Documents';
import DocumentUploaded from '../Screens/TypeOrUpload/DocumentUploaded';
import Genres from '../Screens/Genres';
import Player from '../Screens/Player';
import Playlist from '../Screens/Playlist';
import ResetPassword from '../Screens/Auth/ResetPassword';
import Voices from '../Screens/VoiceOptions/Voices';
import VoiceTuner from '../Screens/VoiceOptions/VoiceTuner';
import {fromRight} from 'react-navigation-transitions';

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
  {
    // initialRouteName: 'Player',
  },
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: {header: null},
    },
    Voices: {
      screen: Voices,
      navigationOptions: {header: null},
    },
    VoiceTuner: {
      screen: VoiceTuner,
      navigationOptions: {header: null},
    },
    Type: {
      screen: Type,
      navigationOptions: {header: null},
    },
    Upload: {
      screen: Upload,
      navigationOptions: {header: null},
    },
    DocumentUploaded: {
      screen: DocumentUploaded,
      navigationOptions: {header: null},
    },
  },
  {
    transitionConfig: () => fromRight(500),
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
    Forgot: {
      screen: ForgotPassword,
      navigationOptions: {header: null},
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'Signup',
    headerLayoutPreset: 'center',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const App = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: {screen: AuthStack},
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(App);
