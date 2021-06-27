import React from 'react';
import {} from 'react-native';
import { HomeTemplate } from '../../components/templates/home/HomeTemplate';

// api接続箇所はここよ
// ここはあくまでもtemplateにデータ作成して渡す。
// ここは分岐

// 一週間分のdayを出す

const day = new Date();

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeTemplate nowDay={day} />
    </>
  );
};
