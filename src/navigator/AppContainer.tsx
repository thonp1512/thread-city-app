
import { View } from 'react-native';
import colors from '../theme/colors';
import React from 'react';
import AppStack from './AppStack';
import { Routes } from './routes';

export type StackParamList = {
    [Routes.HOME]: undefined;
    [Routes.LOGIN]: undefined;
    [Routes.REGISTER]: undefined;
    
  };

const AppContainer = () => {
  return (
    <View style={{ flex: 1,
      backgroundColor:colors.white}}>
      <AppStack/>
    </View>
  );
};

export default AppContainer;
