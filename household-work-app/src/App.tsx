import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { RequestAPI } from './lib/api/http/RequestAPI';
import firebase from 'firebase';
import { firebaseConfig } from './lib/api/config/dev.firebase';
import { registerRootComponent } from 'expo';
import { RootContext } from './context';

import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/LoginPage';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App: React.FC = () => {
  // firebase
  // const iRequestAPI = new RequestAPI('hello');
  // const [tasks, setTasks] = useState < Promise<Tasks[]>([]);
  // useEffect(() => {
  //   const tasks = iRequestAPI.fetchTasks();
  //   setTasks(tasks);
  // }, []);

  // const tasksItems = tasks.map((task, index) => (
  //   <View style={{ margin: 10 }} key={index.toString()}>
  //     <Text>{task.name}</Text>
  //     <Text>{task.place}</Text>
  //   </View>
  // ));

  return (
    <>
      {/* <HomePage /> */}
      {/* <LoginPage /> */}

      <AppNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;

registerRootComponent(App);
