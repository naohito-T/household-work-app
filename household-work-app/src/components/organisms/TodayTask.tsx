import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APIProvider, TestContext } from '../../context/APIContext';
import { Task } from './type';

interface Props {
  Task?: Task[];
}

export const TodayTask: React.FC<Props> = (props: Props) => {
  const message = useContext(TestContext);
  console.log(message);

  return (
    <View>
      <View style={styles.container}>
        <Text>{props.Task ?? '本日のタスクはありません。'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },
});
