import React from 'react';
import { View, Text, StyleProp, TextStyle } from 'react-native';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
  styleWrap?: StyleProp<TextStyle>;
}

export const TextButton: React.FC<Props> = (props: Props) => {
  return (
    <View style={props.styleWrap}>
      <Text style={props.style}>{props.text}</Text>
    </View>
  );
};
