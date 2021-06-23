import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  headerMessage: string;
}

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.headerText}>{props.headerMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    alignItems: 'center', // 横に真ん中
    justifyContent: 'center', // 縦に真ん中
    height: 90,
    backgroundColor: '#44FF9A',
  },

  headerText: {
    color: '#fff',
    fontSize: 40,
  },
});
