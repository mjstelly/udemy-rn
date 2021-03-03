import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ColorCounter;
