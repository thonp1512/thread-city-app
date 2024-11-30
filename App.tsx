import React from 'react';
import { Provider } from 'react-redux';
import storeConfig from './src/common/store/configStore';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/services/NavigationService';
import AppContainer from './src/navigator/AppContainer';

const store = storeConfig()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppContainer />
      </NavigationContainer>
  </Provider>
  );
};

export default App;
