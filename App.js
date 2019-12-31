import React from 'react';
import {Provider} from 'react-redux';
import {BackHandler} from 'react-native';
import BackButtonHandler from './app/Helpers/BackButtonHandler';
import AppNavigation from './app/Navigation/AppNavigation';
import {NavigationStateHandler} from './app/Helpers/ScreenTrackingMiddleware';
import STORE from './app/Redux/STORE';

class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', BackButtonHandler);
  }
  render() {
    return (
      <Provider store={STORE}>
        <AppNavigation
          onNavigationStateChange={(prevState, currentState) =>
            NavigationStateHandler(prevState, currentState)
          }
        />
      </Provider>
    );
  }
}
export default App;
