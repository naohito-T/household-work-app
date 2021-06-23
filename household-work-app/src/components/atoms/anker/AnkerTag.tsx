import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  message: string;
}

// urlを今後分岐できるようにする。

export const AnkerTag: React.VFC<Props> = (props: Props) => {
  return (
    <TouchableOpacity>
      <Text>{props.message}</Text>
    </TouchableOpacity>
  );
};
