import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RequestAPI } from './src/lib/api/http/RequestAPI';
import firebase from 'firebase';
import { firebaseConfig } from './src/lib/api/config/dev.firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const iRequestAPI = new RequestAPI('hello');
  const [tasks, setTasks] = useState < Promise<Tasks[]>([]);
  useEffect(() => {
    const tasks = iRequestAPI.fetchTasks();
    setTasks(tasks);
  }, []);

  const tasksItems = tasks.map((task, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{task.name}</Text>
      <Text>{task.place}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      {tasksItems}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
