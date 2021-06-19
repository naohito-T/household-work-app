import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomePage } from '../pages/home/HomePage';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>
  );
};
