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

export const Tasks: React.FC<Props> = (props: Props) => {
  return (
    <View>
      <View>
        {/* <Image>{props.Task.image_url}</Image> */}
        <View>
          <Text>{props.Task.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
