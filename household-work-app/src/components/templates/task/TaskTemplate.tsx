import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../molecules/Header';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Card } from '../../molecules/Card';

// 今日の家事事
// あくまでviewの雛形を作成するところ
interface Props {
  headerMessage: string;
  // Task: Task[];
}
// dev用
// const image = 'https://source.unsplash.com/random';

export const TaskTemplate: React.FC<Props> = (props: Props) => {
  const openURL = (e: string) => {
    const a = 'http://iot.keicode.com/arduino/bluetooth-android.php';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Header headerMessage={props.headerMessage} />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {},
  image: {},
  name: {},
});
