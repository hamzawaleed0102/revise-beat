import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BackHandler} from 'react-native';
import reducer from './app/Redux/reducers/ubqariReducer';
import BackButtonHandler from './app/Helpers/BackButtonHandler';
import AppNavigation from './app/Navigation/AppNavigation';
import {NavigationStateHandler} from './app/Helpers/ScreenTrackingMiddleware';

export const store = createStore(reducer);
class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', BackButtonHandler);
  }

  render() {
    return (
      <Provider store={store}>
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
