import React from 'react';
import { View, StyleSheet } from 'react-native';
/* type */
import { Task } from '../organisms/type';

interface Props {
  Task?: Task[];
}

export const Memo: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.Task ? props.Task : '本日のタスクはありません。'}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
