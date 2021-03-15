import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  const pwMinLength = 5;

  return (
    <View>
      <Text style={styles.textStyle}>Enter Password</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      {password.length < pwMinLength ? (
        <Text>Password minimum length is {pwMinLength}.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: '#000',
    borderWidth: 1,
  },
});
export default TextScreen;
