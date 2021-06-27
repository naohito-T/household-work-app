import React from 'react';
import {
  NavigationContainer,
  NavigationContext,
} from '@react-navigation/native';

import { TaskPage } from '../pages/task/TaskPage';

// ここでpage遷移を作成

export const AppNavigator: React.FC = (props) => {
  return (
    <NavigationContainer>
      <TaskPage />
    </NavigationContainer>
  );
};
