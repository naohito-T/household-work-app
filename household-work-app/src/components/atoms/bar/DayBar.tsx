import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const day = new Date();

interface Props {
  nowDay: Date;
}

export const DayBar: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>{/* <Text>{props.nowDay}</Text> */}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});
