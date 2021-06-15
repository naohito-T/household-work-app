import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const changeEmail = (email: any) => {
    console.log(typeof email);
    setEmail(email);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrap}>
        <View>
          <Text>LoginPage</Text>
        </View>
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
