import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TaskTemplate } from '../../components/templates/task/TaskTemplate';

// api接続箇所はここよ
// ここはあくまでもtemplateにデータ作成して渡す。
// ここは分岐
export const TaskPage: React.FC = () => {
  return (
    <>
      <TaskTemplate headerMessage="home" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
