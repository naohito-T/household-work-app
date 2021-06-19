import React from 'react';
import type { VFC } from 'react';
import { Input } from './type';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
interface Props {
  value: string;
  complete: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  textContentType: Input['textContentType'];
  secure?: boolean;
}

export const InputOnChange: React.VFC<Props> = (props: Props) => {
  const {
    value,
    complete,
    autoCapitalize,
    keyboardType,
    placeholder,
    textContentType,
    secure,
  } = props;
  return (
    <TouchableOpacity>
      <TextInput
        value={value}
        onChange={complete}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        textContentType={textContentType}
        secureTextEntry={secure}></TextInput>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
