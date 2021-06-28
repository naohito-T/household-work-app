import React from 'react';
import {} from 'react-native';
import { TextArea } from '../atoms/text/TextArea';

export const TaskDay: React.FC = () => {
  return (
    // 本日のタスクをapiで取得。取得してきた際に何もなかった場合は本日のタスクはありません。
    // 本日のタスクを押下したあとモーダルでタスクを出そう。
    <>
      <TextArea numberOfLines={4} />
    </>
  );
};
