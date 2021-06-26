import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from './type';

// import { Dev.Task } from '../../lib/api/types/response/index.ts'; また今度
interface Props {
  Task: Task;
}

// backgroundでタスクが振られている人のアイコンを表示する
// アイコンを変えられるようにするか？
// 0がmens 1がwoman 2が2人の画像配置にするか
const initImage = 'http://';

export const Tasks: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrap}>
        <Image
          source={{
            uri: props.Task.image_url ? props.Task.image_url : initImage,
          }}
        />
      </View>
      <View>
        <Text style={styles.taskText}>{props.Task.task_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrap: {
    width: 100,
    height: 100,
  },
  taskText: {
    fontSize: 24,
  },
});
