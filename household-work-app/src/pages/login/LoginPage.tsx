import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import { InputOnChange } from '../../components/atoms/input/InputFormal';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const changeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.currentTarget.toString());
  };

  const changePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPass(e.target.toString());
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrap}>
        <View>
          <Text>LoginPage</Text>
        </View>
        <InputOnChange
          value={email}
          complete={changeEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="メールアドレス"
          textContentType="emailAddress"
        />
        <InputOnChange
          value={pass}
          complete={changePass}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="パスワード"
          textContentType="password"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrap: {
    alignItems: 'center', // 横に真ん中
    justifyContent: 'center', // 縦に真ん中
  },

  mainWrap: {
    alignItems: 'center', // 横に真ん中
    justifyContent: 'center', // 縦に真ん中
  },
});
