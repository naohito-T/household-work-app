import React from 'react';
import { TextInput } from 'react-native';

interface Props {
  numberOfLines: number;
  placeText?: string;
  filedMessage?: string;
  completion?: () => void;
}

export const TextArea: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      multiline
      numberOfLines={props.numberOfLines}
      placeholder={props.placeText}
      onChange={props.completion}
    />
  );
};
