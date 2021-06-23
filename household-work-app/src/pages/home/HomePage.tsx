import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {} from '@expo/vector-icons';
import { HomeTemplate } from '../../components/templates/home/HomeTemplate';

// ここはあくまでもtemplateにデータ作成して渡す。
// ここは分岐
export const HomePage: React.FC = () => {
  return (
    <>
      <HomeTemplate headerMessage="home" />
    </>
  );
};
