import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={styles.textStyle}>Enter Name</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is: {name}</Text>
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
