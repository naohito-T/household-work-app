import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
/* atoms */
import { TextButton } from '../atoms/button/TextButton';
// import styled from 'styled-component/native';

interface Props {
  complete: () => void;
}

// アクティブなやつの色を変える
// またアクティブになる度にメソッドを走らせるか？

export const MainBarSwitch: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.complete} style={styles.buttonWrap}>
        <TextButton text="日常タスク" />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.complete}>
        <TextButton text="イベントタスク" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
  },
  buttonWrap: {},
});
