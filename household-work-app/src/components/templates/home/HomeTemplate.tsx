import React from 'react';
import { View, Text } from 'react-native';
import { DayBar } from '../../atoms/bar/DayBar';

interface Props {
  nowDay: Date;
}

export const HomeTemplate: React.FC<Props> = (props: Props) => {
  return (
    <DayBar nowDay={props.nowDay} /> // propsはpageから渡せよ
  );
};
