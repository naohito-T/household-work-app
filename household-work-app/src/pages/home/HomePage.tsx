import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {} from '@expo/vector-icons';

// interface Props {
//   title: string;
// }

export const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.mainWrap}>
        <Text>Home</Text>
      </View>
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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

  mainWrap: {},
});
