import React from 'react';
import { TouchableOpacity, TextInput } from 'react-native';

interface Props {
  value: string;
  autoCapitalize?: string;
  complete: (value: string) => void;
}

// 下を1つにまとめることはできないのか？

export const MailInput: React.FC<Props> = (props: Props) => {
  const { value, autoCapitalize, complete } = props;
  return (
    <TouchableOpacity style={styles.mainWrap}>
      <TextInput
        value={value}
        onChange={(value) => complete(value)}
        autoCapitalize={autoCapitalize}
        keyboardType="email-address"
        placeholder="メールアドレス"
        textContentType="emailAddress"
        style={styles.input}></TextInput>
    </TouchableOpacity>
  );
};

export const PassInput: React.ReactNode = (props: Props) => {
  const { value, complete } = props;
  return (
    <TouchableOpacity style={styles.mainWrap}>
      <TextInput
        value={value}
        onChange={(value) => complete(value)}
        autoCapitalize="none"
        placeholder="パスワード"
        secureTextEntry
        textContentType="password"
        style={styles.input}></TextInput>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: '#DDD',
    borderWidth: 1,
    marginHorizontal: 50,
  },
});
