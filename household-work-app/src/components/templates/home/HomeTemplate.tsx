import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../molecules/Header';

// 今日の家事事
// あくまでviewの雛形を作成するところ
interface Props {
  headerMessage: string;
}

export const HomeTemplate: React.FC<Props> = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Header headerMessage={props.headerMessage} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainWrap: {},
});
