import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
