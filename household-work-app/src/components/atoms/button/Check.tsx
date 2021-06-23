import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  color: string;
}
// colorが指定できる
// onPressで指定のmethodを実行できるようにする。
// imageのアイコンが必要
// touch されたらモーダル出現のタスクは終了ですか？とする。
export const CheckButton: React.FC<Props> = (props: Props) => {
  return <TouchableOpacity></TouchableOpacity>;
};
