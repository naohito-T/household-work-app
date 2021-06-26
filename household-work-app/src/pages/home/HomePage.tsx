import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { HomeTemplate } from '../../components/templates/home/HomeTemplate';

// api接続箇所はここよ
// ここはあくまでもtemplateにデータ作成して渡す。
// ここは分岐
export const HomePage: React.FC = () => {
  return (
    <>
      <HomeTemplate headerMessage="home" />
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
