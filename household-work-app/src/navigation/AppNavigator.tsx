import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomePage } from '../pages/home/HomePage';

// ここでpage遷移を作成

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>
  );
};
