import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { APIProvider, TestContext } from '../../context/APIContext';

export const TodayTask: React.FC<typeof TestContext> = () => {
  const message = useContext(TestContext);
  console.log(message);

  return (
    <View>
      <View></View>
      <Text>今日やる家事はありません</Text>
    </View>
  );
};
