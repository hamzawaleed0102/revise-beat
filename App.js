import React from 'react';
import {Provider} from 'react-redux';
import {BackHandler, UIManager, Platform} from 'react-native';
import BackButtonHandler from './app/Helpers/BackButtonHandler';
import AppNavigation from './app/Navigation/AppNavigation';
import {NavigationStateHandler} from './app/Helpers/ScreenTrackingMiddleware';
import NavigationService from './NavigationService';

import STORE from './app/Redux/STORE';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', BackButtonHandler);
  }
  render() {
    return (
      <Provider store={STORE}>
        <AppNavigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          onNavigationStateChange={(prevState, currentState) =>
            NavigationStateHandler(prevState, currentState)
          }
        />
      </Provider>
    );
  }
}
export default App;
